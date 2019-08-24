import React, { useContext } from 'react';
import { CityContext } from './CityContext';
import { fromUnixTime } from 'date-fns';
import AnimationHandler from './AnimationHandler';

const TodayWeather = () => {
  const [cityInfo] = useContext(CityContext);

  const Temperature = () => {
    const city =
      cityInfo.todayWeather.city + ', ' + cityInfo.todayWeather.country;
    const temp = cityInfo.todayWeather.temp;
    const tempSymbol = cityInfo.tempLabel === 'imperial' ? '°F' : '°C';

    return (
      <>
        <div className="daysTemp">
          {temp}
          <span className="tempSymbol">{tempSymbol}</span>
        </div>
        <div className="curCity">{city}</div>
      </>
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
    const sunrise = fromUnixTime(cityInfo.todayWeather.sunrise)
      .toTimeString()
      .slice(0, 5);

    const sunset = fromUnixTime(cityInfo.todayWeather.sunset)
      .toTimeString()
      .slice(0, 5);

    const humidity = cityInfo.todayWeather.humidity + '%';
    const airPressure = cityInfo.todayWeather.airPressure + ' hPa';
    const windSpeed = cityInfo.todayWeather.windSpeed + handleWindInfo();

    return (
      <div className="extraInfo">
        <div className="humidity">
          <span>Humidity:</span> <span>{humidity}</span>
        </div>
        <div className="airPressure">
          <span>Air Pressure: </span>
          <span>{airPressure}</span>
        </div>
        <div className="windSpeed">
          <span>Wind Speed:</span> <span>{windSpeed}</span>
        </div>
        <div className="sunrise">
          <span>Sunrise:</span> <span>{sunrise}</span>
        </div>
        <div className="sunset">
          <span>Sunset:</span> <span>{sunset}</span>
        </div>
      </div>
    );
  };

  const BottomInfo = () => {
    const description = cityInfo.todayWeather.weatherDesc;

    return (
      <div>
        <div className="description">{description}</div>
      </div>
    );
  };

  const GetAnimation = () => {
    const aniID = cityInfo.todayWeather.animation;

    return AnimationHandler(aniID);
  };

  return (
    <div className="curWeather-container">
      <div className="curTemp">
        <Temperature />
      </div>
      <TopExtraInfo />
      <div className="weatherInfo">
        {GetAnimation()} <BottomInfo />
      </div>
    </div>
  );
};

export default TodayWeather;
