/**
 * Smart Replenishment Agent — Interacciones del mockup
 */
(function () {
  'use strict';

  const priorityLabel = { alta: '🔴 Alta', media: '🟡 Media', baja: '🟢 Baja' };

  // ---------------------------------------------------------------------
  // Panel 5 — Tabla de reposición: render inicial
  // ---------------------------------------------------------------------
  const tbody = document.getElementById('replenishTableBody');

  function renderTable(rows) {
    const decisions = window.SRState ? window.SRState.getAllDecisions() : {};
    const threshold = window.SRState ? window.SRState.getSettings().confidenceThreshold : 85;

    tbody.innerHTML = rows
      .map((row, index) => {
        const decision = decisions[row.sku];
        const decisionFlag = decision
          ? `<span class="decision-flag decision-flag-${decision.status}"><span class="material-symbols-outlined">${decision.status === 'approved' ? 'check_circle' : 'cancel'}</span>${decision.status === 'approved' ? 'Aprobado' : 'Rechazado'}</span>`
          : '';
        const reviewFlag = !decision && row.confidence < threshold
          ? `<span class="manual-review-flag"><span class="material-symbols-outlined">flag</span>Revisión manual</span>`
          : '';
        return `
        <tr data-index="${index}" data-priority="${row.priority}" data-store="${row.store}" tabindex="0">
          <td><span class="priority-pill priority-${row.priority}">${priorityLabel[row.priority]}</span>${decisionFlag}</td>
          <td>${row.store}</td>
          <td class="mono">${row.sku}</td>
          <td>${row.product}</td>
          <td>${row.size}</td>
          <td>${row.color}</td>
          <td class="mono" data-value="${row.stock}">${row.stock}</td>
          <td class="mono" data-value="${row.demand}">${row.demand}</td>
          <td class="mono order-cell ${row.order > 0 ? 'order-positive' : 'order-zero'}" data-value="${row.order}">${row.order > 0 ? '+' + row.order : '0'}</td>
          <td class="mono" data-value="${row.confidence}">${row.confidence}%${reviewFlag}</td>
          <td class="justification">${row.reason}</td>
        </tr>
      `;
      })
      .join('');
  }

  function showEmptyState() {
    tbody.innerHTML = '<tr><td colspan="11" style="text-align:center;color:var(--text-tertiary);padding:32px;"><span class="material-symbols-outlined" style="font-size:32px;display:block;margin-bottom:8px;">inventory_2</span>Haz clic en <strong>Generar \u00f3rdenes</strong> para ejecutar el motor de reposici\u00f3n<br><small style="color:var(--text-tertiary);">Los pedidos se calcular\u00e1n por SKU \u00d7 Tienda \u00d7 Talla/Color</small></td></tr>';
  }

  showEmptyState();
  window.renderReplenishTable = function() { renderTable(window.replenishRows); };

  // ---------------------------------------------------------------------
  // Panel 5 — Búsqueda de texto
  // ---------------------------------------------------------------------
  const searchInput = document.getElementById('tableSearch');
  let activePriority = 'todas';
  let activeStore = 'todas';

  function applyFilters() {
    const term = searchInput.value.trim().toLowerCase();
    document.querySelectorAll('#replenishTableBody tr').forEach((tr) => {
      const matchesText = tr.textContent.toLowerCase().includes(term);
      const matchesPriority = activePriority === 'todas' || tr.dataset.priority === activePriority;
      const matchesStore = activeStore === 'todas' || tr.dataset.store === activeStore;
      tr.style.display = matchesText && matchesPriority && matchesStore ? '' : 'none';
    });
  }

  searchInput.addEventListener('input', applyFilters);
  window.applyReplenishFilters = applyFilters;

  // ---------------------------------------------------------------------
  // Topbar — Selector de tienda: filtra la tabla de reposición
  // ---------------------------------------------------------------------
  const storeSelect = document.getElementById('storeSelect');
  if (storeSelect) {
    storeSelect.addEventListener('change', () => {
      activeStore = storeSelect.value;
      applyFilters();
    });
  }

  // ---------------------------------------------------------------------
  // Panel 5 — Filtro por prioridad
  // ---------------------------------------------------------------------
  document.getElementById('priorityFilters').addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-priority]');
    if (!btn) return;
    activePriority = btn.dataset.priority;
    document.querySelectorAll('#priorityFilters .chip').forEach((c) => c.classList.remove('chip-active'));
    btn.classList.add('chip-active');
    applyFilters();
  });

  // ---------------------------------------------------------------------
  // Panel 5 — Orden por columna (numérico)
  // ---------------------------------------------------------------------
  document.querySelectorAll('#replenishTable th.sortable').forEach((th, colIndex) => {
    let ascending = true;
    th.addEventListener('click', () => {
      const cellIndex = Array.from(th.parentElement.children).indexOf(th);
      const rows = Array.from(tbody.querySelectorAll('tr'));
      rows.sort((a, b) => {
        const va = parseFloat(a.children[cellIndex].dataset.value || '0');
        const vb = parseFloat(b.children[cellIndex].dataset.value || '0');
        return ascending ? va - vb : vb - va;
      });
      ascending = !ascending;
      document.querySelectorAll('#replenishTable th.sortable').forEach((h) => h.classList.remove('sort-asc', 'sort-desc'));
      th.classList.add(ascending ? 'sort-desc' : 'sort-asc');
      rows.forEach((r) => tbody.appendChild(r));
    });
  });

  // ---------------------------------------------------------------------
  // Toolbar — Exportar tabla a CSV (respeta búsqueda, filtro y orden actual)
  // ---------------------------------------------------------------------
  const exportBtn = document.getElementById('exportBtn');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  const priorityPlainLabel = { alta: 'Alta', media: 'Media', baja: 'Baja' };
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 3000);
  }

  function csvEscape(value) {
    const text = String(value);
    return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
  }

  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const visibleRows = Array.from(tbody.querySelectorAll('tr')).filter((tr) => tr.style.display !== 'none');
      if (visibleRows.length === 0) {
        showToast('No hay filas visibles para exportar');
        return;
      }

      const headers = ['Prioridad', 'Tienda', 'SKU', 'Producto', 'Talla', 'Color', 'Stock Actual', 'Demanda Proyectada', 'Pedido Sugerido', 'Confianza IA (%)', 'Justificación'];
      const lines = [headers.map(csvEscape).join(',')];

      visibleRows.forEach((tr) => {
        const row = window.replenishRows[Number(tr.dataset.index)];
        lines.push(
          [
            priorityPlainLabel[row.priority],
            row.store,
            row.sku,
            row.product,
            row.size,
            row.color,
            row.stock,
            row.demand,
            row.order,
            row.confidence,
            row.reason,
          ]
            .map(csvEscape)
            .join(',')
        );
      });

      const csvContent = '\uFEFF' + lines.join('\r\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const stamp = new Date().toISOString().slice(0, 10);
      const link = document.createElement('a');
      link.href = url;
      link.download = `reposicion-sugerida_${stamp}.csv`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);

      showToast(`${visibleRows.length} fila${visibleRows.length === 1 ? '' : 's'} exportada${visibleRows.length === 1 ? '' : 's'} a CSV`);
    });
  }

  // ---------------------------------------------------------------------
  // Toolbar — Rango de tiempo (7 / 30 días) y acceso directo a Filtros
  // ---------------------------------------------------------------------
  const timeRangeChips = document.getElementById('timeRangeChips');
  if (timeRangeChips) {
    timeRangeChips.querySelectorAll('button[data-range]').forEach((btn) => {
      btn.addEventListener('click', () => {
        timeRangeChips.querySelectorAll('button[data-range]').forEach((b) => b.classList.remove('chip-active'));
        btn.classList.add('chip-active');
        showToast(`Mostrando datos de los últimos ${btn.dataset.range} días`);
      });
    });
  }

  const filtrosChip = document.getElementById('filtrosChip');
  if (filtrosChip) {
    filtrosChip.addEventListener('click', () => {
      searchInput.focus();
      searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // ---------------------------------------------------------------------
  // Panel 6 — Drawer explicable de IA
  // ---------------------------------------------------------------------
  const drawer = document.getElementById('aiDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const drawerTitle = document.getElementById('drawerProductTitle');
  const drawerReasons = document.getElementById('drawerReasons');
  const drawerVariables = document.getElementById('drawerVariables');
  const confidenceValue = document.getElementById('confidenceValue');
  const drawerViewDetail = document.getElementById('drawerViewDetail');
  const drawerApproveBtn = document.getElementById('drawerApproveBtn');
  const drawerRejectBtn = document.getElementById('drawerRejectBtn');
  let confidenceChart = null;
  let currentDrawerRow = null;

  // ---------------------------------------------------------------------
  // Panel 7 — Flujo de Aprobación: refleja el pedido seleccionado
  // ---------------------------------------------------------------------
  function updateApprovalFlow(row) {
    const subtitle = document.getElementById('approvalSubtitle');
    const stepDecision = document.getElementById('approvalStepDecision');
    const connector2 = document.getElementById('approvalConnector2');
    const stepOrder = document.getElementById('approvalStepOrder');
    const stepPicking = document.getElementById('approvalStepPicking');
    const stepDispatch = document.getElementById('approvalStepDispatch');
    if (!subtitle || !stepDecision) return;

    const decision = window.SRState ? window.SRState.getDecision(row.sku) : null;
    subtitle.textContent = `${row.product} · ${row.store} (SKU ${row.sku}) — de la recomendación de IA al despacho en tienda.`;

    stepDecision.className = 'approval-step';
    if (!decision) {
      stepDecision.classList.add('is-branch');
      stepDecision.innerHTML = `
        <div class="approval-icon-group">
          <div class="approval-icon success"><span class="material-symbols-outlined">check_circle</span></div>
          <div class="approval-icon danger"><span class="material-symbols-outlined">cancel</span></div>
        </div>
        <span class="approval-label">Aprobar / Rechazar</span>
        <span class="approval-status status-pending">Pendiente</span>`;
      connector2.className = 'approval-connector';
      [stepOrder, stepPicking, stepDispatch].forEach((el) => {
        el.className = 'approval-step';
        el.querySelector('.approval-status').className = 'approval-status status-pending';
        el.querySelector('.approval-status').textContent = 'Pendiente';
      });
      return;
    }

    const approved = decision.status === 'approved';
    stepDecision.classList.add(approved ? 'is-done' : 'is-rejected');
    stepDecision.innerHTML = `
      <div class="approval-icon"><span class="material-symbols-outlined">${approved ? 'check_circle' : 'cancel'}</span></div>
      <span class="approval-label">${approved ? 'Aprobado' : 'Rechazado'}</span>
      <span class="approval-status ${approved ? 'status-done' : 'status-rejected'}">${approved ? 'Completado' : 'Rechazado'}</span>`;
    connector2.className = `approval-connector ${approved ? 'is-done' : 'is-rejected'}`;

    if (approved) {
      stepOrder.className = 'approval-step is-current';
      stepOrder.querySelector('.approval-status').className = 'approval-status status-current';
      stepOrder.querySelector('.approval-status').textContent = 'En curso';
      [stepPicking, stepDispatch].forEach((el) => {
        el.className = 'approval-step';
        el.querySelector('.approval-status').className = 'approval-status status-pending';
        el.querySelector('.approval-status').textContent = 'Pendiente';
      });
    } else {
      [stepOrder, stepPicking, stepDispatch].forEach((el) => {
        el.className = 'approval-step is-cancelled';
        el.querySelector('.approval-status').className = 'approval-status status-pending';
        el.querySelector('.approval-status').textContent = 'Cancelado';
      });
    }
  }

  function updateDrawerDecisionUI(row) {
    const decision = window.SRState ? window.SRState.getDecision(row.sku) : null;
    drawerApproveBtn.disabled = !!decision;
    drawerRejectBtn.disabled = !!decision;

    let banner = document.getElementById('drawerDecisionBanner');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'drawerDecisionBanner';
      banner.style.marginBottom = '12px';
      document.querySelector('.ai-drawer-actions').before(banner);
    }
    if (!decision) {
      banner.innerHTML = '';
      return;
    }
    const approved = decision.status === 'approved';
    banner.innerHTML = `<span class="decision-flag decision-flag-${decision.status}"><span class="material-symbols-outlined">${approved ? 'check_circle' : 'cancel'}</span>${approved ? 'Orden aprobada' : 'Orden rechazada'}</span>`;
  }

  function decideCurrentRow(status) {
    if (!currentDrawerRow || !window.SRState) return;
    window.SRState.setDecision(currentDrawerRow.sku, status);
    renderTable(window.replenishRows);
    applyFilters();
    updateDrawerDecisionUI(currentDrawerRow);
    updateApprovalFlow(currentDrawerRow);
    showToast(`Orden de ${currentDrawerRow.product} (${currentDrawerRow.store}) ${status === 'approved' ? 'aprobada' : 'rechazada'}`);
  }

  drawerApproveBtn.addEventListener('click', () => decideCurrentRow('approved'));
  drawerRejectBtn.addEventListener('click', () => decideCurrentRow('rejected'));

  function openDrawer(row) {
    currentDrawerRow = row;
    drawerTitle.textContent = `${row.product} · ${row.store}`;
    drawerReasons.innerHTML = '';
    drawerVariables.innerHTML = row.detail.variables.map((v) => `<span class="chip-tag">${v}</span>`).join('');
    confidenceValue.textContent = `${row.confidence}%`;
    if (drawerViewDetail) drawerViewDetail.href = `./sku-detail.html?sku=${encodeURIComponent(row.sku)}`;
    updateDrawerDecisionUI(row);
    updateApprovalFlow(row);

    const ctx = document.getElementById('confidenceChart').getContext('2d');
    if (confidenceChart) confidenceChart.destroy();
    confidenceChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [row.confidence, 100 - row.confidence],
          backgroundColor: ['#1A73E8', '#E8EAED'],
          borderWidth: 0,
        }],
      },
      options: {
        cutout: '78%',
        responsive: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
      },
    });

    drawer.classList.add('open');
    backdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');

    // Progressive explanation animation
    if (window.SRSim && window.SRSim.showDrawerProgressiveExplanation) {
      window.SRSim.showDrawerProgressiveExplanation(row.detail.reasons);
    } else {
      drawerReasons.innerHTML = row.detail.reasons.map((r) => `<li>${r}</li>`).join('');
    }
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
  }

  tbody.addEventListener('click', (e) => {
    const tr = e.target.closest('tr');
    if (!tr) return;
    const row = window.replenishRows[Number(tr.dataset.index)];
    document.querySelectorAll('#replenishTableBody tr').forEach((r) => r.classList.remove('row-selected'));
    tr.classList.add('row-selected');
    openDrawer(row);
  });

  document.getElementById('closeDrawerBtn').addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  // ---------------------------------------------------------------------
  // Panel 4 — Gráfico de tendencias (Views / Saves / Shares)
  // ---------------------------------------------------------------------
  const trendsCtx = document.getElementById('trendsChart').getContext('2d');
  let trendsChart = new Chart(trendsCtx, {
    type: 'line',
    data: {
      labels: window.trendsSeries.labels,
      datasets: [
        {
          label: 'Views',
          data: window.trendsSeries.views,
          borderColor: '#1A73E8',
          backgroundColor: 'rgba(26,115,232,0.08)',
          fill: true,
          tension: 0.35,
          pointRadius: 0,
          borderWidth: 2,
        },
        {
          label: 'Saves',
          data: window.trendsSeries.saves,
          borderColor: '#9334E6',
          backgroundColor: 'rgba(147,52,230,0.06)',
          fill: true,
          tension: 0.35,
          pointRadius: 0,
          borderWidth: 2,
        },
        {
          label: 'Shares',
          data: window.trendsSeries.shares,
          borderColor: '#1E8E3E',
          backgroundColor: 'rgba(30,142,62,0.06)',
          fill: true,
          tension: 0.35,
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
        x: { grid: { display: false }, title: { display: true, text: 'Días' } },
        y: { grid: { color: '#EEF1F6' }, beginAtZero: true },
      },
    },
  });

  // ---------------------------------------------------------------------
  // Panel 4 — Top tendencias
  // ---------------------------------------------------------------------
  const topTrendsList = document.getElementById('topTrendsList');
  function renderTopTrends() {
    const maxScore = Math.max(...window.topTrends.map((t) => t.score));
    topTrendsList.innerHTML = window.topTrends
      .map(
        (t) => `
        <li>
          <span class="trend-rank">${t.rank}</span>
          <span class="trend-name">${t.name}</span>
          <span class="trend-score-wrap">
            <span class="trend-score">+${t.score}%</span>
            <span class="trend-bar"><span style="width:${(t.score / maxScore) * 100}%"></span></span>
          </span>
        </li>`
      )
      .join('');
  }
  renderTopTrends();

  // Ensure trendsSeries has enough data points
  if (window.trendsSeries && window.trendsSeries.views.length < 30) {
    var filler = 30 - window.trendsSeries.views.length;
    for (var fi = 0; fi < filler; fi++) {
      window.trendsSeries.views.push(window.trendsSeries.views[window.trendsSeries.views.length-1] || 12000);
      window.trendsSeries.saves.push(window.trendsSeries.saves[window.trendsSeries.saves.length-1] || 2200);
      window.trendsSeries.shares.push(window.trendsSeries.shares[window.trendsSeries.shares.length-1] || 900);
    }
  }

  window.refreshTrends = function() {
    renderTopTrends();
    if (trendsChart) {
      // Ensure arrays are correct length (30 points)
      while (window.trendsSeries.views.length < 30) window.trendsSeries.views.unshift(12000);
      while (window.trendsSeries.views.length > 30) window.trendsSeries.views.shift();
      while (window.trendsSeries.saves.length < 30) window.trendsSeries.saves.unshift(2200);
      while (window.trendsSeries.saves.length > 30) window.trendsSeries.saves.shift();
      while (window.trendsSeries.shares.length < 30) window.trendsSeries.shares.unshift(900);
      while (window.trendsSeries.shares.length > 30) window.trendsSeries.shares.shift();

      trendsChart.data.datasets[0].data = window.trendsSeries.views;
      trendsChart.data.datasets[1].data = window.trendsSeries.saves;
      trendsChart.data.datasets[2].data = window.trendsSeries.shares;
      trendsChart.update('none');
    }
  };

})();
