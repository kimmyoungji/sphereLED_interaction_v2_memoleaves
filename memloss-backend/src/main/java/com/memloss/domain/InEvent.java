package com.memloss.domain;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public record InEvent(String type, String sessionId, Object payload) {}
