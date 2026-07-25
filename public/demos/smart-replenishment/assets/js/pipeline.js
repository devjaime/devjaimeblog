(function () {
  'use strict';

  var STEP_SECTION = {
    0: 'pipeline-step0',
    1: 'pipeline-step1',
    2: 'pipeline-step3',
    3: 'pipeline-step4',
    4: 'pipeline-step5',
  };

  var completedSteps = {};
  var processing = false;

  var toast = document.getElementById('toast');
  var toastMsg = document.getElementById('toastMessage');

  function showToast(msg) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg;
    toast.classList.add('show');
    window.clearTimeout(window._toastTimer);
    window._toastTimer = window.setTimeout(function () { toast.classList.remove('show'); }, 4000);
  }

  function sleep(ms) {
    return new Promise(function (r) { window.setTimeout(r, ms); });
  }

  function getStepEl(stepId) {
    return document.querySelector('.pipeline-step[data-step="' + stepId + '"]');
  }

  function scrollToSection(stepId) {
    var sid = STEP_SECTION[stepId];
    if (!sid) return;
    var el = document.getElementById(sid);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function activateStep(stepId) {
    document.querySelectorAll('.pipeline-step[data-step]').forEach(function (el) {
      el.classList.toggle('active', parseInt(el.dataset.step) === stepId);
    });
  }

  function markStepDone(stepId) {
    var el = getStepEl(stepId);
    if (!el) return;
    el.classList.add('step-done');
    el.dataset.ready = 'false';
  }

  function unlockStep(stepId) {
    var el = getStepEl(stepId);
    if (!el) return;
    el.dataset.ready = 'true';
  }

  function setButtonState(btnId, state, label, icon) {
    var btn = document.getElementById(btnId);
    if (!btn) return;
    btn.disabled = (state === 'processing' || state === 'done');
    if (state === 'processing') {
      btn.innerHTML = '<span class="material-symbols-outlined" style="animation:spin 1s linear infinite;">sync</span> ' + (label || 'Procesando\u2026');
    } else if (state === 'done') {
      btn.innerHTML = '<span class="material-symbols-outlined">check_circle</span> ' + (label || 'Completado');
    } else if (state === 'ready') {
      btn.innerHTML = '<span class="material-symbols-outlined">' + (icon || 'play_arrow') + '</span> ' + (label || 'Ejecutar');
      btn.disabled = false;
    }
  }

  function setBadge(stepId, status) {
    var section = document.getElementById(STEP_SECTION[stepId]);
    if (!section) return;
    var badge = section.querySelector('.pipeline-section-step');
    if (!badge) return;
    if (!badge.hasAttribute('data-original')) {
      badge.setAttribute('data-original', badge.textContent);
    }
    if (status === 'processing') {
      badge.textContent = '\u23F3 Procesando\u2026';
      badge.style.background = 'var(--amber-container)';
      badge.style.color = '#97650a';
    } else if (status === 'done') {
      badge.textContent = '\u2705 Completado';
      badge.style.background = 'var(--green-container)';
      badge.style.color = 'var(--green)';
    } else {
      var orig = badge.getAttribute('data-original');
      if (orig) badge.textContent = orig;
      badge.style.background = '';
      badge.style.color = '';
    }
  }

  function setSectionDesc(stepId, text) {
    var section = document.getElementById(STEP_SECTION[stepId]);
    if (!section) return;
    var desc = section.querySelector('.pipeline-section-desc');
    if (desc) desc.textContent = text;
  }

  // ---------- Build trends helpers ----------
  function buildTrendSeries(base, growth, volatility) {
    var points = [];
    var value = base;
    for (var day = 1; day <= 30; day++) {
      var noise = (Math.sin(day * 1.3) + Math.sin(day * 0.7)) * volatility;
      value = base + (base * growth * (day / 30)) + noise * base * 0.05;
      points.push(Math.max(0, Math.round(value)));
    }
    return points;
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function shuffleRows(rows) {
    var r = rows.slice();
    for (var i = r.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = r[i];
      r[i] = r[j];
      r[j] = tmp;
    }
    return r;
  }

  // ========== STEP EXECUTORS ==========

  async function executeStep1() {
    if (processing || completedSteps[1]) return;
    processing = true;
    activateStep(1);
    setBadge(1, 'processing');
    setButtonState('btnStep1', 'processing');
    setSectionDesc(1, 'Iniciando conexi\u00f3n con fuentes transaccionales y externas...');

    if (window.SRSim) {
      await new Promise(function(resolve) {
        SRSim.simulateIngestion(function() {
          setSectionDesc(1, 'Cloud DLP: 0 PII detectado \u00b7 Secret Manager: credenciales verificadas \u00b7 Datos en BigQuery Bronze');
          setBadge(1, 'done');
          markStepDone(1);
          setButtonState('btnStep1', 'done', 'Datos ingestados');
          unlockStep(2);
          setButtonState('btnStep2', 'ready', 'Ejecutar Pipeline IA', 'smart_toy');
          showToast('Paso 1 completado \u2014 Fuentes e Ingesta. Paso 2 disponible.');
          processing = false;
          resolve();
        });
      });
    } else {
      // Fallback to original behavior
      await sleep(600);
      setSectionDesc(1, 'Conectado SAP ERP, WMS, POS \u2014 leyendo fact_sales, allocation_input, dim_products\u2026');
      await sleep(600);
      setSectionDesc(1, 'Streaming TikTok/Instagram, Clima API \u2014 datos en tr\u00e1nsito por Pub/Sub\u2026');
      await sleep(600);
      setSectionDesc(1, 'Cloud DLP: 0 PII detectado \u00b7 Secret Manager: credenciales verificadas \u00b7 Datos en BigQuery Bronze');
      setBadge(1, 'done');
      markStepDone(1);
      setButtonState('btnStep1', 'done', 'Datos ingestados');
      unlockStep(2);
      setButtonState('btnStep2', 'ready', 'Ejecutar Pipeline IA', 'smart_toy');
      showToast('Paso 1 completado \u2014 Fuentes e Ingesta. Paso 2 disponible.');
      processing = false;
    }
  }

  async function executeStep2() {
    if (processing || completedSteps[2]) return;
    processing = true;
    activateStep(2);
    setBadge(2, 'processing');
    setButtonState('btnStep2', 'processing');
    setSectionDesc(2, 'Ejecutando BigQuery Medallion y Vertex AI Agent...');

    if (window.SRSim) {
      await new Promise(function(resolve) {
        SRSim.simulateVertexAI(function() {
          setSectionDesc(2, 'Medallion Bronce\u2192Plata\u2192Oro completado \u00b7 4 m\u00f3dulos ejecutados \u00b7 Vertex AI gener\u00f3 predicciones');
          setBadge(2, 'done');
          markStepDone(2);
          setButtonState('btnStep2', 'done', 'Pipeline IA ejecutado');
          unlockStep(3);
          setButtonState('btnStep3Replenish', 'ready', 'Generar \u00f3rdenes', 'inventory_2');
          showToast('Paso 2 completado \u2014 Procesamiento IA. Paso 3 disponible.');
          processing = false;
          resolve();
        });
      });
    } else {
      setSectionDesc(2, 'Ejecutando BigQuery Medallion: Bronce\u2026');
      await sleep(500);
      setSectionDesc(2, 'Medallion: Bronce\u2192Plata \u2014 estandarizando esquemas\u2026');
      await sleep(500);
      setSectionDesc(2, 'Medallion: Plata\u2192Oro \u2014 generando features ML\u2026');
      await sleep(500);
      setSectionDesc(2, 'M\u00f3dulo 1/4: Inventario Omnicanal y Riesgo \u2014 calculando stock neto real\u2026');
      await sleep(400);
      setSectionDesc(2, 'M\u00f3dulo 2/4: Demanda Geo-Espacial \u2014 coeficiente spillover aplicado\u2026');
      await sleep(400);
      setSectionDesc(2, 'M\u00f3dulo 3/4: Ciclo de Vida y Atributos \u2014 clasificando SKU\u2026');
      await sleep(400);
      setSectionDesc(2, 'M\u00f3dulo 4/4: Inteligencia de Mercado \u2014 cruzando segmentos an\u00f3nimos con tendencias\u2026');
      await sleep(400);
      setSectionDesc(2, 'Vertex AI generando predicciones \u2014 aplicando SS, ROP, OQ, Trend Score\u2026');
      await sleep(600);
      setSectionDesc(2, 'Medallion Bronce\u2192Plata\u2192Oro completado \u00b7 4 m\u00f3dulos ejecutados \u00b7 Vertex AI gener\u00f3 predicciones');
      setBadge(2, 'done');
      markStepDone(2);
      setButtonState('btnStep2', 'done', 'Pipeline IA ejecutado');
      unlockStep(3);
      setButtonState('btnStep3Replenish', 'ready', 'Generar \u00f3rdenes', 'inventory_2');
      showToast('Paso 2 completado \u2014 Procesamiento IA. Paso 3 disponible.');
      processing = false;
    }
  }

  async function executeStep3() {
    if (processing || completedSteps[3]) return;
    processing = true;
    activateStep(3);
    setBadge(3, 'processing');

    setSectionDesc(3, 'Generando forecast SKU-Local y \u00f3rdenes de reposici\u00f3n\u2026');

    window.trendsSeries = {
      labels: window.trendsSeries.labels,
      views: buildTrendSeries(12000, 2.8 + Math.random() * 0.5, 1.1),
      saves: buildTrendSeries(2200, 3.4 + Math.random() * 0.5, 0.9),
      shares: buildTrendSeries(900, 2.1 + Math.random() * 0.3, 0.7),
    };
    window.topTrends = [
      { rank: 1, name: '#Gorpcore', score: 340 + randomInt(0, 60) },
      { rank: 2, name: '#OutdoorLife', score: 210 + randomInt(0, 40) },
      { rank: 3, name: '#WinterStyle', score: 178 + randomInt(0, 30) },
      { rank: 4, name: '#TrailRunning', score: 142 + randomInt(0, 25) },
      { rank: 5, name: '#UrbanHiking', score: 96 + randomInt(0, 20) },
    ];
    if (typeof window.refreshTrends === 'function') window.refreshTrends();

    if (typeof window.runForecast === 'function') window.runForecast();

    // Use simulation engine for row-by-row insertion
    if (window.SRSim) {
      await new Promise(function(resolve) {
        SRSim.simulateOrderGeneration(function() {
          setButtonState('btnStep3Replenish', 'done', '\u00d3rdenes generadas');
          setSectionDesc(3, 'Forecast y \u00f3rdenes de reposici\u00f3n generados \u2014 outputs actualizados');
          setBadge(3, 'done');
          markStepDone(3);
          unlockStep(4);
          setButtonState('btnStep4', 'ready', 'Avanzar flujo', 'fact_check');
          showToast('Paso 3 completado \u2014 Outputs generados. Paso 4 disponible.');
          processing = false;
          resolve();
        });
      });
    } else {
      window.replenishRows = shuffleRows(window.replenishRows);
      if (typeof window.renderReplenishTable === 'function') window.renderReplenishTable();
      setButtonState('btnStep3Replenish', 'done', '\u00d3rdenes generadas');
      setSectionDesc(3, 'Forecast y \u00f3rdenes de reposici\u00f3n generados \u2014 outputs actualizados');
      setBadge(3, 'done');
      markStepDone(3);
      unlockStep(4);
      setButtonState('btnStep4', 'ready', 'Avanzar flujo', 'fact_check');
      showToast('Paso 3 completado \u2014 Outputs generados. Paso 4 disponible.');
      processing = false;
    }
  }

  async function executeStep4() {
    if (processing || completedSteps[4]) return;
    processing = true;
    activateStep(4);
    setBadge(4, 'processing');
    setButtonState('btnStep4', 'processing');

    setSectionDesc(4, 'Avanzando flujo de aprobaci\u00f3n: IA \u2192 Planner \u2192 Decisi\u00f3n\u2026');
    await sleep(800);

    // Mark review as done
    document.querySelectorAll('#approvalFlow .approval-step').forEach(function (el) {
      if (el.id === 'approvalStepReview') {
        el.className = 'approval-step is-done';
        el.querySelector('.approval-status').className = 'approval-status status-done';
        el.querySelector('.approval-status').textContent = 'Completado';
      }
    });
    document.querySelectorAll('#approvalFlow .approval-connector').forEach(function (c, i) {
      if (i === 0) c.className = 'approval-connector is-done';
    });

    // Auto-approve first high-priority order if none approved yet
    var anyApproved = false;
    if (window.SRState) {
      var decisions = window.SRState.getAllDecisions();
      for (var sku in decisions) {
        if (decisions[sku].status === 'approved') { anyApproved = true; break; }
      }
    }
    if (!anyApproved && window.replenishRows && window.SRState) {
      var highPri = window.replenishRows.find(function(r){ return r.priority === 'alta' && r.order > 0; });
      if (highPri) {
        window.SRState.setDecision(highPri.sku, 'approved');
        if (typeof window.renderReplenishTable === 'function') window.renderReplenishTable();
      }
    }

    setSectionDesc(4, 'Planner ha revisado \u2014 ejecutando orden en SAP...');
    setBadge(4, 'processing');

    // Simulate SAP + WMS + Logistics
    if (window.SRSim) {
      var orderData = { product: 'Zapatilla Outdoor X2', store: 'Parque Arauco', order: 24 };
      if (window.replenishRows) {
        var approvedRow = window.replenishRows.find(function(r){
          return window.SRState && window.SRState.getDecision(r.sku) && window.SRState.getDecision(r.sku).status === 'approved';
        });
        if (approvedRow) orderData = approvedRow;
      }

      await new Promise(function(resolve) {
        SRSim.simulateSAPOrder(orderData, function(orderId) {
          showToast('Orden '+orderId+' creada en SAP ERP');
          setSectionDesc(4, 'Orden SAP creada \u2014 iniciando picking en CD...');
          SRSim.simulateWMSPicking(orderData, function() {
            showToast('Picking completado en Centro de Distribuci\u00f3n');
            setSectionDesc(4, 'Picking completado \u2014 iniciando flujo log\u00edstico...');
            SRSim.simulateLogistics(orderData, function() {
              setSectionDesc(4, 'Pipeline completo \u2014 orden aprobada, despachada y en ruta a tienda');
              setBadge(4, 'done');
              markStepDone(4);
              setButtonState('btnStep4', 'done', 'Pipeline completado');
              showToast('Pipeline completo \u2014 todas las etapas ejecutadas exitosamente.');
              processing = false;
              resolve();
            });
          });
        });
      });
    } else {
      setSectionDesc(4, 'Planner ha revisado \u2014 \u00f3rdenes pendientes de aprobaci\u00f3n final');
      setBadge(4, 'done');
      markStepDone(4);
      setButtonState('btnStep4', 'done', 'Flujo avanzado');
      showToast('Pipeline completo \u2014 todas las etapas ejecutadas. Revisa los outputs.');
      processing = false;
    }
  }

  // ========== WIRING ==========

  document.getElementById('btnStep1').addEventListener('click', executeStep1);
  document.getElementById('btnStep2').addEventListener('click', executeStep2);
  document.getElementById('btnStep4').addEventListener('click', executeStep4);

  // Step 3 replenish button triggers full step 3 execution
  document.getElementById('btnStep3Replenish').addEventListener('click', executeStep3);

  // Pipeline bar step clicks: scroll + execute if ready
  document.querySelectorAll('.pipeline-step[data-step]').forEach(function (el) {
    el.addEventListener('click', function () {
      var step = parseInt(el.dataset.step);
      scrollToSection(step);
      var ready = el.dataset.ready === 'true';
      if (ready && step >= 1 && step <= 4 && !completedSteps[step]) {
        var fn = [null, executeStep1, executeStep2, executeStep3, executeStep4][step];
        if (fn) fn();
      }
    });
  });

  // Initial: make forecast generate button also work independently
  // (it already works via forecast.js)

  // Expose for debugging
  window.__pipeline = { executeStep1, executeStep2, executeStep3, executeStep4 };
})();
