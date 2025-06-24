import React, { useEffect, useState } from 'react';
import Widget from './Widget';
import axios from 'axios';

const latitude = 35.85;  // Coordinates for zip 37130 (Murfreesboro, TN)
const longitude = -86.39;

function DefaultWidget({ id, onRemove }) {
  const [weather, setWeather] = useState(null);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    const fetchWeather = async () => {
      try {
        const res = await axios.get('https://api.open-meteo.com/v1/forecast', {
          params: {
            latitude,
            longitude,
            current_weather: true,
            temperature_unit: 'fahrenheit'
          }
        });
        if (res.data && res.data.current_weather) {
          setWeather(res.data.current_weather);
        }
      } catch (e) {
        console.error('Failed to fetch weather', e);
      }
    };
    fetchWeather();
    return () => clearInterval(timer);
  }, []);

  return (
    <Widget id={id} onRemove={onRemove}>
      <h3>{now.toLocaleDateString()}</h3>
      <h4>{now.toLocaleTimeString()}</h4>
      {weather ? (
        <p>{`Temp: ${weather.temperature}°F, Wind ${weather.windspeed} mph`}</p>
      ) : (
        <p>Loading weather...</p>
      )}
    </Widget>
  );
}

export default DefaultWidget;
