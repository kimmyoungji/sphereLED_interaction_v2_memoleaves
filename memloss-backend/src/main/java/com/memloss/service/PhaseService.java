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
  private final Sinks.Many<OutEvent> bus = Sinks.many().multicast().onBackpressureBuffer();
  private final ConcurrentHashMap<String, Integer> dragonflyCounts = new ConcurrentHashMap<>();
  private final Deque<OutEvent> recent = new ConcurrentLinkedDeque<>();

  public Phase getPhase() { return phase.get(); }
  public Flux<OutEvent> stream() { return bus.asFlux(); }

  /* 앱 시작 시 HELP로 */
  public void init() { setPhase(Phase.HELP); } 

  /* 클라이언트에서 발생한 이벤트를 처리 */
  public void onEvent(InEvent e) {
    try {
      switch (e.type()) {

        // 클라이언트에서 phase를 보내어 그대로 서버의 상태가 결정되는 방식을 지양해야한다.
        // 만약 그런 방식으로 돌아간다면 여러 클라이언트들이 자유롭게 서버의 상태를 결정하여, 체험이 순서대로 진행되지 않을 수 있다.
        // 클라이언트에서 특정 이벤트를 수신하고 그에 따른 상태를 상태머신에서 결정하는 것이 더 안정적이다.
        
        // 클라이언트에서 "init" 이벤트 수신시 INIT으로 변경
        case "init" -> setPhase(Phase.INIT);

        // 클라이언트에서 "start" 이벤트 수신시 HELP로 변경
        case "start" -> setPhase(Phase.HELP);

        // 클라이언트에서 "consentYes" 이벤트 수신시 GARDEN_AND_DUST로 변경
        case "consentYes" -> setPhase(Phase.GARDEN_AND_DUST);

        // 클라이언트에서 "consentNo" 이벤트 수신시 INIT으로 변경
        case "consentNo" -> setPhase(Phase.INIT);
        
        // 클라이언트에서 "rotation" 이벤트 수신시 TD로 전달
        case "rotation" -> emit(OutEvent.ledParam("rotation", e.payload())); // 그대로 TD로

        // 클라이언트에서 "breath" 이벤트 수신시 TD로 전달
        case "breath" -> {
          var map = (java.util.Map<?,?>) e.payload();
          Object iVal = map.get("intensity");
          double intensity = (iVal instanceof Number) ? ((Number) iVal).doubleValue() : 0.0;
          double dustOpacity = Math.max(0, 1.0 - intensity);
          emit(OutEvent.ledParam("dustOpacity", dustOpacity));
          // 간단 누적 임계 (실전은 EMA/윈도우)
          if (intensity > 0.7 && phase.get() == Phase.GARDEN_AND_DUST) setPhase(Phase.TIMELINE);
        }

        // 클라이언트에서 "timelineSeek" 이벤트 수신시 timeLabel 값 브로드캐스팅
        case "timelineSeek" -> {
          
          // timeline 값 브로드캐스팅
          var map = (java.util.Map<?,?>) e.payload();
          Object tObj = map.get("t");
          double t = (tObj instanceof Number) ? ((Number) tObj).doubleValue() : 0.0;
          var timeLabel = (t < 0.33) ? "childhood" : (t < 0.66 ? "adult" : "elder");
          
          // 단계를 의미하는 timeLabel 값 브로드캐스팅
          emit(OutEvent.timeline(t, timeLabel));
          
          // timeline slider 값이 20% 이하라면 DRAGONFLY로 변경
          if (t <= 0.2 && phase.get() == Phase.TIMELINE) setPhase(Phase.DRAGONFLY);
        }

        case "catch" -> {

          var sid = e.sessionId();

          if(sid != null && !sid.isBlank()){
            int newCount = dragonflyCounts.compute(sid, (k, v) -> v == null ? 1 : v + 1);
            emit(OutEvent.dragonflyCount(sid, newCount));
          } else {
            logger.warn("catch event without sessionId; cannot update dragonfly count");
          }

          // 실전은 진행도 누적/점수 관리
          emit(OutEvent.timeline(0.99, "wrapup"));
          setPhase(Phase.FINALE);
        }
      }
    } catch (Exception ex) {
      logger.warn("onEvent error: {}", ex.toString());
    }
  }

  /* phase 변경 */
  public void setPhase(Phase p) {

    // 새로운 phase와 현재 phase가 같다면 return
    var prev = phase.getAndSet(p);
    if (prev == p) return;

    logger.info("PHASE {} -> {}", prev, p);
    
    // phase 변경 이벤트 발생
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
    
    // Sinks.Many<OutEvent>에 이벤트를 발행해 Sink에 구독 중인 모든 구독자에게 동일 이벤트가 전달된다.
    var r = bus.tryEmitNext(event);

    if (!r.isSuccess()) {
      logger.warn("emit failed: {}", r);
    } else {
      logger.info("emit: {}", event);
    }

    recent.addLast(event);
    while (recent.size() > 100) { recent.pollFirst(); }

  }

  public List<OutEvent> recentEvents() {
    return java.util.List.copyOf(recent);
  }
}
