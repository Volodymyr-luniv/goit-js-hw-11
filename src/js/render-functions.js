import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(images) {
  const imageList = document.querySelector('.image-list');
  imageList.innerHTML = '';

  const imagesMarkup = images
    .map(
      image =>
        `<li class="gallery-item">
      <a href="${image.largeImageURL}" class="gallery-link" data-lightbox="gallery">
              <div class="image-wrapper">
                <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-image" />
              </div>
              <div class="image-info">
                <p class="info-item"><b>Likes:</b> ${image.likes}</p>
                <p class="info-item"><b>Views:</b> ${image.views}</p>
                <p class="info-item"><b>Comments:</b> ${image.comments}</p>
                <p class="info-item"><b>Downloads:</b> ${image.downloads}</p>
              </div>
            </a>
          </li>`
    )
    .join('');

  imageList.innerHTML = imagesMarkup;
  const lightbox = new SimpleLightbox('.gallery-link', {
    captionsData: 'alt',

    captionDelay: 0,
  });

  lightbox.refresh();
}
