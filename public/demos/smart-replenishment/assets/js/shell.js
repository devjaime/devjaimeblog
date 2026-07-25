/**
 * Smart Replenishment Agent — Shell compartido
 * Lógica común a todas las páginas: sidebar (colapso + navegación activa)
 * y menú desplegable del usuario. Se carga en index.html, sku-detail.html
 * y configuracion.html.
 */
(function () {
  'use strict';

  // ---------------------------------------------------------------------
  // Sidebar — navegación activa (solo para anclas dentro de la misma página)
  // ---------------------------------------------------------------------
  document.querySelectorAll('.side-nav-item[data-nav]').forEach((link) => {
    link.addEventListener('click', () => {
      if (link.getAttribute('href').startsWith('#')) {
        document.querySelectorAll('.side-nav-item').forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });

  // ---------------------------------------------------------------------
  // Sidebar — colapso a modo icon-only
  // ---------------------------------------------------------------------
  const menuToggle = document.getElementById('menuToggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      document.getElementById('appShell').classList.toggle('sidebar-collapsed');
    });
  }

  // ---------------------------------------------------------------------
  // Topbar — menú desplegable del usuario
  // ---------------------------------------------------------------------
  const userChip = document.getElementById('userChip');
  const userDropdown = document.getElementById('userDropdown');

  if (userChip && userDropdown) {
    const closeDropdown = () => {
      userDropdown.classList.remove('open');
      userChip.setAttribute('aria-expanded', 'false');
    };

    userChip.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = userDropdown.classList.toggle('open');
      userChip.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (e) => {
      if (!userDropdown.contains(e.target) && e.target !== userChip) closeDropdown();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDropdown();
    });
  }

  // ---------------------------------------------------------------------
  // Topbar — dropdown de notificaciones
  // ---------------------------------------------------------------------
  const notifBtn = document.getElementById('notifBtn');
  const notifDropdown = document.getElementById('notifDropdown');
  const notifDot = document.getElementById('notifDot');

  if (notifBtn && notifDropdown) {
    const closeNotif = () => {
      notifDropdown.classList.remove('open');
      notifBtn.setAttribute('aria-expanded', 'false');
    };

    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = notifDropdown.classList.toggle('open');
      notifBtn.setAttribute('aria-expanded', String(isOpen));
      if (isOpen && notifDot) notifDot.style.display = 'none';
    });

    document.addEventListener('click', (e) => {
      if (!notifDropdown.contains(e.target) && e.target !== notifBtn) closeNotif();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeNotif();
    });
  }
})();
