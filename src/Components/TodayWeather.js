import React, { useContext } from 'react';
import { CityContext } from './CityContext';
import { format, fromUnixTime } from 'date-fns';
import AnimationHandler from './AnimationHandler';

// const day = format(new Date(2014, 1, 11), 'E..EEE');
// console.log(day);
// let unixtoDate = fromUnixTime(1566507600)
//   .toDateString()
//   .slice(0, 3);
// console.log(unixtoDate);

const TodayWeather = () => {
  const [cityInfo] = useContext(CityContext);

  const Temperature = () => {
    const temp = cityInfo.todayWeather.temp;
    const tempSymbol = cityInfo.tempLabel === 'imperial' ? '°F' : '°C';

    return (
      <div className="daysTemp">
        {temp}
        <span className="tempSymbol">{tempSymbol}</span>
      </div>
    );
  };

  const TopExtraInfo = () => {
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
        <div className="humidity">Humidity: {humidity}</div>
        <div className="airPressure">Air Pressure: {airPressure}</div>
        <div className="windSpeed">Wind Speed: {windSpeed}</div>
      </div>
    );
  };

  const BottomInfo = () => {
    const city =
      cityInfo.todayWeather.city + ', ' + cityInfo.todayWeather.country;
    const description = cityInfo.todayWeather.weatherDesc;
    const sunrise = fromUnixTime(cityInfo.todayWeather.sunrise)
      .toTimeString()
      .slice(0, 5);

    const sunset = fromUnixTime(cityInfo.todayWeather.sunset)
      .toTimeString()
      .slice(0, 5);

    return (
      <div className="botInfo">
        <div className="city">{city}</div>
        <div className="description">{description}</div>
        <div className="sunrise">Sunrise: {sunrise}</div>
        <div className="sunset">Sunset: {sunset}</div>
      </div>
    );
  };

  const GetAnimation = () => {
    const aniID = cityInfo.todayWeather.animation;

    return AnimationHandler(aniID);
  };

  return (
    <div className="curWeather-container">
      <div className="curWeather-top">
        <Temperature />
        <TopExtraInfo />
        <GetAnimation />
      </div>
      <div className="curWeather-bottom">
        <BottomInfo />
      </div>
    </div>
  );
};

export default TodayWeather;

//(5day forecast - WILL NEEED ANOTHER CALL TO FORECAST INSTEAD OF WEEKLY)
//
//(repeat for 3 days)
//(Make function to grab all times ending in 12:00)
//
//day of week -     (weeklyinfo)[(days ahead -1)].dt (use this in function to get day of week)
//*Temp -           (weeklyinfo)[(days ahead -1)].main.temp
//*weather descr -  (weeklyinfo)[(days ahead -1)].weather[0].description
//*determine anim - (weeklyinfo)[(days ahead -1)].weather[0].icon  (make function to determine which one form that)
