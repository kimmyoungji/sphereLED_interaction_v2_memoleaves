package com.memloss.domain;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public record OutEvent(String type, Object payload) {

  public static OutEvent phase(Phase p) {
    return new OutEvent("phase", new PhasePayload(p.name()));
  }

  public static OutEvent ledParam(String key, Object value) {
    return new OutEvent("led.param", new Kv(key, value));
  }

  public static OutEvent timeline(double t, String label) {
    return new OutEvent("timeline.update", new TimelinePayload(t, label));
  }

  public record PhasePayload(String phase) {}
  public record Kv(String key, Object value) {}
  public record TimelinePayload(double t, String label) {}
}
