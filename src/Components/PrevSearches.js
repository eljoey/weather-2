import React, { useContext } from 'react'
import { CityContext } from './CityContext'

const PrevSearches = () => {
  const [cityInfo, setCityInfo] = useContext(CityContext)
  let key = 99999
  const getKey = () => {
    return key++
  }

  const newPrevCities = [cityInfo.city, ...cityInfo.prevCities]
  const filteredCities = newPrevCities
    .filter((city, index) => newPrevCities.indexOf(city) === index)
    .slice(0, 5)

  const prevSearchDisplay = () =>
    cityInfo.prevCities.map(city => (
      <div
        className="city"
        key={getKey()}
        onClick={() =>
          setCityInfo(prevCityInfo => ({
            ...prevCityInfo,
            city: city,
            prevCities: filteredCities
          }))
        }
      >
        - {city}
      </div>
    ))

  return (
    <div className="prevSearches">
      <h1 className="title">Previous Searches</h1>
      <div className="cities">{prevSearchDisplay()}</div>
    </div>
  )
}

export default PrevSearches
