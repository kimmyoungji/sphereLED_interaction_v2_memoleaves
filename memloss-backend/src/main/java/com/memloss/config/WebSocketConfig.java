// config/WebSocketConfig.java
package com.memloss.config;

import com.memloss.ws.EventsWebSocketHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.HandlerMapping;
import org.springframework.web.reactive.handler.SimpleUrlHandlerMapping;

import java.util.Map;

@Configuration
public class WebSocketConfig {
  @Bean
  public HandlerMapping wsMapping(EventsWebSocketHandler h) {
    var m = new SimpleUrlHandlerMapping();
    m.setOrder(10);
    m.setUrlMap(Map.of("/ws", h));
    return m;
  }
}
