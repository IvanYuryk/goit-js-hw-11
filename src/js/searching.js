import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

async function fetchImages(query) {
    const apiKey = '42208232-118910d8102453b47e924ae6c';
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        return data.hits;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw new Error('Failed to fetch images');
    }
}

function clearGallery() {
    const galleryElement = document.getElementById('gallery');
    galleryElement.innerHTML = '';
}

function showMessage(message, type = 'success') {
    iziToast[type]({
        title: 'Message',
        message: message,
        position: 'topCenter',
    });
}

// Функція для відображення індикатора завантаження
function showLoader() {
    const loaderElement = document.getElementById('loader');
    loaderElement.style.display = 'block';
}

// Функція для приховування індикатора завантаження
function hideLoader() {
    const loaderElement = document.getElementById('loader');
    loaderElement.style.display = 'none';
}

// Отримання посилань на елементи DOM галереї і інші необхідні елементи
const galleryElement = document.getElementById('gallery');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

// Обробник події для відправлення форми
searchForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Отримання значення з поля введення
    const query = searchInput.value.trim();

    if (query === '') {
        showMessage('Please enter a search term', 'warning');
        return;
    }

    // Очищення галереї перед новим пошуком
    clearGallery();

    // Відображення індикатора завантаження
    showLoader();

    try {
        // Виклик асинхронної функції для виконання HTTP-запиту
        const images = await fetchImages(query);

        if (images.length === 0) {
            showMessage('No images found. Please try again.', 'info');
        } else {
            // Відображення знайдених зображень у галереї
            renderImages(images);
        }
    } catch (error) {
        showMessage('Failed to fetch images. Please try again.', 'error');
    } finally {
        // Приховання індикатора завантаження навіть у випадку помилки
        hideLoader();
    }
});

// Функція для відображення зображень у галереї
function renderImages(images) {
    const lightbox = new SimpleLightbox('.gallery a');
    images.forEach((image) => {
        const figure = document.createElement('figure');
        const a = document.createElement('a');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');

        a.href = image.largeImageURL;
        img.src = image.webformatURL;
        img.alt = image.tags;
        figcaption.textContent = `Likes: ${image.likes}, Views: ${image.views}, Comments: ${image.comments}, Downloads: ${image.downloads}`;

        a.appendChild(img);
        figure.appendChild(a);
        figure.appendChild(figcaption);
        galleryElement.appendChild(figure);
    });
}
