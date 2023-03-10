import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>
        </div>`
  )
  .join("");
gallery.innerHTML = markup;

let bigSizeUrl = '';
gallery.addEventListener('click', handleClick);
function handleClick(event) {
    event.preventDefault();
    bigSizeUrl = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src=${bigSizeUrl}>`, {
        onShow: () => {
            document.body.addEventListener("keydown", closeOnEsc)
        },
        onClose: () => {
            document.body.removeEventListener("keydown", closeOnEsc)
        }
    });
    instance.show();
    function closeOnEsc({ key }) {
        if (key === "Escape") {
            instance.close()
        }
    }
}