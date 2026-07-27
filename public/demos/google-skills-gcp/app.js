const scenarios = {
  install: {
    title: "Instalar y revisar el catálogo",
    prompt: "Instala solo las skills que necesito para diseñar una API en Cloud Run, almacenar archivos y analizar eventos en BigQuery. Antes de cambiar algo, explícame qué instalarás.",
    skills: [
      ["google-cloud-solution-architecture", true],
      ["cloud-run-basics", true],
      ["bigquery-basics", true],
      ["google-cloud-storage-basics", true],
    ],
    nodes: [
      ["⌘", "npx skills", "instalador", "#4285f4"],
      ["S", "SKILL.md", "instrucciones", "#34a853"],
      ["A", "Agente", "contexto activo", "#fbbc04"],
      ["✓", "Plan", "sin mutaciones", "#6ee7f9"],
    ],
    steps: ["Leer catálogo del repositorio", "Seleccionar skills mínimas", "Explicar permisos y límites", "Proponer plan verificable"],
    evidence: [
      ["Selección explícita", "No es necesario instalar las 90 skills."],
      ["Instrucciones legibles", "Cada skill es un directorio con SKILL.md y referencias opcionales."],
      ["Sin magia oculta", "La skill guía al agente; no reemplaza APIs, SDK, IAM ni facturación."],
    ],
    logs: ["$ npx skills add google/skills", "catálogo detectado: 90 skills", "selección: 4 skills cloud", "estado: esperando autorización"],
  },
  api: {
    title: "Desplegar un microservicio en Cloud Run",
    prompt: "Revisa mi API de pedidos, crea un plan para desplegarla como servicio privado en Cloud Run y valida que escuche en 0.0.0.0:$PORT. Usa una service account con mínimo privilegio.",
    skills: [
      ["cloud-run-basics", true],
      ["google-cloud-recipe-auth", true],
      ["gcloud", true],
      ["cloud-logging-query-generation", true],
    ],
    nodes: [
      ["W", "Frontend", "HTTPS", "#4285f4"],
      ["R", "Cloud Run", "orders-api", "#ea4335"],
      ["I", "IAM", "service identity", "#fbbc04"],
      ["L", "Logging", "evidencia", "#34a853"],
    ],
    steps: ["Inspeccionar runtime y puerto", "Validar comando exacto", "Desplegar revisión privada", "Probar endpoint y logs"],
    evidence: [
      ["Contrato de runtime", "El contenedor escucha en 0.0.0.0 y usa el puerto inyectado."],
      ["Identidad separada", "Producción usa una service account adjunta, sin claves JSON."],
      ["Ámbito explícito", "Proyecto y región aparecen en cada operación propuesta."],
    ],
    logs: ["skill: cloud-run-basics", "check: PORT y health endpoint", "check: IAM roles/run.invoker", "resultado: plan listo para revisión"],
  },
  events: {
    title: "Procesar eventos con Pub/Sub y BigQuery",
    prompt: "Diseña el flujo de eventos de pedidos: recibe mensajes con Pub/Sub, procesa reglas en Cloud Run y conserva el evento analítico en BigQuery. Agrega dead-letter y explica la idempotencia.",
    skills: [
      ["google-cloud-solution-architecture", true],
      ["cloud-run-basics", true],
      ["bigquery-basics", true],
      ["Pub/Sub + Scheduler docs", false],
    ],
    nodes: [
      ["P", "Pub/Sub", "order.created", "#fbbc04"],
      ["R", "Cloud Run", "event-worker", "#ea4335"],
      ["B", "BigQuery", "order_events", "#4285f4"],
      ["D", "DLQ", "fallos", "#34a853"],
    ],
    steps: ["Definir contrato del evento", "Configurar entrega autenticada", "Aplicar idempotencia", "Verificar tabla y dead-letter"],
    evidence: [
      ["Vacío identificado", "El repositorio no trae hoy una skill dedicada a Pub/Sub o Scheduler."],
      ["Ruta oficial", "La arquitectura skill enlaza guías y gcloud valida cada comando hoja."],
      ["Semántica de entrega", "BigQuery subscriptions son at-least-once: diseña deduplicación."],
    ],
    logs: ["skill: architecture + bigquery", "fallback: docs Pub/Sub", "guardrail: event_id único", "resultado: flujo y pruebas definidos"],
  },
  mobile: {
    title: "Conectar Flutter y frontend a GCP",
    prompt: "Conecta mi aplicación Flutter y el frontend web a una API privada en Cloud Run. Para archivos grandes usa URLs firmadas de Cloud Storage y evita incluir credenciales de servicio dentro de la app.",
    skills: [
      ["cloud-run-basics", true],
      ["google-cloud-storage-basics", true],
      ["firebase-basics", true],
      ["flutter/skills (otro repo)", false],
    ],
    nodes: [
      ["F", "Flutter", "cliente", "#6ee7f9"],
      ["A", "Cloud Run", "BFF / API", "#ea4335"],
      ["S", "Storage", "signed URL", "#4285f4"],
      ["E", "Pub/Sub", "object event", "#fbbc04"],
    ],
    steps: ["Separar identidad de usuario", "Crear contrato API", "Emitir URL firmada corta", "Procesar carga como evento"],
    evidence: [
      ["Cliente no privilegiado", "Flutter jamás recibe una clave de service account."],
      ["Carga directa", "Los binarios no atraviesan innecesariamente el microservicio."],
      ["Skill complementaria", "Flutter y Dart mantienen repositorios de skills separados."],
    ],
    logs: ["skill: storage + cloud-run", "check: URL con expiración", "check: Firebase/IAP según audiencia", "resultado: contrato mobile seguro"],
  },
};

