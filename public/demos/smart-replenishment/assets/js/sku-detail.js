/**
 * Smart Replenishment Agent — Detalle de SKU
 * Lee el parámetro ?sku= de la URL y renderiza la ficha completa
 * a partir de los datos en window.replenishRows (assets/js/data.js).
 */
(function () {
  'use strict';

  const priorityLabel = { alta: '🔴 Alta', media: '🟡 Media', baja: '🟢 Baja' };

  const params = new URLSearchParams(window.location.search);
  const requestedSku = params.get('sku');
  const row =
    window.replenishRows.find((r) => r.sku === requestedSku) || window.replenishRows[0];

  // ---------------------------------------------------------------------
  // Encabezado y métricas principales
  // ---------------------------------------------------------------------
  document.title = `${row.product} · Detalle de SKU · Smart Replenishment Agent`;
  document.getElementById('breadcrumbCurrent').textContent = row.product;
  document.getElementById('skuTitle').textContent = `${row.product} · ${row.sku}`;
  document.getElementById('skuSubtitle').textContent = `${row.store} · Talla ${row.size} · ${row.color}`;

  const priorityPill = document.getElementById('skuPriorityPill');
  priorityPill.textContent = priorityLabel[row.priority];
  priorityPill.classList.add(`priority-${row.priority}`);

  document.getElementById('skuMetaChips').innerHTML = [row.store, `Talla ${row.size}`, row.color]
    .map((m) => `<span class="sku-meta-chip">${m}</span>`)
    .join('');

  document.getElementById('statStock').textContent = row.stock;
  document.getElementById('statDemand').textContent = row.demand;
  document.getElementById('statOrder').textContent = row.order > 0 ? `+${row.order} unid.` : 'Sin pedido';
  document.getElementById('statConfidence').textContent = `${row.confidence}%`;

  document.getElementById('infoSku').textContent = row.sku;
  document.getElementById('infoSize').textContent = row.size;
  document.getElementById('infoColor').textContent = row.color;
  document.getElementById('infoStore').textContent = row.store;

  // ---------------------------------------------------------------------
  // Razón de la recomendación + variables consideradas
  // ---------------------------------------------------------------------
  document.getElementById('skuReasons').innerHTML = row.detail.reasons.map((r2) => `<li>${r2}</li>`).join('');
  document.getElementById('skuVariables').innerHTML = row.detail.variables
    .map((v) => `<span class="chip-tag">${v}</span>`)
    .join('');

  // ---------------------------------------------------------------------
  // Línea de tiempo / trazabilidad (reacciona a la decisión guardada)
  // ---------------------------------------------------------------------
  function renderTimeline(decision) {
    const approved = decision && decision.status === 'approved';
    const rejected = decision && decision.status === 'rejected';
    const steps = [
      { icon: 'smart_toy', title: `Vertex AI Agent generó la recomendación para ${row.product}`, meta: 'Hace 4 min', done: true },
      { icon: 'person', title: 'Planner Demo revisó la orden', meta: decision ? 'Completado' : 'En curso', done: !!decision },
      { icon: 'fact_check', title: rejected ? 'El planner rechazó la orden' : 'Aprobación / rechazo del planner', meta: approved ? 'Aprobado' : rejected ? 'Rechazado' : 'Pendiente', done: approved || rejected },
      { icon: 'local_shipping', title: 'Generación de orden en SAP / WMS y despacho a tienda', meta: approved ? 'En curso' : rejected ? 'Cancelado' : 'Pendiente', done: false },
    ];
    document.getElementById('skuTimeline').innerHTML = steps
      .map(
        (s) => `
      <div class="timeline-item">
        <div class="timeline-dot ${s.done ? 'done' : ''}"><span class="material-symbols-outlined">${s.icon}</span></div>
        <div class="timeline-body">
          <div class="timeline-title">${s.title}</div>
          <div class="timeline-meta">${s.meta}</div>
        </div>
      </div>`
      )
      .join('');
  }

  renderTimeline(window.SRState ? window.SRState.getDecision(row.sku) : null);

  // ---------------------------------------------------------------------
  // Gráfico: evolución de stock vs. demanda (14 días, sintético)
  // ---------------------------------------------------------------------
  const days = Array.from({ length: 14 }, (_, i) => `Día ${i + 1}`);
  const demandPerDay = Math.max(1, Math.round(row.demand / 7));
  let runningStock = row.stock + demandPerDay * 13;
  const stockSeries = days.map((_, i) => Math.max(0, Math.round(runningStock - demandPerDay * i)));
  const demandSeries = days.map(() => demandPerDay);

  new Chart(document.getElementById('skuHistoryChart').getContext('2d'), {
    type: 'line',
    data: {
      labels: days,
      datasets: [
        {
          label: 'Stock disponible',
          data: stockSeries,
          borderColor: '#1A73E8',
          backgroundColor: 'rgba(26,115,232,0.08)',
          fill: true,
          tension: 0.3,
          pointRadius: 0,
          borderWidth: 2,
        },
        {
          label: 'Demanda diaria',
          data: demandSeries,
          borderColor: '#1E8E3E',
          backgroundColor: 'transparent',
          borderDash: [4, 4],
          tension: 0.1,
          pointRadius: 0,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false } },
        y: { grid: { color: '#EEF1F6' }, beginAtZero: true },
      },
    },
  });

  // ---------------------------------------------------------------------
  // Gauge de confianza (doughnut)
  // ---------------------------------------------------------------------
  document.getElementById('skuConfidenceValue').textContent = `${row.confidence}%`;
  new Chart(document.getElementById('skuConfidenceChart').getContext('2d'), {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [row.confidence, 100 - row.confidence],
          backgroundColor: ['#1A73E8', '#E8EAED'],
          borderWidth: 0,
        },
      ],
    },
    options: {
      cutout: '78%',
      responsive: false,
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
    },
  });

  // ---------------------------------------------------------------------
  // Acciones: aprobar / rechazar (persiste la decisión en SRState)
  // ---------------------------------------------------------------------
  const statusBadge = document.getElementById('skuStatusBadge');
  const approveBtn = document.getElementById('skuApprove');
  const rejectBtn = document.getElementById('skuReject');

  function applyDecisionUI(decision) {
    if (!decision) {
      statusBadge.textContent = 'Pendiente de aprobación';
      statusBadge.className = 'badge badge-info';
      statusBadge.style.background = '';
      statusBadge.style.color = '';
      approveBtn.disabled = false;
      rejectBtn.disabled = false;
      return;
    }
    const approved = decision.status === 'approved';
    statusBadge.textContent = approved ? 'Aprobado' : 'Rechazado';
    statusBadge.className = approved ? 'badge badge-success' : 'badge';
    statusBadge.style.background = approved ? '' : 'var(--red-container)';
    statusBadge.style.color = approved ? '' : 'var(--red)';
    approveBtn.disabled = true;
    rejectBtn.disabled = true;
  }

  function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2500);
  }

  applyDecisionUI(window.SRState ? window.SRState.getDecision(row.sku) : null);

  approveBtn.addEventListener('click', () => {
    const decision = window.SRState ? window.SRState.setDecision(row.sku, 'approved') : { status: 'approved' };
    applyDecisionUI(decision);
    renderTimeline(decision);
    showToast(`Orden de ${row.product} aprobada`);
  });

  rejectBtn.addEventListener('click', () => {
    const decision = window.SRState ? window.SRState.setDecision(row.sku, 'rejected') : { status: 'rejected' };
    applyDecisionUI(decision);
    renderTimeline(decision);
    showToast(`Orden de ${row.product} rechazada`);
  });
})();
