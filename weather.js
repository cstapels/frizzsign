async function fetchWeatherData() {
    try {
        //const response = await fetch('https://w0juz5mszl.execute-api.us-east-1.amazonaws.com/rubyWeather');
		const response = await fetch('https://1oz604xrjb.execute-api.us-east-1.amazonaws.com/stage1/weather');
        const responseData = await response.json();
       const data = JSON.parse(responseData.body);
		const temperature = data.temp;
        const windSpeed = data.wind_speed;
        const description = data.weather[0].description;

        const weatherInfo = `Temp @ Gametime: ${temperature} F, Wind: ${windSpeed} mph, ${description}`;
        
        document.getElementById('weather-info').textContent = weatherInfo;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the function to fetch and display the weather data
fetchWeatherData();