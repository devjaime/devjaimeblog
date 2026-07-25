/**
 * Smart Replenishment Agent — Login (mockup, sin backend real)
 */
(function () {
  'use strict';

  const form = document.getElementById('loginForm');
  const submitBtn = document.getElementById('loginSubmit');
  const submitLabel = document.getElementById('loginSubmitLabel');
  const togglePasswordBtn = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('loginPassword');
  const emailInput = document.getElementById('loginEmail');
  const rememberMeInput = document.getElementById('rememberMe');
  const ssoButton = document.getElementById('ssoButton');
  const forgotPasswordLink = document.getElementById('forgotPasswordLink');

  const REMEMBERED_EMAIL_KEY = 'srAgentRememberedEmail';

  // Precarga el correo si quedó "recordado" de un ingreso anterior
  try {
    const rememberedEmail = window.localStorage.getItem(REMEMBERED_EMAIL_KEY);
    if (rememberedEmail && emailInput) emailInput.value = rememberedEmail;
  } catch (e) { /* localStorage no disponible (modo privado, etc.) */ }

  togglePasswordBtn.addEventListener('click', () => {
    const showing = passwordInput.type === 'text';
    passwordInput.type = showing ? 'password' : 'text';
    togglePasswordBtn.querySelector('.material-symbols-outlined').textContent = showing ? 'visibility' : 'visibility_off';
    togglePasswordBtn.setAttribute('aria-label', showing ? 'Mostrar contraseña' : 'Ocultar contraseña');
  });

  function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 3000);
  }

  function goToDashboard(button) {
    try {
      if (rememberMeInput && rememberMeInput.checked && emailInput && emailInput.value) {
        window.localStorage.setItem(REMEMBERED_EMAIL_KEY, emailInput.value);
      } else {
        window.localStorage.removeItem(REMEMBERED_EMAIL_KEY);
      }
    } catch (e) { /* localStorage no disponible */ }

    button.disabled = true;
    submitLabel.textContent = 'Ingresando…';
    window.setTimeout(() => { window.location.href = './index.html'; }, 500);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    goToDashboard(submitBtn);
  });

  ssoButton.addEventListener('click', () => goToDashboard(ssoButton));

  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', (e) => {
      e.preventDefault();
      const email = emailInput && emailInput.value ? emailInput.value : 'tu correo';
      showToast(`Se envió un enlace de recuperación a ${email}`);
    });
  }
})();
