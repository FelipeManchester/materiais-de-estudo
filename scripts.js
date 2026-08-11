// Compartilhado por toda a trilha. Ver CLAUDE.md.

document.addEventListener('DOMContentLoaded', () => {
  const botaoOcultar = document.querySelector('.toc-hide-btn');
  const botaoReabrir = document.getElementById('toc-show-btn');

  if (botaoOcultar) {
    botaoOcultar.addEventListener('click', () => {
      document.body.classList.add('toc-hidden');
    });
  }

  if (botaoReabrir) {
    botaoReabrir.addEventListener('click', () => {
      document.body.classList.remove('toc-hidden');
    });
  }
});
