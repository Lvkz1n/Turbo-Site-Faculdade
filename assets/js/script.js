function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
  }
}



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

// Filtro

function filterElements(category) {
  const elements = document.querySelectorAll('.box');

  elements.forEach((element) => {
    element.classList.add("hidden");
    if (category === "Todos" || element.classList.contains(category)) {
      element.classList.remove("hidden");
    }
  });
}

function alternarVisibilidade(category) {
  var objeto = document.getElementById('dropdown-menu');
  if (objeto.style.display === 'none') {
    objeto.style.display = 'block';
  } else {
    objeto.style.display = 'none';
  }
}



// login 

const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return ;
    }
    
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');

    form.classList.remove('dark');
});

