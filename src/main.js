import { renderImage } from './js/markup';
import { fetchImage } from './js/api';
import { onRejected } from './js/error-handler';

const form = document.querySelector("#searchForm");
const loaderContainer = document.querySelector(".loader");

form.addEventListener("submit", onSearch);

function onSearch(event) {
  event.preventDefault();
  const keyWord = event.target.keyword.value.trim();
  if (!keyWord) {
    return;
  }
  loaderContainer.style.display = 'block';

  fetchImage(keyWord)
    .then((images) => {
      renderImage(images);
    })
    .catch((error) => {
      onRejected(error);
    }).finally(() => loaderContainer.style.display = 'none');

  form.reset();
}
