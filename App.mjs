import WeatherService from './WeatherService.mjs';
import DataProcessor from './DataProcessor.mjs';

class App {
    constructor (apiKey) {
        this.weatherService = new WeatherService(apiKey);
    }

    async showWeather (city) {
        try {
            const weatherData = await this.weatherService.getWeatherByCity(city);
            const formattedData = DataProcessor.formatWeatherData(weatherData);

            console.log(`Погода в ${formattedData.city}:`);
            console.log(`Температура: ${formattedData.temperature}`);
            console.log(`Описание: ${formattedData.description}`);
            console.log(`Скорость ветра: ${formattedData.windSpeed}`);
        } catch (error) {
            console.error(error.message);
        }
    }
}

export default App;
