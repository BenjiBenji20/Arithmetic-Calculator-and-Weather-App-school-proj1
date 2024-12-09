const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

const apiKey = `a72af3fdfe68ad263f2f41abeaebb6ab`; // OpenWeather API key

// Route to handle the weather request
router.post("/getWeather", async (req, res) => {
  const city = req.body.city;

  if (!city) {
    return res.status(400).json({ error: 'Please enter a city' });
  }
  
  try {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    const currentWeatherResponse = await fetch(currentWeatherUrl);
    const currentWeatherData = await currentWeatherResponse.json();

    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();

    res.json({ currentWeather: currentWeatherData, forecast: forecastData });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Error fetching weather data' });
  }
}); 

// Route to serve the weather app view
router.get('/', (req, res) => {
  res.render('weather-app'); // Render the weather app page
});

module.exports = router;
