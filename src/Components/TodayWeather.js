import React, { useContext, useState } from 'react';
import { CityContext } from './CityContext';
import { format } from 'date-fns';
import { fromUnixTime } from 'date-fns/esm';
import Cloudy from '../Weather animations/Cloudy';
import FewClouds from '../Weather animations/FewClouds';
import FewCloudsNight from '../Weather animations/FewCloudsNight';
import Night from '../Weather animations/Night';
import Rainy from '../Weather animations/Rainy';
import Snow from '../Weather animations/Snow';
import Sunny from '../Weather animations/Sunny';
import ThunderStorm from '../Weather animations/ThunderStorm';

const weather = require('openweather-apis');

// const day = format(new Date(2014, 1, 11), 'E..EEE');
// console.log(day);
// let unixtoDate = fromUnixTime(1566507600)
//   .toDateString()
//   .slice(0, 3);
// console.log(unixtoDate);

const TodayWeather = () => {
  const [cityInfo, setCityInfo] = useContext(CityContext);

  const temperature = () => {
    const temp = cityInfo.todayWeather.temp;
    const tempSymbol = cityInfo.tempLabel === 'imperial' ? '°F' : '°C';

    return (
      <div className="daysTemp">
        {temp}
        <span className="tempSymbol">{tempSymbol}</span>
      </div>
    );
  };

  const extraInfo = () => {
    const handleWindInfo = () => {
      if (cityInfo.tempLabel === 'imperial') {
        return ' mph';
      } else {
        return ' m/s';
      }
    };

    const humidity = cityInfo.todayWeather.humidity + '%';
    const airPressure = cityInfo.todayWeather.airPressure + ' hPa';
    const windSpeed = cityInfo.todayWeather.windSpeed + handleWindInfo();

    return (
      <div className="extraInfo">
        <div className="humidity">{humidity}</div>
        <div className="airPressure">{airPressure}</div>
        <div className="windSpeed">{windSpeed}</div>
      </div>
    );
  };

  const getAnimation = () => {
    const aniID = cityInfo.todayWeather.animation;
    const cloudyIDs = ['03d', '03n', '04d', '04n'];
    if (cloudyIDs.includes(aniID)) {
      return Cloudy;
    } else if () {
      return FewClouds
    } else if () {
      return FewCloudsNight
    } else if () {
      return Night
    }
  };

  return (
    <div className="curWeather-container">
      <div className="curWeather-top">
        <div>{temperature()}</div>
        <div>{extraInfo()}</div>
      </div>
      <div className="curWeather-bottom" />
    </div>
  );
};

export default TodayWeather;

//Data I'm grabbing
//
//(this is for single day pull)
//
//--Todays Info--
//*Temp -           .main.temp (cityInfo.tempLabel)
//*humidity -       .main.humidity (%)
//*air pressure -   .main.pressure (hPa)
//wind speed -      .
//*weather descr -  .weather.0.description
//*determine anim - .weather.0.icon  (make function to determine which one form that)
//sunrise           .sys.sunrise (convert to hrs:min)
//sunset            .sys.sunset (convert to hrs:min)
//city              .name
//country           .sys.country
//
//(5day forecast - WILL NEEED ANOTHER CALL TO FORECAST INSTEAD OF WEEKLY)
//
//(repeat for 3 days)
//(Make function to grab all times ending in 12:00)
//
//day of week -     (weeklyinfo)[(days ahead -1)].dt (use this in function to get day of week)
//*Temp -           (weeklyinfo)[(days ahead -1)].main.temp
//*weather descr -  (weeklyinfo)[(days ahead -1)].weather[0].description
//*determine anim - (weeklyinfo)[(days ahead -1)].weather[0].icon  (make function to determine which one form that)
