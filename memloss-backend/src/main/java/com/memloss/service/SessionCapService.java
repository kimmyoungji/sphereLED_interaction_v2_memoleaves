// service/SessionCapService.java
package com.memloss.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class SessionCapService {
  private static final Logger log = LoggerFactory.getLogger(SessionCapService.class);

  private final Map<String, Long> active = new ConcurrentHashMap<>();

  @Value("${capacity.maxSessions:4}")
  private int maxSessions;

  @Value("${capacity.staleGraceSeconds:90}")
  private long staleGraceSeconds;

  public boolean tryRegister(String sessionId) {
    cleanupStale();
    if (active.containsKey(sessionId)) {
      // already registered -> refresh
      active.put(sessionId, now());
      return true;
    }
    if (active.size() >= maxSessions) {
      return false;
    }
    active.put(sessionId, now());
    log.info("[CAP] register {} (active={}/{})", sessionId, active.size(), maxSessions);
    return true;
  }

  public void heartbeat(String sessionId) {
    if (sessionId == null) return;
    active.computeIfPresent(sessionId, (k, v) -> now());
  }

  public void unregister(String sessionId) {
    if (sessionId == null) return;
    if (active.remove(sessionId) != null) {
      log.info("[CAP] unregister {} (active={}/{})", sessionId, active.size(), maxSessions);
    }
  }

  public int activeCount() { return active.size(); }

  public int maxSessions() { return maxSessions; }

  @Scheduled(fixedDelayString = "${capacity.cleanupIntervalMs:30000}")
  public void cleanupStale() {
    long cutoff = now() - staleGraceSeconds * 1000L;
    int before = active.size();
    active.entrySet().removeIf(e -> e.getValue() < cutoff);
    int after = active.size();
    if (after != before) {
      log.info("[CAP] cleanup stale removed={} active={}/{}", (before - after), after, maxSessions);
    }
  }

  private long now() { return Instant.now().toEpochMilli(); }
}
