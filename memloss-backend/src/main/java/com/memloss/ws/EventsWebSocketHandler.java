// ws/EventsWebSocketHandler.java
package com.memloss.ws;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.memloss.domain.InEvent;
import com.memloss.domain.OutEvent;
import com.memloss.service.PhaseService;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Mono;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
public class EventsWebSocketHandler implements WebSocketHandler {
  private final PhaseService phases;
  private final ObjectMapper om = new ObjectMapper();
  private final Logger logger = LoggerFactory.getLogger(EventsWebSocketHandler.class);
  private final java.util.Set<String> sessions =
      java.util.Collections.newSetFromMap(new java.util.concurrent.ConcurrentHashMap<>());


  public EventsWebSocketHandler(PhaseService phases) {
    this.phases = phases;
  }

  @Override
  public Mono<Void> handle(WebSocketSession session) {

    String id = session.getId();
    sessions.add(id);
    logger.info("[WS] connected: {} (active={})", id, sessions.size());

    var initial = Mono.fromSupplier(() -> OutEvent.phase(phases.getPhase()));
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
}
