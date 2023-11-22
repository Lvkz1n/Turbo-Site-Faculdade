const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.querySelector('nav');

openMenu.addEventListener('click', () => {
  menu.style.display = 'flex';

  // Adiciona um pequeno atraso antes de definir a opacidade para garantir que a transição de fade-in seja visível
  setTimeout(() => {
    menu.style.opacity = '1';
    menu.style.transform = 'translateX(0)'; // Adiciona transição da direita para a esquerda
  }, 10);
});

closeMenu.addEventListener('click', () => {
  menu.style.opacity = '0';
  menu.style.transform = 'translateX(100%)'; // Move o menu para a direita para ocultá-lo

  // Adiciona um pequeno atraso antes de remover o estilo para garantir que a transição de fade-out seja visível
  setTimeout(() => {
    menu.removeAttribute('style');
  }, 200);
});
