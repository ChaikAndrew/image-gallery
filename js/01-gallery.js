import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryLib = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryLib.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class = "gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
    </a>
    </div>
    `;
    })
    .join('');
}

const createLightbox = (event) => {
  const targetImgUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${targetImgUrl}">`
  );

 instance.show(
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        instance.close();
      }
    })
  );
};

const onGalleryImgClick = (event) => {
if (event.target.nodeName !== 'IMG') return;

createLightbox(event);
event.preventDefault();
};

galleryLib.addEventListener('click', onGalleryImgClick);
console.log(galleryItems);
