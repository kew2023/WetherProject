import WeatherService from '../WeatherService.mjs';

describe("WeatherService", () => {
    const apiKey = "25d58b9384d60d79d53a4a746eff9a1e"; // Тестовый ключ
    const weatherService = new WeatherService(apiKey);

    it("должен возвращать данные о погоде для указанного города", async () => {
        const data = await weatherService.getWeatherByCity("Москва");
        expect(data).toHaveProperty("name", "Moscow");
        expect(data).toHaveProperty("main.temp");
    });

    it("должен выдавать ошибку для несуществующего города", async () => {
        await expect(weatherService.getWeatherByCity("НесуществующийГород"))
            .rejects.toThrow("Ошибка при получении данных о погоде");
    });
});
