//import galleryTpl from './templates/gallery.hbs';

const apiKey = '17631237-b1d4a3ab63bf90b2164ae6fcb';

function apiService(searchQuery, page = 1) {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;
  // const options = {
  //   headers: {
  //     Autorization: apiKey,
  //   },
  // };
  return fetch(url)
    .then(res => res.json())
    .then(({ hits }) => hits)

    .catch(error => console.log(error));
}

export default apiService;
