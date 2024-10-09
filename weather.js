async function getWeatherForNextNoon(apiKey, lat, lon) {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,daily,alerts&units=imperial&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Get the current date in EST
        const now = new Date();
       // const offset = now.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
        //const estOffset = -4 * 60 * 60 * 1000; // EST is GMT-5
        const offset = now.getTimezoneOffset() / 60; // Convert minutes to milliseconds
        // Find the next closest 12 PM in EST
        const nextNoon = data.hourly.find(hour => {
            const date = new Date((hour.dt * 1000) );
            return date.getUTCHours() === 13+offset; //even though its still called noon
        });

        if (nextNoon) {
            const weatherInfo = `Temp: ${nextNoon.temp}°F, Wind: ${nextNoon.wind_speed} mph, ${nextNoon.weather[0].description}  at 1 pm  `;
            document.getElementById('weather-info').textContent = weatherInfo;
        } else {
            document.getElementById('weather-info').textContent = 'No weather data found for the next 12 PM (EST).';
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        document.getElementById('weather-info').textContent = 'Error loading weather data.';
    }
}

// Usage example
const apiKey = '0909ba73692be515e2a707d0a6ef514c'; // Replace with your OpenWeather API key
const lat = 42.3; // Latitude
const lon = -71.3516; // Longitude

getWeatherForNextNoon(apiKey, lat, lon);
