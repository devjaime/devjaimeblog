(function () {
  'use strict';

  const categorySelect = document.getElementById('forecastCategorySelect');
  const zoneSelect = document.getElementById('forecastZoneSelect');
  const generateBtn = document.getElementById('generateForecastBtn');
  const generateLabel = document.getElementById('generateForecastLabel');
  const sendBtn = document.getElementById('sendToComprasBtn');
  const tbody = document.getElementById('forecastTableBody');
  const actionText = document.getElementById('forecastActionText');
  const container = document.getElementById('forecastReportContainer');

  if (!tbody || !window.forecastRows) return;

  const CONFIDENCE_META = {
    alta: { cls: 'badge-success', icon: 'check_circle', label: 'ALTA' },
    media: { cls: 'badge-warning', icon: 'warning', label: 'MEDIA' },
    baja: { cls: 'badge-danger', icon: 'flag', label: 'BAJA CONFIANZA' },
  };

  function confidenceBadge(level) {
    const c = CONFIDENCE_META[level] || CONFIDENCE_META.media;
    return `<span class="badge ${c.cls}"><span class="material-symbols-outlined">${c.icon}</span>${c.label}</span>`;
  }

  function currentFilters() {
    return {
      category: categorySelect ? categorySelect.value : 'todas',
      zone: zoneSelect ? zoneSelect.value : 'todas',
    };
  }

  function filteredRows() {
    const { category, zone } = currentFilters();
    return window.forecastRows.filter((row) => {
      const matchesCategory = category === 'todas' || row.category === category;
      const matchesZone = zone === 'todas' || row.zone === zone;
      return matchesCategory && matchesZone;
    });
  }

  function renderTable(rows) {
    if (rows.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--text-secondary);padding:24px;">Sin datos para esta combinaci\u00f3n de categor\u00eda y zona en las tablas conectadas.</td></tr>';
      return;
    }
    tbody.innerHTML = rows
      .map((row) => {
        const n = row.weeks.length;
        return row.weeks
          .map(
            (w, i) => `
        <tr>
          ${i === 0 ? `<td class="mono" rowspan="${n}">${row.storeId}|${row.itemId}</td>` : ''}
          ${i === 0 ? `<td rowspan="${n}">${row.product}<br><small>${row.department}</small></td>` : ''}
          ${i === 0 ? `<td rowspan="${n}"><span class="zone-pill zone-${row.zone.toLowerCase()}">${row.zone}</span><br><small>${row.store}</small></td>` : ''}
          <td>Semana ${w.week}</td>
          <td class="mono">${w.lo} &ndash; ${w.hi} <small>(&asymp;${w.proy})</small></td>
          ${i === 0 ? `<td class="mono" rowspan="${n}"><strong>${row.depth4w} u.</strong></td>` : ''}
          ${i === 0 ? `<td rowspan="${n}">${confidenceBadge(row.confidence)}</td>` : ''}
        </tr>`
          )
          .join('');
      })
      .join('');
  }

  function updateNarrative(rows) {
    const { category, zone } = currentFilters();
    const zoneLabel = zone === 'todas' ? 'todas las zonas' : 'zona ' + zone;

    if (!actionText) return;

    if (rows.length === 0) {
      actionText.textContent = 'Sin insumo que proponer para esta combinaci\u00f3n \u2014 ajusta la categor\u00eda o la zona.';
      return;
    }

    const highConfidence = rows.filter(function (r) { return r.confidence === 'alta'; });
    const lowConfidence = rows.filter(function (r) { return r.confidence === 'baja'; });

    if (highConfidence.length > 0) {
      var top = highConfidence[0];
      actionText.textContent = 'Se sugiere priorizar la distribuci\u00f3n inicial asignando ' + top.depth4w + ' unidades al SKU ' + top.itemId + ' en la tienda ' + top.storeId + ' para cubrir la curva de demanda proyectada de ' + top.weeks.reduce(function (s, w) { return s + w.proy; }, 0) + ' unidades con colch\u00f3n de seguridad.';
    } else {
      actionText.textContent = 'Revisar los SKU disponibles antes de fijar la distribuci\u00f3n inicial.';
    }

    if (lowConfidence.length > 0) {
      lowConfidence.forEach(function (r) {
        var totalProy = r.weeks.reduce(function (s, w) { return s + w.proy; }, 0);
        var lo = r.weeks[0].lo;
        var hi = r.weeks[r.weeks.length - 1].hi;
        actionText.textContent += ' Para el \u00edtem ' + r.itemId + ' (' + r.storeId + '), catalogado como BAJA CONFIANZA por alta variabilidad en el intervalo [' + lo + '\u2013' + hi + '], se aconseja una revisi\u00f3n humana por el Planner antes del cargado final de asignaci\u00f3n.';
      });
    }
  }

  function generateFullHtmlReport(rows) {
    if (rows.length === 0) return '';
    var category = currentFilters().category;
    var zoneLabel = currentFilters().zone === 'todas' ? 'Todas las zonas' : currentFilters().zone;

    var tableRows = rows.map(function (row) {
      var totalProy = row.weeks.reduce(function (s, w) { return s + w.proy; }, 0);
      var lo = row.weeks[0].lo;
      var hi = row.weeks[row.weeks.length - 1].hi;
      var confLabel = CONFIDENCE_META[row.confidence].label;
      var confColor = row.confidence === 'alta' ? '#28a745' : row.confidence === 'media' ? '#ffc107' : '#dc3545';
      var storeZone = row.zone + ' / ' + row.store;
      var weekRange = 'W1 - W4';
      return {
        skuLocal: row.storeId + ' | ' + row.itemId,
        desc: row.product,
        zone: row.zone + ' (' + zoneLabel + ')',
        week: weekRange,
        venta: totalProy + ' u. [' + lo + ' \u2013 ' + hi + ']',
        depth: row.depth4w + ' u.',
        conf: confLabel,
        confColor: confColor,
      };
    });

    var rowsHtml = tableRows.map(function (r, idx) {
      var bg = idx % 2 === 0 ? 'background:#ffffff;' : 'background:#f5f5f5;';
      return '<tr style="' + bg + '"><td style="padding:8px;border:1px solid #ddd;font-family:sans-serif;font-size:13px;">' + r.skuLocal + '</td><td style="padding:8px;border:1px solid #ddd;font-family:sans-serif;font-size:13px;">' + r.desc + '</td><td style="padding:8px;border:1px solid #ddd;font-family:sans-serif;font-size:13px;">' + r.zone + '</td><td style="padding:8px;border:1px solid #ddd;font-family:sans-serif;font-size:13px;">' + r.week + '</td><td style="padding:8px;border:1px solid #ddd;font-family:sans-serif;font-size:13px;">' + r.venta + '</td><td style="padding:8px;border:1px solid #ddd;font-family:sans-serif;font-size:13px;">' + r.depth + '</td><td style="padding:8px;border:1px solid #ddd;font-family:sans-serif;font-size:13px;"><span style="display:inline-block;padding:3px 10px;border-radius:999px;color:#fff;font-weight:700;font-size:12px;background:' + r.confColor + ';">' + r.conf + '</span></td></tr>';
    }).join('\n');

    return '<table style="width:100%;border-collapse:collapse;margin:16px 0;">' +
      '<thead><tr style="background:#003b70;color:#fff;">' +
      '<th style="padding:8px;border:1px solid #ddd;font-family:sans-serif;font-size:13px;font-weight:700;text-align:left;">SKU-Local (store|item)</th>' +
      '<th style="padding:8px;border:1px solid #ddd;font-family:sans-serif;font-size:13px;font-weight:700;text-align:left;">Descripci\u00f3n</th>' +
      '<th style="padding:8px;border:1px solid #ddd;font-family:sans-serif;font-size:13px;font-weight:700;text-align:left;">Zona (store/state)</th>' +
      '<th style="padding:8px;border:1px solid #ddd;font-family:sans-serif;font-size:13px;font-weight:700;text-align:left;">Semana</th>' +
      '<th style="padding:8px;border:1px solid #ddd;font-family:sans-serif;font-size:13px;font-weight:700;text-align:left;">Venta proy [lo\u2013hi]</th>' +
      '<th style="padding:8px;border:1px solid #ddd;font-family:sans-serif;font-size:13px;font-weight:700;text-align:left;">Profundidad 4s</th>' +
      '<th style="padding:8px;border:1px solid #ddd;font-family:sans-serif;font-size:13px;font-weight:700;text-align:left;">Confianza</th>' +
      '</tr></thead><tbody>\n' + rowsHtml + '\n</tbody></table>';
  }

  function showHtmlReport(rows) {
    if (rows.length === 0 || !container) return;
    var html = generateFullHtmlReport(rows);
    var wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    var existing = container.querySelector('.forecast-html-report');
    if (existing) existing.remove();
    var reportDiv = document.createElement('div');
    reportDiv.className = 'forecast-html-report';
    reportDiv.innerHTML = html;
    container.appendChild(reportDiv);
  }

  function runForecast() {
    var rows = filteredRows();
    renderTable(rows);
    updateNarrative(rows);
    showHtmlReport(rows);
  }

  function showEmptyState() {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--text-tertiary);padding:32px;"><span class="material-symbols-outlined" style="font-size:32px;display:block;margin-bottom:8px;">query_stats</span>Haz clic en <strong>Generar</strong> para ejecutar el forecast SKU-Local<br><small style="color:var(--text-tertiary);">Los datos se cargar\u00e1n desde allocation_input y sku_local_forecast_4w</small></td></tr>';
    if (actionText) actionText.textContent = '\u2014';
    var existing = container ? container.querySelector('.forecast-html-report') : null;
    if (existing) existing.remove();
  }

  if (generateBtn) {
    generateBtn.addEventListener('click', function () {
      generateBtn.disabled = true;
      if (generateLabel) generateLabel.textContent = ' Generando\u2026';
      window.setTimeout(function () {
        runForecast();
        generateBtn.disabled = false;
        if (generateLabel) generateLabel.textContent = ' Generar Forecast';
      }, 1200);
    });
  }

  if (sendBtn) {
    sendBtn.addEventListener('click', function () {
      var rows = filteredRows();
      var category = currentFilters().category;
      var toast = document.getElementById('toast');
      var toastMessage = document.getElementById('toastMessage');
      if (toast) {
        if (toastMessage) toastMessage.textContent = 'Insumo de ' + category + ' enviado a Compras/Planning (Ebook) \u2014 ' + rows.length + ' SKU-Local';
        toast.classList.add('show');
        window.setTimeout(function () { toast.classList.remove('show'); }, 3000);
      }
    });
  }

  showEmptyState();

  window.runForecast = runForecast;
})();
