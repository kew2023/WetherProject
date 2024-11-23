import DataProcessor from '../DataProcessor.mjs';

describe("DataProcessor", () => {
    const rawData = {
        name: "Москва",
        main: { temp: 20 },
        weather: [{ description: "ясно" }],
        wind: { speed: 5 },
    };

    it("должен форматировать данные о погоде", () => {
        const formatted = DataProcessor.formatWeatherData(rawData);
        expect(formatted).toEqual({
            city: "Москва",
            temperature: "20°C",
            description: "ясно",
            windSpeed: "5 м/с",
        });
    });
});
