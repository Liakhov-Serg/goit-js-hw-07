import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryUl = document.querySelector(".gallery");

const Markup = createMarkup (galleryItems);

galleryUl.insertAdjacentHTML("beforeend", Markup);

function createMarkup(galleryItems) {return galleryItems.map(
  ({ preview, original, description }) =>
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
   )

.join("");
}
var lightbox = new SimpleLightbox('.gallery a', {  });

