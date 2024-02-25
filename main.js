const apiKey = 'bf8ad14126e746878e5111429242002';
const baseUrl = 'https://api.weatherapi.com/v1/current.json';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value.trim();

    if (location) {
        const apiUrl = `${baseUrl}?key=${apiKey}&q=${location}`;
        fetchData(apiUrl);
    } else {
        locationElement.textContent = 'Please enter a location';
        console.error('Please enter a location.');
    }
});


async function fetchData(apiUrl) {
    try {
        const response = await fetch(apiUrl, { mode: 'cors' });
        const data = await response.json();

        locationElement.textContent = data.location.name;
        temperature.textContent = `${Math.round(data.current.temp_c)}°C`;
        description.textContent = data.current.condition.text;
    } catch (error) {
        console.error('Failed to fetch data', error);
    }
}
