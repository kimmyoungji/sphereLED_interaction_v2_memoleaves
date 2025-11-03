// http/SessionController.java
package com.memloss.http;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class SessionController {
  @PostMapping(value="/sessions", produces=MediaType.APPLICATION_JSON_VALUE)
  public Map<String, Object> create() {
    return Map.of("sessionId", UUID.randomUUID().toString());
  }
}
