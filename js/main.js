// ===== Ano automático no rodapé =====
document.getElementById('ano').textContent = new Date().getFullYear();

// ===== Menu mobile (hambúrguer) =====
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});

// Fecha o menu ao clicar em um link (no mobile)
mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Contador de seguidores da Twitch (atualiza sozinho) =====
// Usa o DecAPI (gratuito, sem token). Atualiza a cada visita/refresh.
const twEl = document.getElementById('twitchFollowers');
if (twEl) {
  const canal = twEl.dataset.channel;
  fetch(`https://decapi.me/twitch/followcount/${canal}`)
    .then((r) => r.text())
    .then((txt) => {
      const n = parseInt(String(txt).replace(/\D/g, ''), 10);
      twEl.textContent = Number.isFinite(n) ? n.toLocaleString('pt-BR') : '—';
    })
    .catch(() => { twEl.textContent = '—'; });
}

// ===== Seguidores do Instagram (número manual) =====
// O Instagram não permite leitura automática gratuita; edite data-count no HTML.
const igEl = document.getElementById('igFollowers');
if (igEl) {
  const n = parseInt(igEl.dataset.count || '0', 10);
  igEl.textContent = Number.isFinite(n) ? n.toLocaleString('pt-BR') : '0';
}
