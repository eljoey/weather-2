import React, { useContext } from 'react';
import { CityContext } from './CityContext';
import AnimationHandler from './AnimationHandler';

const WeeklyForecast = () => {
  const [cityInfo] = useContext(CityContext);
  const weeklyInfo = cityInfo.weeklyWeather;

  const weeklyData = () =>
    weeklyInfo.map(day => (
      <div className="weeklyInfo">
        <div className="weeklyDay">{day.day}</div>
        <div className="weeklyTemp">{day.temp}</div>
      </div>
    ));

  return <div className="weekDisplay">{weeklyData()}</div>;
};

export default WeeklyForecast;
