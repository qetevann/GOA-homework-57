
console.log('js connected')



const input = document.getElementById('cityInput');
const button = document.getElementById('searchBtn');
const cityName = document.getElementById('cityName');
const weatherText = document.getElementById('weatherText');

const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

button.addEventListener('click', async function () {
    if (input.value === '') {
        cityName.textContent = '';
        weatherText.textContent = 'please enter a city';
        return;
    }

    const city = input.value;

    const locationResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );

    const locationData = await locationResponse.json();

    const latitude = locationData.results[0].latitude;
    const longitude = locationData.results[0].longitude;

    const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
    );

    const weatherData = await weatherResponse.json();

    cityName.textContent = city[0].toUpperCase() + city.slice(1).toLowerCase();
    weatherText.textContent = weatherData.current.temperature_2m + '°C';

    humidity.textContent = weatherData.current.relative_humidity_2m + '%';
    wind.textContent = weatherData.current.wind_speed_10m + ' km/h';

    input.value = '';
});