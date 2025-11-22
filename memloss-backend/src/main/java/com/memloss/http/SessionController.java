// http/SessionController.java
package com.memloss.http;

import com.memloss.service.SessionCapService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.UUID;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api")
public class SessionController {
  private final SessionCapService cap;

  private final Logger log = LoggerFactory.getLogger(this.getClass());

  public SessionController(SessionCapService cap) { this.cap = cap; }

  @PostMapping(value="/sessions", produces=MediaType.APPLICATION_JSON_VALUE)
  public Map<String, Object> create() {
    return Map.of("sessionId", UUID.randomUUID().toString());
  }

  @PostMapping(value="/sessions/register", consumes=MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<Map<String, Object>> register(@RequestBody(required=false) Map<String, Object> body) {
    
    log.info("Registering session: {}", body);
    
    String id = body != null && body.get("sessionId") != null ? body.get("sessionId").toString() : UUID.randomUUID().toString();
    boolean ok = cap.tryRegister(id);
    if (!ok) {
      HttpHeaders h = new HttpHeaders();
      h.add("X-Reason", "CAP_REACHED");
      return new ResponseEntity<>(Map.of("ok", false, "reason", "CAP_REACHED"), h, HttpStatus.SERVICE_UNAVAILABLE);
    }
    return ResponseEntity.ok(Map.of("ok", true, "sessionId", id, "active", cap.activeCount(), "max", cap.maxSessions()));
  }

  @PostMapping(value="/sessions/heartbeat", consumes=MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<Void> heartbeat(@RequestBody Map<String, Object> body) {
    String id = body != null && body.get("sessionId") != null ? body.get("sessionId").toString() : null;
    cap.heartbeat(id);
    return ResponseEntity.noContent().build();
  }

  @PostMapping(value="/sessions/unregister", consumes=MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<Void> unregister(@RequestBody Map<String, Object> body) {
    String id = body != null && body.get("sessionId") != null ? body.get("sessionId").toString() : null;
    cap.unregister(id);
    return ResponseEntity.noContent().build();
  }
}