const ui = {
  title: document.querySelector("#stage-title"),
  prompt: document.querySelector("#prompt-text"),
  skills: document.querySelector("#skill-strip"),
  architecture: document.querySelector("#architecture"),
  steps: document.querySelector("#steps"),
  evidence: document.querySelector("#evidence-list"),
  terminal: document.querySelector("#terminal-output"),
  run: document.querySelector("#run-button"),
  copy: document.querySelector("#copy-button"),
  reset: document.querySelector("#reset-button"),
  phoneBody: document.querySelector("#phone-body"),
  cloudPipeline: document.querySelector("#cloud-pipeline"),
  flutterSkills: document.querySelector("#flutter-skills"),
  flutterPrompt: document.querySelector("#flutter-prompt"),
  flowStatus: document.querySelector("#flow-status"),
  simulateFlutter: document.querySelector("#simulate-flutter"),
};

let currentKey = "install";
let timers = [];
let currentFlutterFlow = "order";

const flutterFlows = {
  order: {
    skills: ["cloud-run-basics", "google-cloud-recipe-auth", "bigquery-basics"],
    prompt: "Diseña POST /orders para Flutter. Autentica al usuario, publica order.created y evita credenciales de servicio en el cliente.",
    services: [
      ["F", "Flutter", "POST /orders + ID token", "#6ee7f9"],
      ["R", "Cloud Run", "valida usuario y pedido", "#ea4335"],
      ["P", "Pub/Sub", "publica order.created", "#fbbc04"],
      ["B", "BigQuery", "conserva evento analítico", "#4285f4"],
    ],
    screen: `
      <div class="mobile-hero"><small>Ventas de hoy</small><strong>$248.900</strong><span>↗ 12,4% esta semana</span></div>
      <div class="mobile-section-title">Pedidos recientes <span>Ver todos</span></div>
      <article class="order-card"><div class="order-row"><span class="order-icon">P</span><div><strong>Pedido #1048</strong><small>Hace 2 min · 3 productos</small></div><span class="order-price">$42.990</span></div><div class="order-state"><span>Cloud Run → Pub/Sub</span><b>Procesado</b></div></article>
      <article class="order-card"><div class="order-row"><span class="order-icon">P</span><div><strong>Pedido #1047</strong><small>Hace 18 min · 1 producto</small></div><span class="order-price">$18.500</span></div><div class="order-state"><span>Evento order.created</span><b>Confirmado</b></div></article>
      <article class="order-card"><div class="order-row"><span class="order-icon">P</span><div><strong>Pedido #1046</strong><small>Hace 41 min · 5 productos</small></div><span class="order-price">$76.400</span></div><div class="order-state"><span>Analítica BigQuery</span><b>Disponible</b></div></article>`,
  },
  upload: {
    skills: ["google-cloud-storage-basics", "cloud-run-basics", "flutter/skills"],
    prompt: "Genera una URL firmada de 5 minutos para que Flutter suba un PDF directo a Storage. Valida MIME, tamaño, propietario y evento final.",
    services: [
      ["F", "Flutter", "solicita upload URL", "#6ee7f9"],
      ["R", "Cloud Run", "firma URL por 5 minutos", "#ea4335"],
      ["S", "Storage", "carga directa del PDF", "#4285f4"],
      ["P", "Pub/Sub", "evento object.finalized", "#fbbc04"],
    ],
    screen: `
      <div class="mobile-section-title">Nuevo comprobante <span>Ayuda</span></div>
      <article class="upload-card"><span class="upload-icon">⇧</span><strong>comprobante-1048.pdf</strong><small>PDF · 1,8 MB · destino privado<br/>La app no recibe credenciales GCP</small><div class="upload-progress" id="upload-progress"><i></i></div></article>
      <article class="order-card"><div class="order-row"><span class="order-icon">✓</span><div><strong>Validaciones</strong><small>application/pdf · máximo 5 MB</small></div></div><div class="order-state"><span>URL firmada</span><b>5 minutos</b></div></article>
      <article class="order-card"><div class="order-row"><span class="order-icon">S</span><div><strong>Bucket privado</strong><small>orders-docs / customer scoped</small></div></div><div class="order-state"><span>Procesamiento</span><b>Por evento</b></div></article>`,
  },
};

