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

  // Structured payloads (recommended)
  public static OutEvent sphereRotation(double yaw, double pitch, double roll) {
    logger.info("sphereRotation yaw={} pitch={} roll={}", yaw, pitch, roll);
    return new OutEvent("sphereRotation", new RotationPayload(yaw, pitch, roll));
  }

  public static OutEvent sphereOpacity(double opacity) {
    logger.info("sphereOpacity opacity={}", opacity);
    return new OutEvent("sphereOpacity", new OpacityPayload(opacity));
  }

  // json sending example: OutEvent sphereRotation("rotation", 0.5);
  // json receiving example: 
  // { "type": "sphereRotation", "payload": { "key": "rotation", "value": 0.5 } }
  public static OutEvent sphereRotation(String key, Object value) {
    logger.info("sphereRotation {} {}", key, value);
    return new OutEvent("sphereRotation", new Kv(key, value));
  }

  // json sending example: OutEvent sphereOpacity("opacity", 0.5);
  // json receiving example: 
  // { "type": "sphereOpacity", "payload": { "key": "opacity", "value": 0.5 } }
  public static OutEvent sphereOpacity(String key, Object value) {
    logger.info("sphereOpacity {} {}", key, value);
    return new OutEvent("sphereOpacity", new Kv(key, value));
  }

  /* public static OutEvent timeline(double t, String label) {
    logger.info("Timeline {} {}", t, label);
    return new OutEvent("timeline.update", new TimelinePayload(t, label));
  } */

  /* public static OutEvent dragonflyCount(String sessionId, int count) {
    logger.info("DRAGONFLY COUNT {} -> {}", sessionId, count);
    return new OutEvent("dragonfly.count", new DragonflyCountPayload(sessionId, count));
  } */

  // these are not functions. these are class with compact syntax: record
  // record is not type, it is a class
  public record PhasePayload(String phase) {}
  public record RotationPayload(double yaw, double pitch, double roll) {}
  public record OpacityPayload(double opacity) {}
  public record Kv(String key, Object value) {}
  // public record TimelinePayload(double t, String label) {}
  // public record DragonflyCountPayload(String sessionId, int count) {}
}

