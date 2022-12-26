import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryDiv = document.querySelector(".gallery");
console.log(galleryDiv);

const Markup = createMarkup (galleryItems);
console.log(Markup);

galleryDiv.insertAdjacentHTML("beforeend", Markup);

galleryDiv.addEventListener(`click`, evt => {
    evt.preventDefault();
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)

instance.show()
       
    }
 )
    

function galleryDivClick(evt) {
    if (evt.target.classList.contains("gallery")) {
    }
  
}

function createMarkup(galleryItems) {return galleryItems.map(
  ({ preview, original, description }) =>
    `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            style.width = "100px"
        />
    </a>
</div>`
)
.join("");
}

console.log(Markup);




console.log(basicLightbox);


