import { fetchData } from './js/pixabay-api.js';

import {
  clearGallery,
  formGallery,
  renderError,
  toggleLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', event => {
  event.preventDefault();
  clearGallery(gallery);
  const search = event.target['search-text'].value.trim();
  if (!search) {
    iziToast.error({
      backgroundColor: '#EF4040',
      messageColor: '#FAFAFB',
      theme: 'dark',
      progressBarColor: '#B51B1B',
      maxWidth: '432',
      messageSize: '16',
      position: 'topRight',
      message: `Input field shold not be empty.`,
    });
    return;
  }

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
  }, 3000);
});
