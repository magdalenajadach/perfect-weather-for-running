"use client";
import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "71c46698e59a3626804c14b9d91c28fd";
  // const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
  const city = "Marple"; // Replace with the city

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error:", error));
  }, [apiKey, city]);

  return (
    <div>
      <h2>Weather Information</h2>
      {weatherData && (
        <div>
          <p>City: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp} °C</p>
					{console.log(weatherData.main)}
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
