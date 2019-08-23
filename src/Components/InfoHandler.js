import { useContext, useEffect } from 'react';
import { CityContext } from './CityContext';

const InfoHandler = () => {
  const [cityInfo, setCityInfo] = useContext(CityContext);

  const dailyInfo = {};

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

  const dailyInfoHandler = obj => {
    dailyInfo.temp = obj.main.temp;
    dailyInfo.humidity = obj.main.humidity;
    dailyInfo.airPressure = obj.main.pressure;
    dailyInfo.windSpeed = obj.wind.speed;
    dailyInfo.weatherDesc = obj.weather[0].description;
    dailyInfo.animation = obj.weather[0].icon;
    dailyInfo.sunrise = obj.sys.sunrise;
    dailyInfo.sunset = obj.sys.sunset;
    dailyInfo.city = obj.name;
    dailyInfo.country = obj.sys.country;

    // console.log(dailyInfo);

    // Set cityInfo.todayWeather to this
    // setCityInfo(prevCityInfo => ({
    //   city: prevCityInfo.city,
    //   tempLabel: prevCityInfo.tempLabel,
    //   todayWeather: dailyInfo,
    //   weeklyWeather: prevCityInfo.weeklyWeather,
    //   prevCities: prevCityInfo.prevCities
    // }));

    // setTodayWeather(dailyInfo);
  };

  const setTodayWeather = info => {
    setCityInfo(prevCityInfo => ({
      city: prevCityInfo.city,
      tempLabel: prevCityInfo.tempLabel,
      todayWeather: info,
      weeklyWeather: prevCityInfo.weeklyWeather,
      prevCities: prevCityInfo.prevCities
    }));

    console.log(cityInfo);
  };

  const weeklyInfoHandler = weekData => {
    let weeklyOBJ = weekData.map(day => {
      return {
        temp: day.main.temp,
        weatherDesc: day.weather[0].description,
        animation: day.weather[0].icon
      };
    });

    // //Set cityInfo.weeklyWeather to this
    // setWeeklyWeather(weeklyOBJ);
  };

  const setWeeklyWeather = info => {
    setCityInfo(prevCityInfo => ({
      city: prevCityInfo.city,
      tempLabel: prevCityInfo.tempLabel,
      todayWeather: prevCityInfo.todayWeather,
      weeklyWeather: info,
      prevCities: prevCityInfo.prevCities
    }));

    console.log(cityInfo);
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
  }, [cityInfo.city]);
};

export default InfoHandler;

// 'http://api.openweathermap.org/data/2.5/weather?q=' +
//   cityInfo.city +
//   '&units=' +
//   cityInfo.tempLabel +
//   '&APPID=e07d8ddac54eade82bcdb237b5cf6279';
