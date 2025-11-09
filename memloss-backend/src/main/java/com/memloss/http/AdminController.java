// http/AdminController.java
package com.memloss.http;

import com.memloss.domain.OutEvent;
import com.memloss.domain.Phase;
import com.memloss.service.PhaseService;
import com.memloss.ws.EventsWebSocketHandler;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
  private final PhaseService phases;
  private final EventsWebSocketHandler ws;

  public AdminController(PhaseService phases, EventsWebSocketHandler ws) {
    this.phases = phases;
    this.ws = ws;
  }

  @GetMapping(value = "/sessions", produces = MediaType.APPLICATION_JSON_VALUE)
  public List<String> sessions() {
    return ws.sessionsSnapshot();
  }

  @GetMapping(value = "/events", produces = MediaType.APPLICATION_JSON_VALUE)
  public List<OutEvent> events() {
    return phases.recentEvents();
  }

  @GetMapping(value = "/phase", produces = MediaType.APPLICATION_JSON_VALUE)
  public Map<String, Object> getPhase() {
    return Map.of("phase", phases.getPhase().name());
  }

  @PostMapping(value = "/phase", produces = MediaType.APPLICATION_JSON_VALUE)
  public Map<String, Object> setPhase(@RequestParam("phase") String phaseName) {
    Phase p = Phase.valueOf(phaseName);
    phases.setPhase(p);
    return Map.of("ok", true, "phase", p.name());
  }

  // in AdminController
  @GetMapping(value = "/ui")
  public ResponseEntity<Void> ui() {
    return ResponseEntity.status(HttpStatus.FOUND)
      .header("Location", "/admin/index.html")
      .build();
  }

}