import fetch from 'node-fetch';

class WeatherService {
    constructor (apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    }

    async getWeatherByCity (city) {
        const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric&lang=ru`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Ошибка при получении данных о погоде: ${response.statusText}`);
        }

        return await response.json();
    }
}

export default WeatherService;
