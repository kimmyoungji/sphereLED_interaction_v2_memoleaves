// ws/EventsWebSocketHandler.java
package com.memloss.ws;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.memloss.domain.InEvent;
import com.memloss.domain.OutEvent;
import com.memloss.service.PhaseService;
import com.memloss.service.SessionCapService;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Mono;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.List;

@Component
public class EventsWebSocketHandler implements WebSocketHandler {
  private final PhaseService phases;
  private final SessionCapService cap;
  private final ObjectMapper om = new ObjectMapper();
  private final Logger logger = LoggerFactory.getLogger(EventsWebSocketHandler.class);
  private final java.util.Set<String> sessions =
      java.util.Collections.newSetFromMap(new java.util.concurrent.ConcurrentHashMap<>());


  public EventsWebSocketHandler(PhaseService phases, SessionCapService cap) {
    this.phases = phases;
    this.cap = cap;
  }

  @Override
  public Mono<Void> handle(WebSocketSession session) {

    // sessionId를 이용하여 각 클라이언트의 상태를 관리
    String id = session.getId();

    // capacity check: register or reject
    boolean ok = cap.tryRegister(id);
    if (!ok) {
      logger.warn("[WS] reject due to capacity: {} (active={}/{})", id, cap.activeCount(), cap.maxSessions());
      return session.close(new org.springframework.web.reactive.socket.CloseStatus(4003, "CAP_REACHED"));
    }

    sessions.add(id);

    logger.info("[WS] connected: {} (active={})", id, sessions.size());
    logger.info("[WS] sessionIds: {}", sessions);

    // 초기 상태 전달
    var initial = Mono.fromSupplier(() -> OutEvent.phase(phases.getPhase()));
    
    // 상태 변경 이벤트 전달
    var out = initial.concatWith(phases.stream())
      .doOnSubscribe(s -> logger.info("[WS] out subscribed: {}", id))
      .doFinally(sig -> logger.info("[WS] out finally({}): {}", sig, id))
      .map(ev -> {
        try {
          return om.writeValueAsString(ev);
        } catch (Exception e) {
          throw new RuntimeException(e);
        }
      })
      .map(session::textMessage);

    var in = session.receive()
      .doOnSubscribe(s -> logger.info("[WS] in subscribed: {}", id))
      .doFinally(sig -> logger.info("[WS] in finally({}): {}", sig, id))
      .map(WebSocketMessage::getPayloadAsText)
      .flatMap(txt -> { phases.onEvent(parse(txt)); return Mono.empty(); })
      .onErrorResume(ex -> { logger.warn("[WS] in error for {}: {}", id, ex.toString()); return Mono.empty(); });

    return session.send(out)
      .and(in)
      .doFinally(sig -> {
        sessions.remove(id);
        cap.unregister(id);
        logger.info("[WS] disconnected({}): {} (active={})", sig, id, sessions.size());
      });
  }

  private InEvent parse(String json) {
    try {
      return om.readValue(json, InEvent.class);
    } catch (Exception e) {
      throw new IllegalArgumentException("Invalid inbound JSON: " + json, e);
    }
  }

  public List<String> sessionsSnapshot() {
    return java.util.List.copyOf(sessions);
  }
}
