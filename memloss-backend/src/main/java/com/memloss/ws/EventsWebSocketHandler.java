package com.memloss.ws;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.memloss.domain.Events;
import com.memloss.domain.Phase;
import com.memloss.service.PhaseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.Collections;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class EventsWebSocketHandler extends TextWebSocketHandler {
    private static final Logger log = LoggerFactory.getLogger(EventsWebSocketHandler.class);

    private final ObjectMapper om = new ObjectMapper();
    private final Set<WebSocketSession> sessions = Collections.newSetFromMap(new ConcurrentHashMap<>());
    private final PhaseService phaseService;

    public EventsWebSocketHandler(PhaseService phaseService) {
        this.phaseService = phaseService;
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        sessions.add(session);
        log.info("[WS] connected: {}", session.getId());
        // Send current phase to new client
        send(session, new Events.PhaseEvent(phaseService.get()));
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String payload = message.getPayload();
        log.info("[WS←] {}", payload);
        JsonNode node = om.readTree(payload);
        String type = node.path("type").asText("");
        switch (type) {
            case "rotation" -> {
                // for demo, just log
                log.debug("rotation: {}", payload);
            }
            case "breath" -> {
                log.debug("breath: {}", payload);
            }
            case "phase" -> {
                Phase p = Phase.valueOf(node.path("phase").asText("INIT"));
                phaseService.set(p);
                broadcast(new Events.PhaseEvent(p));
            }
            default -> log.warn("unknown message type: {}", type);
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        sessions.remove(session);
        log.info("[WS] closed: {} ({})", session.getId(), status);
    }

    private void send(WebSocketSession s, Object ev) throws IOException {
        s.sendMessage(new TextMessage(om.writeValueAsString(ev)));
    }

    private void broadcast(Object ev) throws IOException {
        String json = om.writeValueAsString(ev);
        for (WebSocketSession s : sessions) {
            if (s.isOpen()) s.sendMessage(new TextMessage(json));
        }
    }
}
