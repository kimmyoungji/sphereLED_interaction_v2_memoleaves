// http/AdminController.java
package com.memloss.http;

import com.memloss.domain.OutEvent;
import com.memloss.domain.Phase;
import com.memloss.service.PhaseService;
import com.memloss.ws.EventsWebSocketHandler;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
  private final PhaseService phases;
  private final EventsWebSocketHandler ws;

  public AdminController(PhaseService phases, EventsWebSocketHandler ws) {
    this.phases = phases;
    this.ws = ws;
  }

  @GetMapping(value = "/sessions", produces = MediaType.APPLICATION_JSON_VALUE)
  public List<String> sessions() {
    return ws.sessionsSnapshot();
  }

  @GetMapping(value = "/events", produces = MediaType.APPLICATION_JSON_VALUE)
  public List<OutEvent> events() {
    return phases.recentEvents();
  }

  @GetMapping(value = "/phase", produces = MediaType.APPLICATION_JSON_VALUE)
  public Map<String, Object> getPhase() {
    return Map.of("phase", phases.getPhase().name());
  }

  @PostMapping(value = "/phase", produces = MediaType.APPLICATION_JSON_VALUE)
  public Map<String, Object> setPhase(@RequestParam("phase") String phaseName) {
    Phase p = Phase.valueOf(phaseName);
    phases.setPhase(p);
    return Map.of("ok", true, "phase", p.name());
  }

  @GetMapping(value = "/ui", produces = MediaType.TEXT_HTML_VALUE)
  public String ui() {
    return "<!doctype html>"+
      "<html><head><meta charset=\\\"utf-8\\\"/><title>Admin</title>"+
      "<style>body{font-family:system-ui,Arial,sans-serif;padding:16px;line-height:1.4} pre{white-space:pre-wrap;word-break:break-word;background:#f6f8fa;padding:8px;border-radius:6px} .row{margin:12px 0} button,select{padding:6px 10px}</style>"+
      "</head><body>"+
      "<h1>Server Admin</h1>"+
      "<div class=\\\"row\\\"><button id=\\\"refresh\\\">Refresh</button></div>"+
      "<div class=\\\"row\\\"><b>Current Phase:</b> <span id=\\\"curPhase\\\"></span></div>"+
      "<div class=\\\"row\\\">"+
      "<label>Change Phase: </label>"+
      "<select id=\\\"phaseSel\\\">"+
      "<option>INIT</option><option>HELP</option><option>GARDEN_AND_DUST</option><option>TIMELINE</option><option>DRAGONFLY</option><option>FINALE</option>"+
      "</select> <button id=\\\"setPhase\\\">Set</button>"+
      "</div>"+
      "<h3>Sessions</h3><pre id=\\\"sessions\\\"></pre>"+
      "<h3>Recent Events</h3><pre id=\\\"events\\\"></pre>"+
      "<script>\n"+
      "async function fetchJSON(u){const r=await fetch(u);return await r.json()}\n"+
      "async function load(){\n"+
      "  const s=await fetchJSON('/api/admin/sessions');\n"+
      "  document.getElementById('sessions').textContent=JSON.stringify(s,null,2);\n"+
      "  const e=await fetchJSON('/api/admin/events');\n"+
      "  document.getElementById('events').textContent=JSON.stringify(e,null,2);\n"+
      "  const p=await fetchJSON('/api/admin/phase');\n"+
      "  document.getElementById('curPhase').textContent=p.phase;\n"+
      "}\n"+
      "document.getElementById('refresh').onclick=load;\n"+
      "document.getElementById('setPhase').onclick=async ()=>{\n"+
      "  const val=document.getElementById('phaseSel').value;\n"+
      "  const r=await fetch('/api/admin/phase?phase='+encodeURIComponent(val),{method:'POST'});\n"+
      "  if(r.ok){ await load(); } else { alert('set phase failed'); }\n"+
      "};\n"+
      "load();\n"+
      "</script>"+
      "</body></html>";
  }
}
