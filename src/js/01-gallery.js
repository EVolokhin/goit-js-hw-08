import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");

const pictures = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt=""
      title="${description}"
    />
  </a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", pictures);

gallery.addEventListener("click", openPicture);

var lightboxGallery = new SimpleLightbox(".gallery a", {
  enableKeyboard: true,
  captionDelay: 250,
});

function openPicture(event) {
  event.preventDefault();
  lightboxGallery.open();
}

