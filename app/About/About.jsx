'use client';

import { useState } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async () => {
    const response = await fetch('/api/weather?city=Manchester');
    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div>
      <button onClick={getWeatherData}>Get Weather Data</button>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
