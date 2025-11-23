package com.memloss.config;

import org.springframework.http.HttpHeaders;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

@Component
public class WebSocketRootUpgradeFilter implements WebFilter {
  @Override
  public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
    ServerHttpRequest req = exchange.getRequest();
    String path = req.getPath().pathWithinApplication().value();
    String upgrade = req.getHeaders().getFirst(HttpHeaders.UPGRADE);
    boolean isRoot = "/".equals(path);
    boolean isWsUpgrade = upgrade != null && "websocket".equalsIgnoreCase(upgrade);
    if (isRoot && isWsUpgrade) {
      ServerHttpRequest mutated = req.mutate().path("/ws").build();
      ServerWebExchange mutatedEx = exchange.mutate().request(mutated).build();
      return chain.filter(mutatedEx);
    }
    return chain.filter(exchange);
  }
}
