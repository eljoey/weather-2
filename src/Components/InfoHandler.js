import { useContext, useEffect } from 'react';
import { CityContext } from './CityContext';

const InfoHandler = () => {
  const [cityInfo, setCityInfo] = useContext(CityContext);

  //handle diff api calls
  const todayAPI = 'weather';
  const weeklyAPI = 'forecast';
  const makeAPIURL = api => {
    return (
      'http://api.openweathermap.org/data/2.5/' +
      api +
      '?q=' +
      cityInfo.city +
      '&units=' +
      cityInfo.tempLabel +
      '&APPID=e07d8ddac54eade82bcdb237b5cf6279'
    );
  };

  async function getDailyWeather() {
    const response = await fetch(makeAPIURL(todayAPI));
    const dailyWeather = await response.json();

    dailyInfoHandler(dailyWeather);
  }

  async function getWeeklyWeather() {
    const response = await fetch(makeAPIURL(weeklyAPI));
    const weeklyJSON = await response.json();
    const filteredWeekly = weeklyJSON.list.filter(
      i => i.dt_txt.slice(11, 16) === '12:00'
    );

    weeklyInfoHandler(filteredWeekly);
  }

  const dailyInfoHandler = weekInfo => {
    const dailyInfo = {};

    dailyInfo.temp = weekInfo.main.temp;
    dailyInfo.humidity = weekInfo.main.humidity;
    dailyInfo.airPressure = weekInfo.main.pressure;
    dailyInfo.windSpeed = weekInfo.wind.speed;
    dailyInfo.weatherDesc = weekInfo.weather[0].description;
    dailyInfo.animation = weekInfo.weather[0].icon;
    dailyInfo.sunrise = weekInfo.sys.sunrise;
    dailyInfo.sunset = weekInfo.sys.sunset;
    dailyInfo.city = weekInfo.name;
    dailyInfo.country = weekInfo.sys.country;

    setCityInfo(prevCityInfo => ({
      city: prevCityInfo.city,
      tempLabel: prevCityInfo.tempLabel,
      todayWeather: dailyInfo,
      weeklyWeather: prevCityInfo.weeklyWeather,
      prevCities: prevCityInfo.prevCities
    }));
  };

  const weeklyInfoHandler = weekData => {
    let weeklyOBJ = weekData.map(day => {
      return {
        temp: day.main.temp,
        weatherDesc: day.weather[0].description,
        animation: day.weather[0].icon
      };
    });

    setCityInfo(prevCityInfo => ({
      city: prevCityInfo.city,
      tempLabel: prevCityInfo.tempLabel,
      todayWeather: prevCityInfo.todayWeather,
      weeklyWeather: weeklyOBJ,
      prevCities: prevCityInfo.prevCities
    }));
  };

  const handleError = err => {
    console.log(err);
  };

  useEffect(() => {
    getDailyWeather().catch(err => {
      handleError(err);
    });
    getWeeklyWeather().catch(err => {
      handleError(err);
    });

    // setTodayWeather(dailyInfo);
  }, [cityInfo.city, cityInfo.tempLabel]);
};

export default InfoHandler;

// 'http://api.openweathermap.org/data/2.5/weather?q=' +
//   cityInfo.city +
//   '&units=' +
//   cityInfo.tempLabel +
//   '&APPID=e07d8ddac54eade82bcdb237b5cf6279';
