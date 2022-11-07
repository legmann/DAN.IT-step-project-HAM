"use strict"

// Services section

const servicesTabsMenu = document.querySelector('.services-section .menu-list');

servicesTabsMenu.addEventListener('click', (event) => {
  document.querySelector('.services-section .menu-item-active').classList.remove('menu-item-active');
  event.target.classList.add('menu-item-active');

  const dataNameAtr = event.target.dataset.name;

  document.querySelector('.services-section .active-content').classList.remove('active-content');
  document.querySelector(`.services-section .section-tab[data-name='${dataNameAtr}']`).classList.add('active-content');
});



// Amazing work section

const amazingWorkTabsMenu = document.querySelector('.amazing-work .menu-list');
amazingWorkTabsMenu.addEventListener('click', (event) => {
  document.querySelector('.amazing-work .menu-item-active').classList.remove('menu-item-active');
  event.target.classList.add('menu-item-active');

  const dataNameAtr = event.target.dataset.name;
  const allGalleryItems = document.querySelectorAll('.amazing-work .gallery-item');

  if (!dataNameAtr) {
    allGalleryItems.forEach(elem => {
      if (elem.classList.contains('filtered')) {
        elem.classList.remove('filtered');
      }
    });

  } else {
    allGalleryItems.forEach(elem => {
      if (elem.dataset.name === dataNameAtr) {
        elem.classList.remove('filtered');
      } else {
        elem.classList.add('filtered');
      }
    });
  }
});

const sectionContent = document.querySelector('.amazing-work .section-content');

const loader = document.createElement('div');
loader.classList.add('loader');
loader.setAttribute('id', 'loader');

const loadMoreButton = document.createElement('button');
loadMoreButton.classList.add('g-gallery-button', 'content-gallery-button');
loadMoreButton.setAttribute('id', 'load-more-btn');
loadMoreButton.setAttribute('type', 'button');

const buttonText = document.createElement('span');
buttonText.classList.add('g-button-text');
buttonText.textContent = 'Load More';

loadMoreButton.insertAdjacentElement("beforeEnd", buttonText);

sectionContent.insertAdjacentElement("beforeEnd", loader);
sectionContent.insertAdjacentElement("beforeEnd", loadMoreButton);


loadMoreButton.addEventListener('click', () => {
  loader.style.display = 'block';

  const hiddenGalleryItems = document.querySelectorAll('.amazing-work .gallery-item.hidden');

  setTimeout(() => {

    for (let i = 0; i < 12; i++) {
      hiddenGalleryItems[i].classList.remove('hidden');
    }
    loader.style.display = 'none';
    if (hiddenGalleryItems.length === 12) {
      loadMoreButton.style.display = 'none';
    }
  }, 2000);
});



// What people say section

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
let swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});