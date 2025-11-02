package com.memloss.service;

import com.memloss.domain.Phase;
import org.springframework.stereotype.Service;

import java.util.concurrent.atomic.AtomicReference;

@Service
public class PhaseService {
    private final AtomicReference<Phase> current = new AtomicReference<>(Phase.INIT);

    public Phase get() { return current.get(); }
    public Phase set(Phase p) { current.set(p); return p; }
}
