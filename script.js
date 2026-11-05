document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
document.querySelectorAll('[data-print]').forEach((button) => button.addEventListener('click', () => window.print()));
