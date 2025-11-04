package com.memloss.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@JsonInclude(JsonInclude.Include.NON_NULL)
public record OutEvent(String type, Object payload) {
  private static final Logger logger = LoggerFactory.getLogger(OutEvent.class);

  public static OutEvent phase(Phase p) {
    logger.info("CURRENT PHASE: {}", p.name());
    return new OutEvent("phase", new PhasePayload(p.name()));
  }

  public static OutEvent ledParam(String key, Object value) {
    logger.info("LED {} {}", key, value);
    return new OutEvent("led.param", new Kv(key, value));
  }

  public static OutEvent timeline(double t, String label) {
    logger.info("TIMELINE {} {}", t, label);
    return new OutEvent("timeline.update", new TimelinePayload(t, label));
  }

  public static OutEvent dragonflyCount(String sessionId, int count) {
    logger.info("DRAGONFLY COUNT {} -> {}", sessionId, count);
    return new OutEvent("dragonfly.count", new DragonflyCountPayload(sessionId, count));
  }

  // these are not functions. these are class with compact syntax: record
  // record is not type, it is a class
  public record PhasePayload(String phase) {}
  public record Kv(String key, Object value) {}
  public record TimelinePayload(double t, String label) {}
  public record DragonflyCountPayload(String sessionId, int count) {}
}

