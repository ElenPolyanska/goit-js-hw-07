import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click', openModalHandler);


const markup = galleryItems
    .map(({ preview, original, description }) =>
        `<div class="gallery__item">
            <a  class="gallery__link"
                href="${original}">
                <img class="gallery__image"
                     src="${preview}"
                     data-source="${original}"
                     alt="${description}"/>
            </a>
        </div>`
    ).join('');
        
galleryEl.insertAdjacentHTML('beforeend', markup);


function openModalHandler(event) { 
    event.preventDefault();
    if (event.target.nodeName !== "IMG") { 
        return;
    }

    const instance = basicLightbox.create(`
    <div class = 'modal'>
    <img src = '${event.target.dataset.source}' width = '800' height = '600'>
    </div>
    `);
    
    instance.show();

    galleryEl.addEventListener('keydown', closeModalHandler)

    function closeModalHandler(event) { 
        if (event.code === "Escape") { 
            instance.close()
        }
    }
}
