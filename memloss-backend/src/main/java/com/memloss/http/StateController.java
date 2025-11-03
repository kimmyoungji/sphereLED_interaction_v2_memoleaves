// http/StateController.java
package com.memloss.http;

import com.memloss.domain.Phase;
import com.memloss.service.PhaseService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class StateController {
  private final PhaseService phases;
  public StateController(PhaseService phases) { this.phases = phases; }

  @GetMapping(value="/state", produces=MediaType.APPLICATION_JSON_VALUE)
  public Map<String,Object> state() {
    Phase p = phases.getPhase();
    return Map.of("phase", p.name());
  }
}
