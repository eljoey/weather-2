import React, { useContext, useState } from 'react';
import './App.css';
import { CityProvider } from './Components/CityContext';
import TodayWeather from './Components/TodayWeather';
import Search from './Components/Search';
import WeeklyForecast from './Components/WeeklyForecast';

const weather = require('openweather-apis');
weather.setLang('en');
weather.setAPPID('e07d8ddac54eade82bcdb237b5cf6279');
weather.setUnits('imperial');

function App() {
  return (
    <CityProvider>
      <div className="App">
        <Search />
        <TodayWeather />
        <WeeklyForecast />
      </div>
    </CityProvider>
  );
}

export default App;
