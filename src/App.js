import React from 'react'
import './App.css'
import { CityProvider } from './Components/CityContext'
import TodayWeather from './Components/TodayWeather'
import Search from './Components/Search'
import WeeklyForecast from './Components/WeeklyForecast'
import PrevSearches from './Components/PrevSearches'

function App() {
  return (
    <CityProvider>
      <div className="App">
        <Search />
        <TodayWeather />
        <WeeklyForecast />
        <PrevSearches />
      </div>
    </CityProvider>
  )
}

export default App
