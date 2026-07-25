/**
 * Smart Replenishment Agent — Estado compartido (localStorage)
 * Simula la persistencia de un backend real para: (1) decisiones de
 * aprobar/rechazar por SKU y (2) configuración de la plataforma. Se carga
 * ANTES de shell.js / app.js / configuracion.js / sku-detail.js en todas
 * las páginas del app-shell, para que las tres páginas compartan el mismo
 * estado y sobreviva a recargas y navegación.
 */
(function () {
  'use strict';

  const DECISIONS_KEY = 'srAgentDecisions';
  const SETTINGS_KEY = 'srAgentSettings';

  const DEFAULT_SETTINGS = {
    orgName: 'Retail AI Lab',
    defaultRegion: 'Región Metropolitana',
    language: 'Español (Chile)',
    timezone: 'América/Santiago (GMT-4)',
    darkMode: false,
    confidenceThreshold: 85,
    pipelineFrequency: 'Cada 15 minutos',
    approvalMode: 'Requiere aprobación manual siempre',
    sources: { sap: true, wms: true, pos: true, tiktok: true },
    notifications: { riskEmail: true, weeklyEmail: true, push: false, slack: true },
    notificationEmail: 'demo@example.com',
    slackConnected: true,
  };

  function readJSON(key, fallback) {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function writeJSON(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* localStorage no disponible (modo privado, cuota, etc.) — se ignora */
    }
  }

  // -------------------------------------------------------------------
  // Configuración de la plataforma
  // -------------------------------------------------------------------
  function getSettings() {
    const saved = readJSON(SETTINGS_KEY, {});
    return Object.assign({}, DEFAULT_SETTINGS, saved, {
      sources: Object.assign({}, DEFAULT_SETTINGS.sources, saved.sources),
      notifications: Object.assign({}, DEFAULT_SETTINGS.notifications, saved.notifications),
    });
  }

  function saveSettings(partial) {
    const merged = Object.assign({}, getSettings(), partial);
    writeJSON(SETTINGS_KEY, merged);
    return merged;
  }

  function applyDarkModeClass(settings) {
    const s = settings || getSettings();
    document.documentElement.classList.toggle('dark-theme', !!s.darkMode);
  }

  // -------------------------------------------------------------------
  // Decisiones de aprobar / rechazar, por SKU
  // -------------------------------------------------------------------
  function getAllDecisions() {
    return readJSON(DECISIONS_KEY, {});
  }

  function getDecision(sku) {
    return getAllDecisions()[sku] || null;
  }

  function setDecision(sku, status, extra) {
    const all = getAllDecisions();
    all[sku] = Object.assign({ status, at: new Date().toISOString() }, extra);
    writeJSON(DECISIONS_KEY, all);
    return all[sku];
  }

  window.SRState = {
    DEFAULT_SETTINGS,
    getSettings,
    saveSettings,
    applyDarkModeClass,
    getAllDecisions,
    getDecision,
    setDecision,
  };
})();
