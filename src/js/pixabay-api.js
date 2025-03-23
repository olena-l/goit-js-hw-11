import axios from 'axios';

export const fetchData = searchQuery => {
  const API_KEY = '49447810-de68c09371bf9037b3e54ca3c';
  const BASE_URL = 'https://pixabay.com/api/';
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data.hits;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
};
