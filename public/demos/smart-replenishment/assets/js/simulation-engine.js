(function () {
  'use strict';

  var MC_INTERVAL = 2800;
  var TRENDS_INTERVAL = 2500;
  var BQ_INTERVAL = 2000;
  var KPI_INTERVAL = 3500;
  var HEALTH_INTERVAL = 5000;
  var MAX_MC_EVENTS = 30;
  var ACTIVE_SESSION_SECONDS = 0;

  var state = {
    running: false,
    timers: {},
    mcEvents: [],
    sessionSeconds: 0,
    systemHealth: { cpu: 23, memory: 41, apiLatency: 87, throughput: 1240 },
    bq: {
      bronze: { fact_sales: 1245220, inventory_snapshots: 892340, sales_raw: 2341567 },
      silver: { fact_sales_clean: 1243100, inventory_daily: 890120, store_agg: 98765 },
      gold: { features_ml: 456780, predictions: 234500, orders_gold: 45678 }
    },
    kpis: {
      riesgoQuiebre: 128,
      ventasProtegidas: 34200000,
      roi: 94.8,
      ordenesGeneradas: 457,
      stockRecuperado: 125000000,
      confianzaIA: 94.8
    },
    trends: { views: 12000, saves: 2200, shares: 900 },
    vertexProgress: 0,
    vertexStep: 0,
    isAutoDemo: false,
    autoDemoStep: null,
    ingesting: false,
    notifications: []
  };

  var NOTIF_TEMPLATES = [
    { icon: 'warning', color: 'var(--red)', title: '128 SKU superaron el umbral de riesgo de quiebre', meta: 'Hace un momento' },
    { icon: 'trending_up', color: 'var(--purple)', title: 'Nueva tendencia detectada: #Gorpcore (+340%)', meta: 'Hace un momento' },
    { icon: 'summarize', color: 'var(--primary)', title: 'Resumen de pipeline ejecutado para 1,248 SKU', meta: 'Hace un momento' },
    { icon: 'check_circle', color: 'var(--green)', title: 'Orden SAP-2026-009812 aprobada y en ejecución', meta: 'Hace un momento' },
    { icon: 'dns', color: '#9334e6', title: 'SAP Inventory: 12,450 registros sincronizados', meta: 'Hace un momento' },
    { icon: 'inventory_2', color: 'var(--amber)', title: 'WMS Picking iniciado en CD Pudahuel', meta: 'Hace un momento' },
    { icon: 'local_shipping', color: 'var(--primary)', title: 'Despacho en ruta: CD Quilicura → Mall Plaza Egaña', meta: 'Hace un momento' },
    { icon: 'cloud_done', color: 'var(--green)', title: 'Weather API: 1,284 predicciones actualizadas', meta: 'Hace un momento' },
    { icon: 'tag', color: '#1e8e3e', title: 'TikTok Trend Escalating: #WinterStyle +278% en 24h', meta: 'Hace un momento' },
  ];

  var EVENT_TPL = [
    { icon: 'smart_toy', color: '#1a73e8', label: 'Vertex AI Forecast Generated', badge: 'IA', desc: function(){return 'Pipeline ejecutado para '+(1240+Math.floor(Math.random()*20))+' SKU';} },
    { icon: 'tag', color: '#1e8e3e', label: 'TikTok Trend Detected', badge: 'RRSS', desc: function(){var t=['#Gorpcore','#TrailRunning','#WinterStyle','#UrbanHiking','#OutdoorLife'];return t[Math.floor(Math.random()*t.length)]+' trending +'+(150+Math.floor(Math.random()*250))+'%';} },
    { icon: 'dns', color: '#9334e6', label: 'SAP Inventory Updated', badge: 'SAP', desc: function(){return (1240000+Math.floor(Math.random()*10000)).toLocaleString()+' registros procesados';} },
    { icon: 'inventory_2', color: '#f29900', label: 'Replenishment Order Created', badge: 'SCM', desc: function(){return 'SAP-2026-'+String(9800+Math.floor(Math.random()*200)).padStart(6,'0');} },
    { icon: 'package_2', color: '#1e8e3e', label: 'WMS Picking Started', badge: 'WMS', desc: function(){return 'CD '+(['Pudahuel','Quilicura','San Bernardo','Renca'][Math.floor(Math.random()*4)])+' · Op #'+(300+Math.floor(Math.random()*200));} },
    { icon: 'storage', color: '#1a73e8', label: 'BigQuery Job Completed', badge: 'BQ', desc: function(){return 'Bronze\u2192Silver\u2192Gold pipeline OK';} },
    { icon: 'point_of_sale', color: '#9334e6', label: 'POS Sync Finished', badge: 'POS', desc: function(){return (400+Math.floor(Math.random()*60))+' tiendas sincronizadas';} },
    { icon: 'verified_user', color: '#1e8e3e', label: 'Cloud DLP Sanitization OK', badge: 'DLP', desc: function(){return '0 PII en '+(2000+Math.floor(Math.random()*500))+'K registros';} },
    { icon: 'cloud', color: '#1a73e8', label: 'Weather API Data Received', badge: 'WTH', desc: function(){return (1200+Math.floor(Math.random()*200))+' predicciones recibidas';} },
    { icon: 'sync', color: '#9334e6', label: 'Pub/Sub Stream Processed', badge: 'EVT', desc: function(){return (15000+Math.floor(Math.random()*5000))+' eventos en \u00faltima hora';} },
    { icon: 'trending_up', color: '#f29900', label: 'TikTok Trend Escalating', badge: 'TRND', desc: function(){return '#'+(['Gorpcore','TrailRunning','WinterHike','UrbanOutdoor','SnowStyle'][Math.floor(Math.random()*5)])+' +'+(200+Math.floor(Math.random()*300))+'% en 24h';} },
    { icon: 'check_circle', color: '#1e8e3e', label: 'Vertex AI Recommendation Ready', badge: 'IA', desc: function(){return 'Confianza '+(85+Math.floor(Math.random()*14))+'% · '+(15+Math.floor(Math.random()*30))+' \u00f3rdenes sugeridas';} },
  ];

  function randomInt(min, max) { return Math.floor(Math.random()*(max-min+1))+min; }
  function formatNum(n) { return Number(n).toLocaleString('es-CL'); }
  function formatCurrency(n) { return '$' + (n/1000000).toFixed(1) + 'M'; }

  function getTimestamp() {
    var d=new Date();
    return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')+':'+String(d.getSeconds()).padStart(2,'0');
  }

  function showToastMessage(msg, duration) {
    var toast = document.getElementById('toast');
    var toastMsg = document.getElementById('toastMessage');
    if (toast && toastMsg) {
      toastMsg.textContent = msg;
      toast.classList.add('show');
      clearTimeout(window._toastTimer);
      window._toastTimer = setTimeout(function(){ toast.classList.remove('show'); }, duration || 3000);
    }
  }

  // ===================== SESSION COUNTER =====================
  function updateSessionTime() {
    ACTIVE_SESSION_SECONDS++;
    state.sessionSeconds = ACTIVE_SESSION_SECONDS;
    var el = document.getElementById('sessionTime');
    if (!el) return;
    var m = Math.floor(ACTIVE_SESSION_SECONDS / 60);
    var s = ACTIVE_SESSION_SECONDS % 60;
    el.textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
  }

  // ===================== SYSTEM HEALTH =====================
  function updateSystemHealth() {
    if (!state.running) return;
    var h = state.systemHealth;
    h.cpu = 20 + Math.floor(Math.random() * 25);
    h.memory = 35 + Math.floor(Math.random() * 30);
    h.apiLatency = 65 + Math.floor(Math.random() * 60);
    h.throughput = 1100 + Math.floor(Math.random() * 400);
    renderHealth();
  }

  function renderHealth() {
    var h = state.systemHealth;
    var cpuEl = document.getElementById('healthCpu');
    var memEl = document.getElementById('healthMemory');
    var latEl = document.getElementById('healthLatency');
    var thrEl = document.getElementById('healthThroughput');
    if (cpuEl) { cpuEl.textContent = h.cpu + '%'; animateHealthPulse(cpuEl); }
    if (memEl) { memEl.textContent = h.memory + '%'; animateHealthPulse(memEl); }
    if (latEl) { latEl.textContent = h.apiLatency + 'ms'; animateHealthPulse(latEl); }
    if (thrEl) { thrEl.textContent = h.throughput.toLocaleString() + '/s'; animateHealthPulse(thrEl); }
  }

  function animateHealthPulse(el) {
    el.classList.remove('health-pulse');
    void el.offsetWidth;
    el.classList.add('health-pulse');
  }

  // ===================== MISSION CONTROL =====================
  function generateMCEvent() {
    var tpl = EVENT_TPL[Math.floor(Math.random()*EVENT_TPL.length)];
    return {
      id: 'mc_'+Date.now()+'_'+Math.random().toString(36).slice(2,6),
      icon: tpl.icon,
      color: tpl.color,
      label: tpl.label,
      badge: tpl.badge,
      desc: tpl.desc(),
      time: getTimestamp()
    };
  }

  function renderMCEvents() {
    var container = document.getElementById('mcStream');
    if (!container) return;
    container.innerHTML = state.mcEvents.map(function(e){
      return '<div class="mc-event" title="'+e.desc+'"><span class="mc-event-badge" style="background:'+e.color+';">'+e.badge+'</span><span class="mc-event-label">'+e.label+'</span><span class="mc-event-desc">'+e.desc+'</span><span class="mc-event-time">'+e.time+'</span></div>';
    }).join('');
  }

  function pushMCEvent() {
    if (!state.running) return;
    state.mcEvents.unshift(generateMCEvent());
    if (state.mcEvents.length > MAX_MC_EVENTS) state.mcEvents.length = MAX_MC_EVENTS;
    renderMCEvents();
  }

  // ===================== NOTIFICATIONS =====================
  function pushNotification() {
    if (!state.running) return;
    var tpl = NOTIF_TEMPLATES[Math.floor(Math.random() * NOTIF_TEMPLATES.length)];
    state.notifications.unshift({
      icon: tpl.icon,
      color: tpl.color,
      title: tpl.title,
      meta: 'Hace ' + (Math.floor(Math.random() * 5) + 1) + ' min'
    });
    if (state.notifications.length > 10) state.notifications.length = 10;
    renderNotifications();
  }

  function renderNotifications() {
    var dot = document.getElementById('notifDot');
    if (dot) dot.style.display = state.notifications.length > 0 ? 'block' : 'none';
    var dropdown = document.getElementById('notifDropdown');
    if (!dropdown) return;
    var header = dropdown.querySelector('.notif-dropdown-header');
    var items = state.notifications.map(function(n){
      return '<div class="notif-item"><span class="material-symbols-outlined" style="color:'+n.color+';">'+n.icon+'</span><div><div class="notif-item-title">'+n.title+'</div><div class="notif-item-meta">'+n.meta+'</div></div></div>';
    }).join('');
    var dotCount = state.notifications.length > 9 ? '9+' : state.notifications.length;
    dropdown.innerHTML = (header ? header.outerHTML : '') + items;
    if (dot) dot.textContent = dotCount;
  }

  // ===================== BIGQUERY SIMULATION =====================
  function updateBQ() {
    if (!state.running) return;
    var bq = state.bq;
    bq.bronze.fact_sales += randomInt(100, 500);
    bq.bronze.inventory_snapshots += randomInt(20, 150);
    bq.bronze.sales_raw += randomInt(200, 800);
    bq.silver.fact_sales_clean += randomInt(80, 400);
    bq.silver.inventory_daily += randomInt(15, 100);
    bq.silver.store_agg += randomInt(5, 30);
    bq.gold.features_ml += randomInt(50, 200);
    bq.gold.predictions += randomInt(30, 150);
    bq.gold.orders_gold += randomInt(10, 50);
    renderBQPanel();
  }

  function renderBQPanel() {
    var panel = document.getElementById('bqPanel');
    if (!panel) return;
    var bq = state.bq;
    panel.innerHTML =
      '<div class="bq-dataset"><div class="bq-dataset-name"><span class="material-symbols-outlined" style="color:#a05c1a;">layers</span>Dataset Bronze</div>'+
      '<div class="bq-table"><span class="bq-table-name">fact_sales</span><span class="bq-table-value" data-last="'+bq.bronze.fact_sales+'">'+formatNum(bq.bronze.fact_sales)+'</span></div>'+
      '<div class="bq-table"><span class="bq-table-name">inventory_snapshots</span><span class="bq-table-value" data-last="'+bq.bronze.inventory_snapshots+'">'+formatNum(bq.bronze.inventory_snapshots)+'</span></div>'+
      '<div class="bq-table"><span class="bq-table-name">sales_raw</span><span class="bq-table-value" data-last="'+bq.bronze.sales_raw+'">'+formatNum(bq.bronze.sales_raw)+'</span></div></div>'+
      '<div class="bq-dataset"><div class="bq-dataset-name"><span class="material-symbols-outlined" style="color:#5f6368;">layers</span>Dataset Silver</div>'+
      '<div class="bq-table"><span class="bq-table-name">fact_sales_clean</span><span class="bq-table-value" data-last="'+bq.silver.fact_sales_clean+'">'+formatNum(bq.silver.fact_sales_clean)+'</span></div>'+
      '<div class="bq-table"><span class="bq-table-name">inventory_daily</span><span class="bq-table-value" data-last="'+bq.silver.inventory_daily+'">'+formatNum(bq.silver.inventory_daily)+'</span></div>'+
      '<div class="bq-table"><span class="bq-table-name">store_agg</span><span class="bq-table-value" data-last="'+bq.silver.store_agg+'">'+formatNum(bq.silver.store_agg)+'</span></div></div>'+
      '<div class="bq-dataset"><div class="bq-dataset-name"><span class="material-symbols-outlined" style="color:#1a73e8;">layers</span>Dataset Gold</div>'+
      '<div class="bq-table"><span class="bq-table-name">features_ml</span><span class="bq-table-value" data-last="'+bq.gold.features_ml+'">'+formatNum(bq.gold.features_ml)+'</span></div>'+
      '<div class="bq-table"><span class="bq-table-name">predictions</span><span class="bq-table-value" data-last="'+bq.gold.predictions+'">'+formatNum(bq.gold.predictions)+'</span></div>'+
      '<div class="bq-table"><span class="bq-table-name">orders_gold</span><span class="bq-table-value" data-last="'+bq.gold.orders_gold+'">'+formatNum(bq.gold.orders_gold)+'</span></div></div>';
    panel.querySelectorAll('.bq-table-value').forEach(function(el){
      el.classList.remove('bq-flash');
      void el.offsetWidth;
      el.classList.add('bq-flash');
    });
  }

  // ===================== TRENDS SIMULATION =====================

  function updateTrends() {
    if (!state.running) return;
    state.trends.views += randomInt(50, 300);
    state.trends.saves += randomInt(20, 100);
    state.trends.shares += randomInt(10, 60);
    if (typeof window.refreshTrends === 'function') {
      window.trendsSeries.views.push(state.trends.views);
      window.trendsSeries.views.shift();
      window.trendsSeries.saves.push(state.trends.saves);
      window.trendsSeries.saves.shift();
      window.trendsSeries.shares.push(state.trends.shares);
      window.trendsSeries.shares.shift();
      window.refreshTrends();
    }
    updateTopTrends();
  }

  function updateTopTrends() {
    var list = document.getElementById('topTrendsList');
    if (!list || !window.topTrends) return;
    var maxScore = Math.max.apply(null, window.topTrends.map(function(t){return t.score;}));
    window.topTrends.forEach(function(t,i){
      var delta = randomInt(-5, 15);
      t.score = Math.max(50, t.score + delta);
    });
    window.topTrends.sort(function(a,b){return b.score-a.score;});
    window.topTrends.forEach(function(t,i){t.rank=i+1;});
    list.innerHTML = window.topTrends.map(function(t){
      var barPct = Math.min(100, (t.score/maxScore*100));
      var isNew = t.score > 200 && Math.random() > 0.85 ? '<span class="trend-new">NUEVO</span>' : '';
      return '<li><span class="trend-rank">'+t.rank+'</span><span class="trend-name">'+t.name+isNew+'</span><span class="trend-score-wrap"><span class="trend-score">+'+t.score+'%</span><span class="trend-bar"><span style="width:'+barPct+'%"></span></span></span></li>';
    }).join('');
  }

  // ===================== KPI SIMULATION =====================

  function updateKPIs() {
    if (!state.running) return;
    var k = state.kpis;
    k.riesgoQuiebre += randomInt(-3, 5);
    k.riesgoQuiebre = Math.max(80, Math.min(200, k.riesgoQuiebre));
    k.ventasProtegidas += randomInt(100000, 500000);
    k.ordenesGeneradas += randomInt(1, 4);
    k.stockRecuperado += randomInt(500000, 2000000);
    k.roi = Math.round((94.0 + Math.random()*3)*10)/10;
    k.confianzaIA = Math.round((93.0 + Math.random()*4)*10)/10;
    renderKPIs();
  }

  function animateValue(el, start, end, duration, suffix) {
    if (!el) return;
    var startTime = null;
    var suffixVal = suffix || '';
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var current = Math.round(start + (end - start) * easeOutCubic(progress));
      if (typeof end === 'number' && end > 1000000) {
        el.textContent = '$' + (current/1000000).toFixed(1) + 'M';
      } else {
        el.textContent = current + suffixVal;
      }
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function renderKPIs() {
    var k = state.kpis;
    var riesgoEl = document.querySelector('.kpi-strip-item:first-child .kpi-strip-value');
    var ordenesEl = document.getElementById('kpiOrdenesGeneradas');
    var stockEl = document.getElementById('kpiStockRecuperado');
    var ventasEl = document.getElementById('kpiVentasProtegidas');
    var confianzaEl = document.getElementById('kpiConfianzaIA');
    var impactoEl = document.querySelector('.kpi-strip-item:nth-child(5) .kpi-strip-value');

    if (riesgoEl) {
      var oldR = parseInt(riesgoEl.textContent) || 0;
      riesgoEl.innerHTML = k.riesgoQuiebre+' <small>SKU</small>';
      if (oldR !== k.riesgoQuiebre) animateKPIFlash(riesgoEl);
    }
    if (ordenesEl) {
      var oldO = parseInt(ordenesEl.textContent) || 0;
      ordenesEl.textContent = k.ordenesGeneradas;
      if (oldO !== k.ordenesGeneradas) animateKPIFlash(ordenesEl);
    }
    if (stockEl) {
      stockEl.textContent = formatCurrency(k.stockRecuperado);
    }
    if (confianzaEl) {
      confianzaEl.textContent = k.confianzaIA + '%';
    }
    if (ventasEl) {
      ventasEl.textContent = formatCurrency(k.ventasProtegidas);
    }
    if (impactoEl) {
      var impact = 23 + Math.floor(Math.random() * 5);
      impactoEl.textContent = '+' + impact + '%';
    }
  }

  function animateKPIFlash(el) {
    el.classList.remove('kpi-flash');
    void el.offsetWidth;
    el.classList.add('kpi-flash');
  }

  // ===================== VERTEX AI VISUALIZATION =====================

  var VERTEX_STEPS = [
    { id:1, label:'Analizando tendencias de mercado...', icon:'trending_up' },
    { id:2, label:'Calculando demanda proyectada...', icon:'calculate' },
    { id:3, label:'Evaluando stock actual y en tr\u00e1nsito...', icon:'inventory' },
    { id:4, label:'Calculando brechas de reposici\u00f3n...', icon:'difference' },
    { id:5, label:'Generando recomendaciones...', icon:'fact_check' },
    { id:6, label:'Optimizando pedido final...', icon:'assignment' }
  ];

  function renderVertexNodes(containerId, currentStep) {
    var container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = VERTEX_STEPS.map(function(s,i){
      var status = i < currentStep ? 'done' : (i === currentStep ? 'active' : 'pending');
      var icon = status === 'done' ? 'check_circle' : (status === 'active' ? 'sync' : 'radio_button_unchecked');
      var cls = 'vertex-node vertex-node-'+status;
      var pctElapsed = status === 'done' ? 100 : (status === 'active' ? Math.floor(Math.random()*40+30) : 0);
      return '<div class="'+cls+'"><span class="material-symbols-outlined vertex-node-icon">'+icon+'</span><div class="vertex-node-body"><span class="vertex-node-label">'+s.label+'</span><span class="vertex-node-pct">'+pctElapsed+'%</span></div></div>';
    }).join('');
    var pctOverall = Math.round((currentStep+1)/VERTEX_STEPS.length*100);
    var pbar = document.getElementById('vertexProgressBar');
    if (pbar) {
      pbar.style.width = Math.min(100, pctOverall)+'%';
      pbar.textContent = Math.min(100, pctOverall)+'%';
    }
    var plabel = document.getElementById('vertexProgressLabel');
    if (plabel) plabel.textContent = pctOverall + '%';
  }

  // ===================== INGESTION SIMULATION =====================

  function simulateIngestion(stepCallback) {
    if (state.ingesting) return;
    state.ingesting = true;
    var container = document.getElementById('ingestionStream');
    if (!container) { state.ingesting=false; if(stepCallback) stepCallback(); return; }
    container.innerHTML = '';
    container.style.display = 'block';

    var sources = [
      { name:'SAP ERP', icon:'dns', records:1245320, unit:'registros le\u00eddos', color:'#9334e6' },
      { name:'POS Tiendas', icon:'point_of_sale', records:432, unit:'tiendas sincronizadas', color:'#1a73e8' },
      { name:'TikTok API', icon:'tag', records:15842, unit:'eventos capturados', color:'#1e8e3e' },
      { name:'Weather API', icon:'cloud', records:1284, unit:'predicciones recibidas', color:'#f29900' }
    ];

    var idx = 0;
    function connectNext() {
      if (idx >= sources.length) {
        setTimeout(function(){
          container.querySelectorAll('.ingestion-item').forEach(function(el){
            el.classList.add('ingestion-done');
          });
          state.ingesting = false;
          if (stepCallback) stepCallback();
        }, 500);
        return;
      }
      var src = sources[idx];
      var item = document.createElement('div');
      item.className = 'ingestion-item';
      item.innerHTML = '<div class="ingestion-head"><span class="material-symbols-outlined ingestion-icon" style="color:'+src.color+';">'+src.icon+'</span><span class="ingestion-name">'+src.name+'</span><span class="ingestion-status">Conectando<span class="ingestion-dots"><span>.</span><span>.</span><span>.</span></span></span></div><div class="ingestion-counter"><span class="ingestion-num">0</span> <span class="ingestion-unit">'+src.unit+'</span></div>';
      container.appendChild(item);

      var numEl = item.querySelector('.ingestion-num');
      var statusEl = item.querySelector('.ingestion-status');
      var currentCount = 0;
      var target = src.records;
      var step = Math.max(1, Math.floor(target / 30));
      var incrementTimer = setInterval(function(){
        currentCount += step;
        if (currentCount >= target) {
          currentCount = target;
          clearInterval(incrementTimer);
          statusEl.innerHTML = '<span class="ingestion-check">\u2713</span> Conectado';
          idx++;
          setTimeout(connectNext, 400);
        }
        numEl.textContent = currentCount.toLocaleString('es-CL');
      }, 60);

      item.querySelector('.ingestion-head').addEventListener('click', function(){});
    }
    connectNext();
  }

  // ===================== SAP ORDER SIMULATION =====================

  function simulateSAPOrder(orderData, callback) {
    var modal = document.getElementById('sapModal');
    if (!modal) { if (callback) callback(); return; }
    var orderId = 'SAP-2026-'+String(9800+Math.floor(Math.random()*200)).padStart(6,'0');
    var body = modal.querySelector('.sap-modal-body');
    modal.style.display = 'flex';
    body.innerHTML = '<div class="sap-log"><div class="sap-log-line"><span class="material-symbols-outlined" style="font-size:14px;">link</span> POST /api/replenishment</div><div class="sap-log-line sap-log-pending" id="sapLogPending"><span class="material-symbols-outlined" style="font-size:14px;animation:spin 1s linear infinite;">sync</span> Enviando orden...</div></div>';

    setTimeout(function(){
      var pending = document.getElementById('sapLogPending');
      if (pending) {
        pending.className = 'sap-log-line sap-log-success';
        pending.innerHTML = '<span class="material-symbols-outlined" style="font-size:14px;">check_circle</span> 201 Created';
      }
      body.innerHTML += '<div class="sap-log"><div class="sap-log-line sap-log-success"><span class="material-symbols-outlined" style="font-size:14px;">check_circle</span> Order Created</div><div class="sap-log-line sap-log-id">'+orderId+'</div><div class="sap-log-line sap-log-meta">Producto: '+orderData.product+' \u00b7 Tienda: '+orderData.store+' \u00b7 Qty: '+orderData.order+'</div></div>';
      setTimeout(function(){
        modal.style.display = 'none';
        if (callback) callback(orderId);
      }, 1500);
    }, 1200);
  }

  // ===================== WMS PICKING SIMULATION =====================

  function simulateWMSPicking(orderData, callback) {
    var modal = document.getElementById('wmsModal');
    if (!modal) { if (callback) callback(); return; }
    var operators = ['Carlos Mu\u00f1oz #342','Ana Torres #218','Pedro Ram\u00edrez #156','Laura Soto #409','Diego Rojas #521'];
    var cds = ['CD Pudahuel','CD Quilicura','CD San Bernardo','CD Renca'];
    var op = operators[Math.floor(Math.random()*operators.length)];
    var cd = cds[Math.floor(Math.random()*cds.length)];
    var eta = (40+Math.floor(Math.random()*60))+' min';

    modal.style.display = 'flex';
    modal.querySelector('.wms-modal-body').innerHTML =
      '<div class="wms-info-grid"><div class="wms-info-item"><span class="wms-info-label">Operario</span><span class="wms-info-value">'+op+'</span></div><div class="wms-info-item"><span class="wms-info-label">Centro Distribuci\u00f3n</span><span class="wms-info-value">'+cd+'</span></div><div class="wms-info-item"><span class="wms-info-label">Cantidad</span><span class="wms-info-value">'+orderData.order+' unid.</span></div><div class="wms-info-item"><span class="wms-info-label">Tiempo estimado</span><span class="wms-info-value">'+eta+'</span></div></div>'+
      '<div style="margin-top:12px;"><div class="wms-progress-bar"><div class="wms-progress-fill" id="wmsProgressFill"></div></div><div style="display:flex;justify-content:space-between;margin-top:4px;"><span class="wms-progress-label" id="wmsProgressLabel">0%</span><span class="wms-progress-label" id="wmsProgressEta" style="color:#8b949e;font-size:11px;">ETA: '+eta+'</span></div></div>';

    var pct = 0;
    var pInterval = setInterval(function(){
      pct += Math.floor(Math.random()*12+5);
      if (pct >= 100) {
        pct = 100;
        clearInterval(pInterval);
        setTimeout(function(){
          modal.style.display = 'none';
          if (callback) callback();
        }, 800);
      }
      var fill = document.getElementById('wmsProgressFill');
      var label = document.getElementById('wmsProgressLabel');
      if (fill) fill.style.width = pct+'%';
      if (label) label.textContent = pct+'%';
    }, 500);
  }

  // ===================== LOGISTICS FLOW =====================

  function simulateLogistics(orderData, callback) {
    var container = document.getElementById('logisticsFlow');
    if (!container) { if (callback) callback(); return; }
    container.style.display = 'block';

    var steps = [
      { label: 'Orden', icon: 'receipt_long', time: '0s' },
      { label: 'Picking', icon: 'package_2', time: null },
      { label: 'Packing', icon: 'inventory', time: null },
      { label: 'Despacho', icon: 'local_shipping', time: null },
      { label: 'En Ruta', icon: 'route', time: null },
      { label: 'Entregado', icon: 'storefront', time: null }
    ];

    var stepsContainer = container.querySelector('.logistics-steps') || container;
    if (container.querySelector('.logistics-steps')) {
      stepsContainer = container.querySelector('.logistics-steps');
    }
    stepsContainer.innerHTML = '';
    steps.forEach(function(s,i){
      var el = document.createElement('div');
      el.className = 'logi-step'+(i===0?' logi-step-active':'');
      el.id = 'logiStep'+i;
      el.innerHTML = '<div class="logi-icon"><span class="material-symbols-outlined">'+s.icon+'</span></div><span class="logi-label">'+s.label+'</span><span class="logi-time" id="logiTime'+i+'">'+(s.time||'')+'</span>';
      if (i < steps.length-1) {
        var conn = document.createElement('div');
        conn.className = 'logi-connector';
        conn.id = 'logiConn'+i;
        el.appendChild(conn);
      }
      stepsContainer.appendChild(el);
    });

    var delays = [1200, 1800, 1000, 2500, 2000];
    var totalTime = 0;
    function advanceStep(idx) {
      if (idx >= steps.length) {
        if (callback) callback();
        return;
      }
      var stepEl = document.getElementById('logiStep'+idx);
      if (stepEl) {
        stepEl.classList.remove('logi-step-active');
        stepEl.classList.add('logi-step-done');
        var tEl = document.getElementById('logiTime'+idx);
        if (tEl) tEl.textContent = totalTime+'s';
      }
      var connEl = document.getElementById('logiConn'+(idx-1));
      if (connEl) connEl.classList.add('logi-conn-done');

      if (idx+1 < steps.length) {
        var nextEl = document.getElementById('logiStep'+(idx+1));
        if (nextEl) {
          nextEl.classList.add('logi-step-active');
          var ntEl = document.getElementById('logiTime'+(idx+1));
          if (ntEl) ntEl.textContent = '...';
        }
        totalTime += delays[idx] || 1000;
        setTimeout(function(){ advanceStep(idx+1); }, delays[idx] || 1000);
      }
    }
    setTimeout(function(){ advanceStep(1); }, 800);
  }

  // ===================== AUTO DEMO MODE =====================

  function startAutoDemo() {
    if (state.isAutoDemo) return;
    state.isAutoDemo = true;

    showDemoToast('Demo Autom\u00e1tica iniciada \u00b7 Ejecutando pipeline completo...', 2500);

    var steps = [
      { delay: 1200, fn: function(cb) {
        showDemoToast('Paso 1: Ingestando datos desde SAP, POS, TikTok, Weather...');
        simulateIngestion(function(){ updatePipelineUI(1); cb(); });
      }},
      { delay: 800, fn: function(cb) {
        showDemoToast('Paso 2: Ejecutando BigQuery Medallion y Vertex AI...');
        simulateVertexAI(function(){ updatePipelineUI(2); cb(); });
      }},
      { delay: 800, fn: function(cb) {
        showDemoToast('Paso 3: Generando forecast y \u00f3rdenes de reposici\u00f3n...');
        simulateOrderGeneration(function(){ updatePipelineUI(3); cb(); });
      }},
      { delay: 600, fn: function(cb) {
        showDemoToast('Paso 4: Aprobando orden de alta prioridad...');
        var highPri = window.replenishRows.find(function(r){return r.priority==='alta'&&r.order>0;});
        if (highPri && window.SRState) {
          window.SRState.setDecision(highPri.sku, 'approved');
          if (typeof window.renderReplenishTable === 'function') window.renderReplenishTable();
          var idx = window.replenishRows.indexOf(highPri);
          var rows = document.querySelectorAll('#replenishTableBody tr');
          if (rows[idx]) rows[idx].click();
        }
        updatePipelineUI(4);
        setTimeout(cb, 1000);
      }},
      { delay: 2000, fn: function(cb) {
        showDemoToast('Paso 5: Creando orden en SAP...');
        var order = { product: 'Zapatilla Outdoor X2', store: 'Parque Arauco', order: 24 };
        simulateSAPOrder(order, function(orderId){
          showDemoToast('Orden '+orderId+' creada en SAP ERP');
          setTimeout(cb, 500);
        });
      }},
      { delay: 2000, fn: function(cb) {
        showDemoToast('Paso 6: Iniciando picking en Centro de Distribuci\u00f3n...');
        simulateWMSPicking({order:24}, function(){ setTimeout(cb, 500); });
      }},
      { delay: 1500, fn: function(cb) {
        showDemoToast('Paso 7: Flujo log\u00edstico completo...');
        simulateLogistics({}, function(){ setTimeout(cb, 500); });
      }}
    ];

    function runStep(i) {
      if (i >= steps.length) {
        showDemoToast('Demo Autom\u00e1tica completada \u00b7 Todos los sistemas operativos', 5000);
        state.isAutoDemo = false;
        return;
      }
      var s = steps[i];
      setTimeout(function(){
        s.fn(function(){
          setTimeout(function(){ runStep(i+1); }, s.delay);
        });
      }, s.delay);
    }
    setTimeout(function(){ runStep(0); }, 500);
  }

  function updatePipelineUI(step) {
    var pipelineSteps = document.querySelectorAll('.pipeline-step[data-step]');
    pipelineSteps.forEach(function(el){
      var s = parseInt(el.dataset.step);
      if (s <= step) { el.classList.add('step-done'); el.dataset.ready = 'false'; }
      if (s === step+1) { el.dataset.ready = 'true'; el.classList.remove('step-done'); }
    });
    var sections = ['pipeline-step1','pipeline-step3','pipeline-step4','pipeline-step5'];
    var names = ['Fuentes e Ingesta','Procesamiento IA','Outputs','Ejecuci\u00f3n'];
    sections.forEach(function(sid, i){
      var sec = document.getElementById(sid);
      if (!sec) return;
      var badge = sec.querySelector('.pipeline-section-step');
      if (!badge) return;
      if (i < step) {
        badge.textContent = '\u2705 Completado';
        badge.style.background = 'var(--green-container)';
        badge.style.color = 'var(--green)';
      } else if (i === step) {
        badge.textContent = '\u23F3 En ejecuci\u00f3n...';
        badge.style.background = 'var(--amber-container)';
        badge.style.color = '#97650a';
      }
    });
  }

  function simulateVertexAI(callback) {
    var container = document.getElementById('vertexNodes');
    if (!container) { if(callback) callback(); return; }
    document.getElementById('vertexPanel').style.display = 'block';
    var step = 0;
    function advanceVertex() {
      if (step >= VERTEX_STEPS.length) {
        setTimeout(function(){
          document.getElementById('vertexPanel').style.display = 'none';
          if (callback) callback();
        }, 1000);
        return;
      }
      renderVertexNodes('vertexNodes', step);
      step++;
      setTimeout(advanceVertex, 600 + Math.floor(Math.random()*300));
    }
    advanceVertex();
  }

  function simulateOrderGeneration(callback) {
    var btn = document.getElementById('btnStep3Replenish');
    if (btn) btn.disabled = true;

    var rows = (window.replenishRows || []).slice();
    for (var i = rows.length-1; i>0; i--) {
      var j = Math.floor(Math.random()*(i+1));
      var tmp = rows[i]; rows[i] = rows[j]; rows[j] = tmp;
    }

    var tbody = document.getElementById('replenishTableBody');
    if (!tbody) { if(callback) callback(); return; }

    tbody.innerHTML = '';
    var idx = 0;
    function insertRow() {
      if (idx >= rows.length) {
        window.replenishRows = rows;
        if (typeof window.renderReplenishTable === 'function') window.renderReplenishTable();
        if (typeof window.applyReplenishFilters === 'function') window.applyReplenishFilters();
        if (btn) btn.disabled = false;
        if (callback) callback();
        return;
      }
      var row = rows[idx];
      var tr = document.createElement('tr');
      tr.dataset.index = idx;
      tr.dataset.priority = row.priority;
      tr.dataset.store = row.store;
      tr.tabIndex = 0;
      tr.style.animation = 'fadeInRow 0.3s ease';
      var priorityLabel = { alta:'\uD83D\uDD34 Alta', media:'\uD83D\uDFE1 Media', baja:'\uD83D\uDFE2 Baja' };
      tr.innerHTML =
        '<td><span class="priority-pill priority-'+row.priority+'">'+priorityLabel[row.priority]+'</span></td>'+
        '<td>'+row.store+'</td>'+
        '<td class="mono">'+row.sku+'</td>'+
        '<td>'+row.product+'</td>'+
        '<td>'+row.size+'</td>'+
        '<td>'+row.color+'</td>'+
        '<td class="mono">'+row.stock+'</td>'+
        '<td class="mono">'+row.demand+'</td>'+
        '<td class="mono order-cell '+(row.order>0?'order-positive':'order-zero')+'">'+(row.order>0?'+'+row.order:'0')+'</td>'+
        '<td class="mono">'+row.confidence+'%</td>'+
        '<td class="justification">'+row.reason+'</td>';
      tbody.appendChild(tr);
      idx++;
      setTimeout(insertRow, 180 + Math.floor(Math.random()*120));
    }
    setTimeout(insertRow, 300);
  }

  // ===================== AI DRAWER PROGRESSIVE EXPLANATION =====================

  function showDrawerProgressiveExplanation(reasons, callback) {
    var reasonsEl = document.getElementById('drawerReasons');
    if (!reasonsEl) { if (callback) callback(); return; }
    reasonsEl.innerHTML = '';
    var idx = 0;
    function addReason() {
      if (idx >= reasons.length) { if (callback) callback(); return; }
      var li = document.createElement('li');
      li.textContent = reasons[idx];
      li.style.animation = 'fadeInRow 0.3s ease';
      li.style.opacity = '0';
      li.style.transform = 'translateY(4px)';
      reasonsEl.appendChild(li);
      requestAnimationFrame(function(){
        li.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        li.style.opacity = '1';
        li.style.transform = 'translateY(0)';
      });
      idx++;
      setTimeout(addReason, 400 + Math.floor(Math.random()*200));
    }
    addReason();
  }

  function showDemoToast(msg, duration) {
    var toast = document.getElementById('toast');
    var toastMsg = document.getElementById('toastMessage');
    if (toast && toastMsg) {
      toastMsg.textContent = msg;
      toast.classList.add('show');
      clearTimeout(window._demoToastTimer);
      window._demoToastTimer = setTimeout(function(){ toast.classList.remove('show'); }, duration || 4000);
    }
  }

  // ===================== PUBLIC START/STOP =====================

  function start() {
    if (state.running) return;
    state.running = true;

    state.timers.mc = setInterval(pushMCEvent, MC_INTERVAL);
    state.timers.trends = setInterval(updateTrends, TRENDS_INTERVAL);
    state.timers.bq = setInterval(updateBQ, BQ_INTERVAL);
    state.timers.kpi = setInterval(updateKPIs, KPI_INTERVAL);
    state.timers.health = setInterval(updateSystemHealth, HEALTH_INTERVAL);
    state.timers.session = setInterval(updateSessionTime, 1000);
    state.timers.notif = setInterval(pushNotification, 12000);

    pushMCEvent();
    renderBQPanel();
    updateTrends();
    updateKPIs();
    updateSystemHealth();

    var mcStatus = document.getElementById('mcStatus');
    if (mcStatus) mcStatus.textContent = 'Live';
    var statusPill = document.querySelector('.status-pill');
    if (statusPill) {
      statusPill.className = 'status-pill status-online';
      statusPill.innerHTML = '<span class="status-dot"></span> Operativo';
    }
  }

  function stop() {
    state.running = false;
    Object.keys(state.timers).forEach(function(k){ clearInterval(state.timers[k]); });
    state.timers = {};
    var mcStatus = document.getElementById('mcStatus');
    if (mcStatus) mcStatus.textContent = 'Paused';
  }

  // ===================== EXPOSE =====================

  window.SRSim = {
    state: state,
    start: start,
    stop: stop,
    pushMCEvent: pushMCEvent,
    simulateIngestion: simulateIngestion,
    simulateVertexAI: simulateVertexAI,
    simulateOrderGeneration: simulateOrderGeneration,
    simulateSAPOrder: simulateSAPOrder,
    simulateWMSPicking: simulateWMSPicking,
    simulateLogistics: simulateLogistics,
    startAutoDemo: startAutoDemo,
    showDrawerProgressiveExplanation: showDrawerProgressiveExplanation,
    pushNotification: pushNotification,
    VERTEX_STEPS: VERTEX_STEPS
  };

})();