function clearTimers() {
  timers.forEach(window.clearTimeout);
  timers = [];
}

function render(key) {
  clearTimers();
  currentKey = key;
  const scenario = scenarios[key];
  document.querySelectorAll(".scenario").forEach((button) => {
    button.classList.toggle("active", button.dataset.scenario === key);
  });
  ui.title.textContent = scenario.title;
  ui.prompt.textContent = scenario.prompt;
  ui.skills.innerHTML = scenario.skills
    .map(([name, available]) => `<span class="skill-chip ${available ? "" : "fallback"}">${available ? "✓" : "+"} ${name}</span>`)
    .join("");
  ui.architecture.innerHTML = scenario.nodes
    .map(([icon, name, detail, color], index) => `${index ? '<span class="arch-arrow">→</span>' : ""}<div class="arch-node" style="--node-color:${color}"><i>${icon}</i><strong>${name}</strong><small>${detail}</small></div>`)
    .join("");
  ui.steps.innerHTML = scenario.steps.map((step, index) => `<li class="step" data-index="0${index + 1}">${step}</li>`).join("");
  ui.evidence.innerHTML = scenario.evidence.map(([title, detail]) => `<article class="evidence"><strong>${title}</strong><p>${detail}</p></article>`).join("");
  ui.terminal.textContent = `$ preparado\nscenario: ${key}\nmutaciones: deshabilitadas`;
  ui.run.disabled = false;
  ui.run.innerHTML = "<i></i> Ejecutar escenario";
}

