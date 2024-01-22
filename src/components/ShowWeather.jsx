const ShowWeather = ({ weather }) => {
  const time = weather.dt_txt.split(" ")[1]

  return (
    <div>
      <p className="weather-data">Temperature is {weather.main.temp}°C at {time}
        <br></br>
        Wind speed is {weather.wind.speed}m/s
      </p>
    </div>
  )
}

export default ShowWeather