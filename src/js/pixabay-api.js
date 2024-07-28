const API_KEY = '29243392-4dbc80ece43085fc7952f4964';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const trimmedQuery = query.trim();
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    trimmedQuery
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      return data.hits;
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}
