import App from './App.mjs';

const API_KEY = '25d58b9384d60d79d53a4a746eff9a1e'; // Вставьте ваш ключ API
const app = new App(API_KEY);

// Получаем данные о погоде для города "Москва"
app.showWeather('Москва');
