import { fetchData } from './js/pixabay-api.js';

import {
  formGallery,
  renderError,
  toggleLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', event => {
  event.preventDefault();
  const search = event.target['search-text'].value;
  gallery.innerHTML = '';
  toggleLoader(true);

  setTimeout(() => {
    fetchData(search)
      .then(images => {
        if (images.length === 0) {
          renderError();
        } else {
          formGallery(images, gallery);
        }
      })
      .catch(error => {
        console.log(error);
        renderError();
      })
      .finally(() => {
        toggleLoader(false);
        form.reset();
      });
  }, 100);
});
