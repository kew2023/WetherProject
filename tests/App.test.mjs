import App from '../App.mjs';

describe("App", () => {
    it("должен корректно выводить данные о погоде", async () => {
        const app = new App("тестовый_ключ");

        console.log = jest.fn();
        await app.showWeather("Москва");

        expect(console.log).toHaveBeenCalledWith(expect.stringContaining("Погода в"));
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining("Температура:"));
    });
});
