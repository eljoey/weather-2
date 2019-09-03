import React, { useState, useContext } from 'react'
import { CityContext } from './CityContext'
import InfoHandler from './InfoHandler'

const Search = () => {
  const [name, setName] = useState('')
  const [cityInfo, setCityInfo] = useContext(CityContext)

  const updateName = e => {
    setName(e.target.value.toUpperCase())
  }

  const searchCity = e => {
    e.preventDefault()
    if (name.replace(/\s+/g, '') === '') {
      return
    }

    // Will move current city to previous cities and filter previous cities to remove duplicate searches of same city and limit to 5 total
    const newPrevCities = [cityInfo.city, ...cityInfo.prevCities]
    const filteredCities = newPrevCities
      .filter((city, index) => newPrevCities.indexOf(city) === index)
      .slice(0, 5)

    setCityInfo(prevCityInfo => ({
      city: name,
      tempLabel: prevCityInfo.tempLabel,
      todayWeather: prevCityInfo.todayWeather,
      weeklyWeather: prevCityInfo.weeklyWeather,
      prevCities: filteredCities,
      lastCitySel: prevCityInfo.city
    }))

    setName('')
  }

  const setTempUnit = unit => {
    setCityInfo(prevCityInfo => ({
      city: prevCityInfo.city,
      tempLabel: unit,
      todayWeather: prevCityInfo.todayWeather,
      weeklyWeather: prevCityInfo.weeklyWeather,
      prevCities: [...prevCityInfo.prevCities],
      lastCitySel: prevCityInfo.lastCitySel
    }))
  }

  //calls to rerender info
  InfoHandler()

  return (
    <div className="searchbar">
      <form onSubmit={searchCity}>
        <input
          className="search"
          type="text"
          placeholder="Enter City or Place (eg. London or London, UK)"
          value={name}
          onChange={updateName}
          key="1"
        />
      </form>
      <div className="radioImperial">
        <input
          name="temp"
          type="radio"
          onClick={() => {
            setTempUnit('imperial')
          }}
          defaultChecked={cityInfo.tempLabel === 'imperial'}
        />
        <span className="imperial">°F</span>
      </div>
      <div className="radioMetric">
        <input
          name="temp"
          type="radio"
          onClick={() => {
            setTempUnit('metric')
          }}
          defaultChecked={cityInfo.tempLabel === 'metric'}
        />
        <span className="metric">°C</span>
      </div>
    </div>
  )
}

export default Search
