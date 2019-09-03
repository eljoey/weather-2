import React, { useState, createContext, useEffect } from 'react'

const localState = JSON.parse(localStorage.getItem('cityInfo'))

const getInfo = () =>
  localState == null
    ? {
        city: 'BOSTON',
        tempLabel: 'metric',
        todayWeather: {},
        weeklyWeather: [],
        prevCities: ['BOSTON'],
        lastCitySel: 'BOSTON'
      }
    : localState

export const CityContext = createContext()

export const CityProvider = props => {
  const [cityInfo, setCityInfo] = useState(getInfo())

  useEffect(() => {
    localStorage.setItem('cityInfo', JSON.stringify(cityInfo))
  }, [cityInfo])

  return (
    <CityContext.Provider value={[cityInfo, setCityInfo]}>
      {props.children}
    </CityContext.Provider>
  )
}
