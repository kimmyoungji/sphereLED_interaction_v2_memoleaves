// service/PhaseService.java
package com.memloss.service;

import com.memloss.domain.InEvent;
import com.memloss.domain.OutEvent;
import com.memloss.domain.Phase;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Sinks;

import java.time.Duration;
import java.util.concurrent.atomic.AtomicReference;
import java.util.Deque;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedDeque;

@Service
public class PhaseService {
  private static final Logger logger = LoggerFactory.getLogger(PhaseService.class);

  private final AtomicReference<Phase> phase = new AtomicReference<>(Phase.INIT);
  private final Sinks.Many<OutEvent> bus = Sinks.many().replay().latest();
  private final ConcurrentHashMap<String, Integer> dragonflyCounts = new ConcurrentHashMap<>();
  private final Deque<OutEvent> recent = new ConcurrentLinkedDeque<>();
  private static final List<Phase> ORDER = List.of(
    Phase.INIT,
    Phase.HELP,
    Phase.GARDEN_AND_DUST,
    Phase.TIMELINE,
    Phase.DRAGONFLY,
    Phase.FINALE
  );
  private static final long STEP_MIN_INTERVAL_MS = 300; // debounce for prev/next
  private volatile long lastStepAtMs = 0L;

  public Phase getPhase() { return phase.get(); }
  public Flux<OutEvent> stream() { return bus.asFlux(); }

  /* 앱 시작 시 INIT */
  public void init() { setPhase(Phase.INIT); } 

  /* 클라이언트에서 발생한 이벤트를 처리 */
  public void onEvent(InEvent e) {
    try {
      switch (e.type()) {

        /* phase */
        case "init" -> setPhase(Phase.INIT);
        case "start" -> setPhase(Phase.HELP);
        case "consentYes" -> setPhase(Phase.GARDEN_AND_DUST);
        case "consentNo" -> setPhase(Phase.INIT);
        case "next" -> {
          long now = System.currentTimeMillis();
          if (now - lastStepAtMs < STEP_MIN_INTERVAL_MS) break;
          var cur = phase.get();
          int i = ORDER.indexOf(cur);
          if (i >= 0 && i < ORDER.size() - 1) {
            logger.info("NEXT {} -> {}", cur, ORDER.get(i + 1));
            setPhase(ORDER.get(i + 1));
            lastStepAtMs = now;
          }
        }
        case "prev" -> {
          long now = System.currentTimeMillis();
          if (now - lastStepAtMs < STEP_MIN_INTERVAL_MS) break;
          var cur = phase.get();
          int i = ORDER.indexOf(cur);
          if (i > 0) {
            logger.info("PREV {} -> {}", cur, ORDER.get(i - 1));
            setPhase(ORDER.get(i - 1));
            lastStepAtMs = now;
          }
        }

        /* sphere param - rotation */
        case "sphereRotation" -> {
          var map = (java.util.Map<?,?>) e.payload();
          Object yawObj = map.get("yaw");
          Object pitchObj = map.get("pitch");
          Object rollObj = map.get("roll");
          double yaw = (yawObj instanceof Number) ? ((Number) yawObj).doubleValue() : 0.0;
          double pitch = (pitchObj instanceof Number) ? ((Number) pitchObj).doubleValue() : 0.0;
          double roll = (rollObj instanceof Number) ? ((Number) rollObj).doubleValue() : 0.0;
          emit(OutEvent.sphereRotation(yaw, pitch, roll)); // structured payload to FE
        }

        /* sphere param - opacity */
        case "sphereOpacity" -> {

          var map = (java.util.Map<?,?>) e.payload();

          Object intensityObj = map.get("intensity");
          double intensity = (intensityObj instanceof Number) ? ((Number) intensityObj).doubleValue() : 0.0;

          emit(OutEvent.sphereOpacity(intensity)); // structured payload to FE
          
          // 간단 누적 임계 (실전은 EMA/윈도우)opacity
          if (intensity > 0.8 && phase.get() == Phase.GARDEN_AND_DUST) setPhase(Phase.TIMELINE);
        }

        /* timeline */
        case "timelineSeek" -> {
          
          // timeline 값 브로드캐스팅
          var map = (java.util.Map<?,?>) e.payload();
          Object tObj = map.get("t");
          double t = (tObj instanceof Number) ? ((Number) tObj).doubleValue() : 0.0;
          var timeLabel = (t < 0.33) ? "childhood" : (t < 0.66 ? "adult" : "elder");
          
          // 단계를 의미하는 timeLabel 값 브로드캐스팅
          emit(OutEvent.timeline(t, timeLabel));
          
          // timeline slider 값이 20% 이하라면 DRAGONFLY로 변경
          if (t <= 0.05 && phase.get() == Phase.TIMELINE) setPhase(Phase.DRAGONFLY);
        }

        case "catchDragonfly" -> {
          var map = (java.util.Map<?,?>) e.payload();
          Object countObj = map.get("count");
          int count = (countObj instanceof Number) ? ((Number) countObj).intValue() : 0;
          emit(OutEvent.catchDragonfly(count));

          if (count >= 16 && phase.get() == Phase.DRAGONFLY) setPhase(Phase.FINALE);
        } 
      }
    } catch (Exception ex) {
      logger.warn("onEvent error: {}", ex.toString());
    }
  }

  /* phase 변경 */
  public void setPhase(Phase p) {
    var prev = phase.getAndSet(p);
    if (prev == p) return;
    emit(OutEvent.phase(p));

    /* if (p == Phase.GARDEN_AND_DUST) {
      // 60s 후 DUST (단순 타이머, 실전은 cancel 핸들링)
      Flux.just(true).delayElements(Duration.ofSeconds(60))
        .subscribe(ignored-> { if (phase.get()==Phase.GARDEN_AND_DUST) setPhase(Phase.TIMELINE); });
    }
    if (p == Phase.FINALE) {
      Flux.just(true).delayElements(Duration.ofSeconds(10))
        .subscribe(ignored -> setPhase(Phase.INIT));
    } */

  }

  /* out event 발생 */
  private void emit(OutEvent event) {
    
    var r = bus.tryEmitNext(event);
    if (!r.isSuccess()) {
      logger.warn("emit failed: {}", r);
    }

    recent.addLast(event);
    while (recent.size() > 100) { recent.pollFirst(); }

  }

  public List<OutEvent> recentEvents() {
    return java.util.List.copyOf(recent);
  }
}
