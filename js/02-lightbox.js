import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const containerPic = document.querySelector('.gallery');
containerPic.addEventListener('click', openModalHandler);

const createElements = galleryItems
  .map((item) => {
    return `
<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" 
  />
</a>`;
  })
  .join('');

containerPic.insertAdjacentHTML('beforeend', createElements);

function openModalHandler(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
}

let gallery = new SimpleLightbox('.gallery a', {
    // sourceAttr,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250, 
});
gallery.on('show.simplelightbox', function () {});

    
// });

// const lightbox = new SimpleLightbox();
// console.log(lightbox)
