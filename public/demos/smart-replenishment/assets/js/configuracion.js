/**
 * Smart Replenishment Agent — Configuración
 * Cambio de sección (tabs verticales), carga/guardado de todos los campos
 * en localStorage (vía SRState) y toast de guardado.
 */
(function () {
  'use strict';

  // ---------------------------------------------------------------------
  // Navegación entre secciones
  // ---------------------------------------------------------------------
  const navItems = document.querySelectorAll('.settings-nav-item[data-section]');
  const panels = document.querySelectorAll('.settings-panel[data-panel]');

  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      const target = item.dataset.section;
      navItems.forEach((n) => n.classList.remove('active'));
      item.classList.add('active');
      panels.forEach((p) => p.classList.toggle('active', p.dataset.panel === target));
    });
  });

  // ---------------------------------------------------------------------
  // Toast de confirmación (reutilizado por guardar / conectar / invitar)
  // ---------------------------------------------------------------------
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimer = null;

  function showToast(message) {
    if (toastMessage && message) toastMessage.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2500);
  }

  if (!window.SRState) return;

  const settings = window.SRState.getSettings();

  const fields = {
    orgName: document.getElementById('settingOrgName'),
    defaultRegion: document.getElementById('settingDefaultRegion'),
    language: document.getElementById('settingLanguage'),
    timezone: document.getElementById('settingTimezone'),
    darkMode: document.getElementById('settingDarkMode'),
    confidenceThreshold: document.getElementById('confidenceThreshold'),
    pipelineFrequency: document.getElementById('settingPipelineFrequency'),
    approvalMode: document.getElementById('settingApprovalMode'),
    sourceSap: document.getElementById('settingSourceSap'),
    sourceWms: document.getElementById('settingSourceWms'),
    sourcePos: document.getElementById('settingSourcePos'),
    sourceTiktok: document.getElementById('settingSourceTiktok'),
    notifRisk: document.getElementById('settingNotifRisk'),
    notifWeekly: document.getElementById('settingNotifWeekly'),
    notifPush: document.getElementById('settingNotifPush'),
    notifSlack: document.getElementById('settingNotifSlack'),
    notifEmail: document.getElementById('settingNotifEmail'),
  };

  // ---------------------------------------------------------------------
  // Cargar valores guardados (o por defecto) en todos los campos
  // ---------------------------------------------------------------------
  if (fields.orgName) fields.orgName.value = settings.orgName;
  if (fields.defaultRegion) fields.defaultRegion.value = settings.defaultRegion;
  if (fields.language) fields.language.value = settings.language;
  if (fields.timezone) fields.timezone.value = settings.timezone;
  if (fields.darkMode) fields.darkMode.checked = !!settings.darkMode;
  if (fields.confidenceThreshold) fields.confidenceThreshold.value = settings.confidenceThreshold;
  if (fields.pipelineFrequency) fields.pipelineFrequency.value = settings.pipelineFrequency;
  if (fields.approvalMode) fields.approvalMode.value = settings.approvalMode;
  if (fields.sourceSap) fields.sourceSap.checked = !!settings.sources.sap;
  if (fields.sourceWms) fields.sourceWms.checked = !!settings.sources.wms;
  if (fields.sourcePos) fields.sourcePos.checked = !!settings.sources.pos;
  if (fields.sourceTiktok) fields.sourceTiktok.checked = !!settings.sources.tiktok;
  if (fields.notifRisk) fields.notifRisk.checked = !!settings.notifications.riskEmail;
  if (fields.notifWeekly) fields.notifWeekly.checked = !!settings.notifications.weeklyEmail;
  if (fields.notifPush) fields.notifPush.checked = !!settings.notifications.push;
  if (fields.notifSlack) fields.notifSlack.checked = !!settings.notifications.slack;
  if (fields.notifEmail) fields.notifEmail.value = settings.notificationEmail;

  // ---------------------------------------------------------------------
  // Slider — umbral mínimo de confianza
  // ---------------------------------------------------------------------
  const thresholdValue = document.getElementById('confidenceThresholdValue');
  if (fields.confidenceThreshold && thresholdValue) {
    thresholdValue.textContent = `${fields.confidenceThreshold.value}%`;
    fields.confidenceThreshold.addEventListener('input', () => {
      thresholdValue.textContent = `${fields.confidenceThreshold.value}%`;
    });
  }

  // ---------------------------------------------------------------------
  // Modo oscuro — vista previa inmediata al activar el switch
  // ---------------------------------------------------------------------
  if (fields.darkMode) {
    fields.darkMode.addEventListener('change', () => {
      document.documentElement.classList.toggle('dark-theme', fields.darkMode.checked);
    });
  }

  // ---------------------------------------------------------------------
  // Guardar cambios — persiste todos los campos y muestra un toast
  // ---------------------------------------------------------------------
  const saveBtn = document.getElementById('saveSettingsBtn');
  saveBtn.addEventListener('click', () => {
    window.SRState.saveSettings({
      orgName: fields.orgName ? fields.orgName.value : settings.orgName,
      defaultRegion: fields.defaultRegion ? fields.defaultRegion.value : settings.defaultRegion,
      language: fields.language ? fields.language.value : settings.language,
      timezone: fields.timezone ? fields.timezone.value : settings.timezone,
      darkMode: fields.darkMode ? fields.darkMode.checked : settings.darkMode,
      confidenceThreshold: fields.confidenceThreshold ? Number(fields.confidenceThreshold.value) : settings.confidenceThreshold,
      pipelineFrequency: fields.pipelineFrequency ? fields.pipelineFrequency.value : settings.pipelineFrequency,
      approvalMode: fields.approvalMode ? fields.approvalMode.value : settings.approvalMode,
      sources: {
        sap: fields.sourceSap ? fields.sourceSap.checked : settings.sources.sap,
        wms: fields.sourceWms ? fields.sourceWms.checked : settings.sources.wms,
        pos: fields.sourcePos ? fields.sourcePos.checked : settings.sources.pos,
        tiktok: fields.sourceTiktok ? fields.sourceTiktok.checked : settings.sources.tiktok,
      },
      notifications: {
        riskEmail: fields.notifRisk ? fields.notifRisk.checked : settings.notifications.riskEmail,
        weeklyEmail: fields.notifWeekly ? fields.notifWeekly.checked : settings.notifications.weeklyEmail,
        push: fields.notifPush ? fields.notifPush.checked : settings.notifications.push,
        slack: fields.notifSlack ? fields.notifSlack.checked : settings.notifications.slack,
      },
      notificationEmail: fields.notifEmail ? fields.notifEmail.value : settings.notificationEmail,
    });
    window.SRState.applyDarkModeClass();
    showToast('Cambios guardados correctamente');
  });

  // ---------------------------------------------------------------------
  // Integraciones — conectar Slack (mockup)
  // ---------------------------------------------------------------------
  const slackConnectBtn = document.getElementById('slackConnectBtn');
  if (slackConnectBtn) {
    slackConnectBtn.addEventListener('click', () => {
      const slackStatus = document.getElementById('slackStatus');
      if (slackStatus) slackStatus.innerHTML = '<span class="status-dot"></span>Conectado';
      slackConnectBtn.textContent = 'Configurar';
      slackConnectBtn.classList.remove('btn-primary');
      slackConnectBtn.classList.add('btn-outline');
      window.SRState.saveSettings({ slackConnected: true });
      showToast('Slack conectado correctamente');
    });
  }

  // ---------------------------------------------------------------------
  // Usuarios y permisos — invitar usuario (mockup)
  // ---------------------------------------------------------------------
  const inviteUserBtn = document.getElementById('inviteUserBtn');
  if (inviteUserBtn) {
    inviteUserBtn.addEventListener('click', () => showToast('Invitación enviada correctamente'));
  }
})();
