
export function fetchImage(keyWord) {
    const BASE_URL = 'https://pixabay.com/';
    const END_POINT = 'api/';
    const PARAMS = new URLSearchParams({
        key: '42208232-118910d8102453b47e924ae6c',
        q: keyWord,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    });
    const URL = `${BASE_URL}${END_POINT}?${PARAMS}`;

    return fetch(URL)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(`${response.status} - ${response.statusText}`);
        });
}