document.querySelector('#searchBtn').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.querySelector('#cityInput').value.trim();
    const status = document.querySelector('#status');
    const temp = document.querySelector('#temp');
    const wind = document.querySelector('#wind');

    if (!city) {
        status.textContent = "Please enter a city name!";
        return;
    }

    status.textContent = "Loading...";
    temp.textContent = "";
    wind.textContent = "";

    try {
        // 1️⃣ Get coordinates from city name
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
            status.textContent = "City not found!";
            return;
        }

        const { latitude, longitude } = geoData.results[0];

        // 2️⃣ Get weather using coordinates
        const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        const weatherData = await weatherRes.json();

        const { temperature, windspeed } = weatherData.current_weather;

        // 3️⃣ Update UI
        status.textContent = `Weather for: ${city}`;
        temp.textContent = `Temperature: ${temperature}°C`;
        wind.textContent = `Wind Speed: ${windspeed} km/h`;

    } catch (error) {
        status.textContent = "Something went wrong!";
        console.error(error);
    }
}