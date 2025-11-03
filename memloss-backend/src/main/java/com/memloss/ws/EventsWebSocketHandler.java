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

@Component
public class EventsWebSocketHandler implements WebSocketHandler {
  private final PhaseService phases;
  private final ObjectMapper om = new ObjectMapper();

  public EventsWebSocketHandler(PhaseService phases) {
    this.phases = phases;
  }

  @Override
  public Mono<Void> handle(WebSocketSession session) {
    // 서버 → 클라: 상태/파라미터 브로드캐스트 구독
    var out = phases.stream()
      .map(ev -> {
        try { return om.writeValueAsString(ev); }
        catch (Exception e) { return "{\"type\":\"error\"}"; }
      })
      .map(session::textMessage);

    // 클라 → 서버: 이벤트 수신
    var in = session.receive()
      .map(WebSocketMessage::getPayloadAsText)
      .flatMap(text -> {
        try {
          var ev = om.readValue(text, InEvent.class);
          phases.onEvent(ev);
        } catch (Exception ignore) { }
        return Mono.empty();
      });

    return session.send(out).and(in);
  }
}
