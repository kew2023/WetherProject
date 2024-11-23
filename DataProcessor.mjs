class DataProcessor {
    static formatWeatherData (data) {
        return {
            city: data.name,
            temperature: `${data.main.temp}°C`,
            description: data.weather[0].description,
            windSpeed: `${data.wind.speed} м/с`,
        };
    }
}

export default DataProcessor;
