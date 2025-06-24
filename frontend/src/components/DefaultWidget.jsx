import React, { useContext } from 'react';
import Widget from './Widget';
import { WeatherContext } from '../contexts/WeatherContext';

function DefaultWidget({ id, onRemove }) {
  const { now, weather } = useContext(WeatherContext);

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
