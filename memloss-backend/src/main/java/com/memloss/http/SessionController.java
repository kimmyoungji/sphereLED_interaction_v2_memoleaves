package com.memloss.http;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/session")
public class SessionController {

    @PostMapping("/start")
    public ResponseEntity<String> start() {
        // Placeholder for session start logic
        return ResponseEntity.ok("started");
    }
}
