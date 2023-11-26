const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.querySelector('nav');

openMenu.addEventListener('click', () => {
  menu.style.display = 'flex';

  // Adiciona um pequeno atraso antes de definir a opacidade para garantir que a transição de fade-in seja visível
  setTimeout(() => {
    menu.style.opacity = '1';
    
    openMenu.style.display = 'none';

    menu.style.transform = 'translateX(0)'; // Adiciona transição da direita para a esquerda
  }, 10);
});

closeMenu.addEventListener('click', () => {
  menu.style.opacity = '0';

  openMenu.removeAttribute('style');

  menu.style.transform = 'translateX(100%)'; // Move o menu para a direita para ocultá-lo

  // Adiciona um pequeno atraso antes de remover o estilo para garantir que a transição de fade-out seja visível
  setTimeout(() => {
    menu.removeAttribute('style');
  }, 200);
});



// Banener Rotativo

let currentIndex = 0;
const banner = document.querySelector('.banner');
const bannerItems = document.querySelectorAll('.banner-item');
const bannerIndicators = document.querySelectorAll('.banner-indicator');

function nextSlide() {
    currentIndex = (currentIndex + 1) % bannerItems.length;
    updateBanner();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + bannerItems.length) % bannerItems.length;
    updateBanner();
}

function updateBanner() {
    banner.style.transform = `translateX(-${currentIndex * 100}%)`;
    bannerIndicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

bannerIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateBanner();
    });
});

setInterval(nextSlide, 5000);


function filterElements(category) {
  const elements = document.querySelectorAll('.box');

  elements.forEach((element) => {
    element.classList.remove("show");
    if (category === "Todos" || element.classList.contains(category)) {
      element.classList.add("show");
    }
  });
}