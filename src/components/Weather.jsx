import { useState, useEffect } from 'react'

import ShowWeather from './ShowWeather'

import WeatherService from '../services/weather'

const Weather = () => {
  const [city, setCity] = useState('Turku')
  const [weatherCity, setWeatherCity] = useState('Turku')
  const [weathers, setWeathers] = useState([])

  const date = new Date()
  const today = date.getDate()
  const [day, setDay] = useState(today)
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  let dateInCorrectForm = `${year}-0${month}-${day}`

  useEffect(() => {
    WeatherService.getAll(city)
      .then(response => {
        setWeatherCity(response.data.city.name)
        setWeathers(response.data.list)
  })
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (city != "") {
      const response = await WeatherService.getAll(city)
      setWeatherCity(response.data.city.name)
      setWeathers(response.data.list)
      setCity("")
    }
  }

  const handleClick = (event) => {
    event.preventDefault()
    setDay(parseInt(event.target.textContent, 10))
  }

  return (
    <div>
      <h1 >Weather in {weatherCity} </h1>
      <form onSubmit={handleSubmit}>
        <input value={city} placeholder='city name' onChange={(event) => { setCity(event.target.value) }} />
        <button type="submit" >search</button>
      </form>
      {[0, 1, 2, 3, 4, 5].map((offset) => (
        <button
          key={today + offset}
          className={`date-buttons ${today + offset === day ? 'active-button' : 'passive-button'}`}
          onClick={handleClick}
        >
          { `${today + offset}.${month}` }
        </button>
      ))}
      <div className='weather-table'>
        {weathers
          .filter(weather => weather.dt_txt.includes(dateInCorrectForm))
          .map(weather => <ShowWeather key={weather.dt} weather={weather} />)}
      </div>
    </div>
  )
}

export default Weather