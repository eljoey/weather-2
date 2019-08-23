import React, { useState, useContext } from 'react';
import { CityContext } from './CityContext';
import InfoHandler from './InfoHandler';

const Search = () => {
  const [name, setName] = useState('');
  const [cityInfo, setCityInfo] = useContext(CityContext);

  const updateName = e => {
    setName(e.target.value.toUpperCase());
  };

  const searchCity = e => {
    e.preventDefault();
    if (name === '') return;

    // Will move current city to previous cities and filter previous cities to remove duplicate searches of same city
    const newPrevCities = [...cityInfo.prevCities, cityInfo.city];
    const filteredCities = newPrevCities.filter(
      (city, index) => newPrevCities.indexOf(city) === index
    );

    setCityInfo(prevCityInfo => ({
      city: name,
      tempLabel: prevCityInfo.tempLabel,
      todayWeather: prevCityInfo.todayWeather,
      weeklyWeather: prevCityInfo.weeklyWeather,
      prevCities: filteredCities
    }));

    setName('');
  };

  const setTempUnit = unit => {
    setCityInfo(prevCityInfo => ({
      city: prevCityInfo.city,
      tempLabel: unit,
      todayWeather: prevCityInfo.todayWeather,
      weeklyWeather: prevCityInfo.weeklyWeather,
      prevCities: [...prevCityInfo.prevCities]
    }));
  };

  InfoHandler();

  return (
    <div className="searchbar">
      <form onSubmit={searchCity}>
        <input
          type="text"
          placeholder="Enter City or Place (eg. London or London, UK"
          value={name}
          onChange={updateName}
          key="1"
        />
      </form>
      <div
        className="imperial"
        onClick={() => {
          setTempUnit('imperial');
        }}
      >
        °F
      </div>
      <div
        className="metric"
        onClick={() => {
          setTempUnit('metric');
        }}
      >
        °C
      </div>
    </div>
  );
};

export default Search;
