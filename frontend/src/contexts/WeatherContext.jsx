import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WeatherContext = createContext(null);

const latitude = 35.85; // Coordinates for zip 37130 (Murfreesboro, TN)
const longitude = -86.39;

export function WeatherProvider({ children }) {
  const [now, setNow] = useState(new Date());
  const [weather, setWeather] = useState(null);

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
    <WeatherContext.Provider value={{ now, weather }}>
      {children}
    </WeatherContext.Provider>
  );
}
