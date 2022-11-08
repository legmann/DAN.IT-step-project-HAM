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

  const imageGallery = document.querySelector('.amazing-work  .image-gallery');
  const imageGalleryItems = [
    {
      'data-name': 'graphic-design',
      'item-img': 'graphic-design/image_04.jpg',
      'title-alt': 'Cookbook',
      category: 'Graphic Design'
    },

    {
      'data-name': 'graphic-design',
      'item-img': 'graphic-design/image_05.jpg',
      'title-alt': 'Coffee Cup',
      category: 'Graphic Design'
    },

    {
      'data-name': 'graphic-design',
      'item-img': 'graphic-design/image_06.jpg',
      'title-alt': 'DVD design',
      category: 'Graphic Design'
    },

    {
      'data-name': 'web-design',
      'item-img': 'web-design/image_04.jpg',
      'title-alt': 'Ideas in Shape',
      category: 'Web Design'
    },

    {
      'data-name': 'web-design',
      'item-img': 'web-design/image_05.jpg',
      'title-alt': 'Color Matters',
      category: 'Web Design'
    },

    {
      'data-name': 'web-design',
      'item-img': 'web-design/image_06.jpg',
      'title-alt': 'Ideas to Life',
      category: 'Web Design'
    },

    {
      'data-name': 'landing-pages',
      'item-img': 'landing-pages/image_04.jpg',
      'title-alt': 'Author',
      category: 'Landing Pages'
    },

    {
      'data-name': 'landing-pages',
      'item-img': 'landing-pages/image_05.jpg',
      'title-alt': 'Educature',
      category: 'Landing Pages'
    },

    {
      'data-name': 'landing-pages',
      'item-img': 'landing-pages/image_06.jpg',
      'title-alt': 'Virtual Assistant',
      category: 'Landing Pages'
    },

    {
      'data-name': 'wordpress',
      'item-img': 'wordpress/image_04.jpg',
      'title-alt': 'Jardinier',
      category: 'Wordpress'
    },

    {
      'data-name': 'wordpress',
      'item-img': 'wordpress/image_05.jpg',
      'title-alt': 'Medic Theme',
      category: 'Wordpress'
    },

    {
      'data-name': 'wordpress',
      'item-img': 'wordpress/image_06.jpg',
      'title-alt': 'Webona',
      category: 'Wordpress'
    }

  ];


  setTimeout(() => {

    for (let i = 0; i < 12; i++) {

      imageGallery.insertAdjacentHTML("beforeEnd", `<div class="gallery-item" data-name="${imageGalleryItems[i]['data-name']}">
      <img class="item-img" src="./img/amazing-work/${imageGalleryItems[i]['item-img']}" alt="${imageGalleryItems[i]['title-alt']}">
      <div class="item-content">
        <div class="link-img-box">
          <a class="item-link" href="">
            <div class="link-image">
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1"
                preserveAspectRatio="xMinYMin">
                <use xlink:href="#img-shape-link-1"></use>
              </svg>
            </div>
          </a>
          <a class="item-link" href="">
            <div class="link-image">
              <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" version="1.1"
                preserveAspectRatio="xMinYMin">
                <use xlink:href="#img-link-2"></use>
              </svg>
            </div>
          </a>
        </div>
        <span class="title">${imageGalleryItems[i]['title-alt']}</span>
        <span class="category">${imageGalleryItems[i]['category']}</span>
      </div>
    </div>`);

    }

    loader.style.display = 'none';
    loadMoreButton.style.display = 'none';

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