function runScenario() {
  clearTimers();
  const scenario = scenarios[currentKey];
  const steps = [...document.querySelectorAll(".step")];
  const nodes = [...document.querySelectorAll(".arch-node")];
  steps.forEach((step) => step.classList.remove("done", "running"));
  nodes.forEach((node) => node.classList.remove("active"));
  ui.terminal.textContent = "$ iniciando simulación";
  ui.run.disabled = true;
  ui.run.textContent = "Ejecutando…";

  steps.forEach((step, index) => {
    timers.push(window.setTimeout(() => {
      steps.forEach((item, itemIndex) => item.classList.toggle("running", itemIndex === index));
      step.classList.add("done");
      nodes.forEach((node, nodeIndex) => node.classList.toggle("active", nodeIndex === index));
      ui.terminal.textContent += `\n${scenario.logs[index]}`;
      if (index === steps.length - 1) {
        timers.push(window.setTimeout(() => {
          step.classList.remove("running");
          nodes.forEach((node) => node.classList.remove("active"));
          ui.terminal.textContent += "\n$ evidencia lista ✓";
          ui.run.disabled = false;
          ui.run.innerHTML = "<i></i> Ejecutar de nuevo";
        }, 650));
      }
    }, 350 + index * 820));
  });
}

function renderFlutterFlow(key) {
  clearTimers();
  currentFlutterFlow = key;
  const flow = flutterFlows[key];
  document.querySelectorAll(".flutter-action").forEach((button) => {
    button.classList.toggle("active", button.dataset.flutterFlow === key);
  });
  ui.phoneBody.innerHTML = flow.screen;
  ui.cloudPipeline.innerHTML = flow.services.map(([icon, name, detail, color]) => `
    <article class="cloud-service" style="--service-color:${color}">
      <i>${icon}</i><div><strong>${name}</strong><small>${detail}</small></div><em>pendiente</em>
    </article>`).join("");
  ui.flutterSkills.innerHTML = flow.skills.map((skill) => `<b>${skill}</b>`).join("");
  ui.flutterPrompt.textContent = flow.prompt;
  ui.flowStatus.textContent = "Listo para simular";
  ui.simulateFlutter.disabled = false;
  ui.simulateFlutter.textContent = "▶ Simular flujo completo";
}

function runFlutterFlow() {
  clearTimers();
  const services = [...document.querySelectorAll(".cloud-service")];
  const progress = document.querySelector("#upload-progress");
  services.forEach((service) => service.classList.remove("running", "done"));
  ui.flowStatus.textContent = "Procesando…";
  ui.simulateFlutter.disabled = true;
  ui.simulateFlutter.textContent = "Ejecutando flujo…";
  if (progress) progress.classList.add("running");

  services.forEach((service, index) => {
    timers.push(window.setTimeout(() => {
      services.forEach((item, itemIndex) => item.classList.toggle("running", itemIndex === index));
      service.classList.add("done");
      service.querySelector("em").textContent = "verificado ✓";
      if (index === services.length - 1) {
        timers.push(window.setTimeout(() => {
          service.classList.remove("running");
          ui.flowStatus.textContent = currentFlutterFlow === "order" ? "Pedido #1049 confirmado" : "Archivo procesado";
          ui.simulateFlutter.disabled = false;
          ui.simulateFlutter.textContent = "↻ Repetir simulación";
        }, 500));
      }
    }, 250 + index * 720));
  });
}

document.querySelectorAll(".scenario").forEach((button) => button.addEventListener("click", () => render(button.dataset.scenario)));
ui.run.addEventListener("click", runScenario);
ui.reset.addEventListener("click", () => render(currentKey));
ui.copy.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(scenarios[currentKey].prompt);
    ui.copy.textContent = "Copiado ✓";
  } catch {
    ui.copy.textContent = "Selecciona el texto";
  }
  timers.push(window.setTimeout(() => { ui.copy.textContent = "Copiar"; }, 1500));
});
document.querySelectorAll(".flutter-action").forEach((button) => button.addEventListener("click", () => renderFlutterFlow(button.dataset.flutterFlow)));
ui.simulateFlutter.addEventListener("click", runFlutterFlow);

render(currentKey);
renderFlutterFlow(currentFlutterFlow);
