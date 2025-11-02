package com.memloss.http;

import com.memloss.domain.Phase;
import com.memloss.service.PhaseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/state")
public class StateController {

    private final PhaseService phaseService;

    public StateController(PhaseService phaseService) {
        this.phaseService = phaseService;
    }

    @GetMapping("/phase")
    public ResponseEntity<Phase> getPhase() {
        return ResponseEntity.ok(phaseService.get());
    }

    @PostMapping("/phase/{phase}")
    public ResponseEntity<Phase> setPhase(@PathVariable("phase") Phase phase) {
        return ResponseEntity.ok(phaseService.set(phase));
    }
}
