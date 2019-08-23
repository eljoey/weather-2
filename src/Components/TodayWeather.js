import React, { useContext, useState } from 'react';
import { CityContext } from './CityContext';
import { format } from 'date-fns';
import { fromUnixTime } from 'date-fns/esm';

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

    console.log(temp, tempSymbol);
  };

  return (
    <div>
      <h1>{}</h1>
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
