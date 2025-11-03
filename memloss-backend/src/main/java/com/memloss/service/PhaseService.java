// service/PhaseService.java
package com.memloss.service;

import com.memloss.domain.Events.*;
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

@Service
public class PhaseService {
  private static final Logger log = LoggerFactory.getLogger(PhaseService.class);

  private final AtomicReference<Phase> phase = new AtomicReference<>(Phase.INIT);
  private final Sinks.Many<OutEvent> bus = Sinks.many().multicast().onBackpressureBuffer();

  public Phase getPhase() { return phase.get(); }
  public Flux<OutEvent> stream() { return bus.asFlux(); }

  public void init() { setPhase(Phase.HELP); } // 앱 시작 시 HELP로

  public void onEvent(InEvent e) {
    try {
      switch (e.type()) {
        case "consentYes" -> setPhase(Phase.GARDEN);

        case "rotation" -> emit(OutEvent.ledParam("rotation", e.payload())); // 그대로 TD로

        case "breath" -> {
          var map = (java.util.Map<?,?>) e.payload();
          double intensity = ((Number) map.getOrDefault("intensity", 0)).doubleValue();
          double dustOpacity = Math.max(0, 1.0 - intensity);
          emit(OutEvent.ledParam("dustOpacity", dustOpacity));
          // 간단 누적 임계 (실전은 EMA/윈도우)
          if (intensity > 0.7 && phase.get() == Phase.DUST) setPhase(Phase.TIMELINE);
        }

        case "timelineSeek" -> {
          var map = (java.util.Map<?,?>) e.payload();
          double t = ((Number) map.getOrDefault("t", 0)).doubleValue();
          var label = (t < 0.33) ? "childhood" : (t < 0.66 ? "adult" : "elder");
          emit(OutEvent.timeline(t, label));
          if (t <= 0.2 && phase.get() == Phase.TIMELINE) setPhase(Phase.DRAGONFLY);
        }

        case "catch" -> {
          // 실전은 진행도 누적/점수 관리
          emit(OutEvent.timeline(0.99, "wrapup"));
          setPhase(Phase.FINALE);
        }
      }
    } catch (Exception ex) {
      log.warn("onEvent error: {}", ex.toString());
    }
  }

  public void setPhase(Phase p) {
    var prev = phase.getAndSet(p);
    if (prev == p) return;
    log.info("PHASE {} -> {}", prev, p);
    emit(OutEvent.phase(p));
    if (p == Phase.GARDEN) {
      // 60s 후 DUST (단순 타이머, 실전은 cancel 핸들링)
      Flux.just(true).delayElements(Duration.ofSeconds(60))
        .subscribe(_ -> { if (phase.get()==Phase.GARDEN) setPhase(Phase.DUST); });
    }
    if (p == Phase.FINALE) {
      Flux.just(true).delayElements(Duration.ofSeconds(10))
        .subscribe(_ -> setPhase(Phase.INIT));
    }
  }

  private void emit(OutEvent event) {
    bus.tryEmitNext(event);
  }
}
