import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryDiv = document.querySelector(".gallery");
console.log(galleryDiv);

const Markup = createMarkup (galleryItems);

function createMarkup(galleryItems) {return galleryItems.map(
  ({ preview, original, description }) =>
    `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</div>`
)
.join("");
}
console.log(Markup);

// console.log(galleryItems);
