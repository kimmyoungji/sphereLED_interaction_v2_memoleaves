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

  public static OutEvent sphereRotation(double yaw, double pitch, double roll) {
    logger.info("sphereRotation yaw={} pitch={} roll={}", yaw, pitch, roll);
    return new OutEvent("sphereRotation", new RotationPayload(yaw, pitch, roll));
  }

  public static OutEvent sphereOpacity(double opacity) {
    logger.info("sphereOpacity opacity={}", opacity);
    return new OutEvent("sphereOpacity", new OpacityPayload(opacity));
  }

  public static OutEvent timeline(double t, String label) {
    logger.info("Timeline t={} label={}", t, label);
    return new OutEvent("timeline.update", new TimelinePayload(t, label));
  }

  /* public static OutEvent dragonflyCount(String sessionId, int count) {
    logger.info("DRAGONFLY COUNT {} -> {}", sessionId, count);
    return new OutEvent("dragonfly.count", new DragonflyCountPayload(sessionId, count));
  } */

  // these are not functions. these are class with compact syntax: record
  // record is not type, it is a class
  public record PhasePayload(String phase) {}
  public record RotationPayload(double yaw, double pitch, double roll) {}
  public record OpacityPayload(double opacity) {}
  public record TimelinePayload(double t, String label) {}
  public record Kv(String key, Object value) {}
  // public record TimelinePayload(double t, String label) {}
  // public record DragonflyCountPayload(String sessionId, int count) {}
}
