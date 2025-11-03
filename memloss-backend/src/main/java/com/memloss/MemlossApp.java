// MemlossApp.java
package com.memloss;

import com.memloss.service.PhaseService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.event.EventListener;
import org.springframework.boot.context.event.ApplicationReadyEvent;

@SpringBootApplication
public class MemlossApp {
  public static void main(String[] args) { SpringApplication.run(MemlossApp.class, args); }

  private final PhaseService phases;
  public MemlossApp(PhaseService phases) { this.phases = phases; }

  @EventListener(ApplicationReadyEvent.class)
  public void ready() { phases.init(); }
}
