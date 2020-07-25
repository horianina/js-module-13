import './styles.css';

import refs from './js/refs';
import galleryTpl from './templates/gallery.hbs';
import apiService from './js/apiService.js';
let searchQuery = '';
let page = 1;

refs.searchQuery.addEventListener('submit', event => {
  event.preventDefault();

  const input = event.currentTarget;
  searchQuery = input.elements.query.value;
  refs.galleryContainer.innerHTML = '';
  //form.reset();
  page = 1;
  refs.loadMoreBtn.classList.add('is-hidden');
  apiService(searchQuery, (page = 1)).then(hits => {
    updateGalleryMarkup(hits);

    refs.loadMoreBtn.classList.remove('is-hidden');
    page += 1;
  });
});
refs.loadMoreBtn.addEventListener('click', () => {
  apiService(searchQuery, page).then(hits => {
    updateGalleryMarkup(hits);

    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
    page += 1;
  });
});
function updateGalleryMarkup(hits) {
  const markup = galleryTpl(hits);
  console.log(markup);
  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}
export default updateGalleryMarkup;
