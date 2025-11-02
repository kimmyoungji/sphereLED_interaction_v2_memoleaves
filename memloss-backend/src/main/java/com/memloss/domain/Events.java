// domain/Events.java
package com.memloss.domain;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public record InEvent(String type, String sessionId, Object payload) {}

@JsonInclude(JsonInclude.Include.NON_NULL)
public record OutEvent(String type, Object payload) {

  /* Phase: 전역 상태 */
  public static OutEvent phase(Phase p) {
    return new OutEvent("phase", new PhasePayload(p.name()));
  }
  /* led.param: LED 영상 제어 파라미터 */
  public static OutEvent ledParam(String key, Object value) {
    return new OutEvent("led.param", new Kv(key, value));
  }
  
  /* timeline.update: 타임라인 업데이트 */
  public static OutEvent timeline(double t, String label) {
    return new OutEvent("timeline.update", new TimelinePayload(t, label));
  }

  public record PhasePayload(String phase) {}
  public record Kv(String key, Object value) {}
  public record TimelinePayload(double t, String label) {}
}
