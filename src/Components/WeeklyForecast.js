import React, { useContext } from 'react'
import { CityContext } from './CityContext'
import AnimationHandler from './AnimationHandler'

const WeeklyForecast = () => {
  const [cityInfo] = useContext(CityContext)
  let key = 0
  const getKey = () => {
    return key++
  }
  const tempSymbol = cityInfo.tempLabel === 'imperial' ? '°F' : '°C'
  const weeklyInfo = cityInfo.weeklyWeather

  const weeklyData = () =>
    weeklyInfo.map(day => (
      <div className="weeklyInfo" key={getKey()}>
        <div className="weeklyDay" key={getKey()}>
          {day.day}
        </div>
        {AnimationHandler(day.animation)}
        <div className="weeklyTemp" key={getKey()}>
          {day.temp + ' ' + tempSymbol}
        </div>
      </div>
    ))

  return <div className="weekDisplay">{weeklyData()}</div>
}

export default WeeklyForecast
