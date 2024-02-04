import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

// Підключення стилів SimpleLightbox
import 'simplelightbox/dist/simple-lightbox.min.css';

// Асинхронна функція для виконання HTTP-запиту
async function fetchImages(query) {
    const apiKey = 'YOUR_PIXABAY_API_KEY'; // Підставте свій ключ
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

// Функція для очищення галереї
function clearGallery() {
    const galleryElement = document.getElementById('gallery');
    galleryElement.innerHTML = '';
}

// Функція для відображення повідомлення
function showMessage(message, type = 'success') {
    iziToast[type]({
        title: 'Message',
        message: message,
        position: 'topCenter',
    });
}

// Функція для відображення індикатора завантаження
function showLoader() {

