const ShowWeather = ({ weather }) => {
  const time = weather.dt_txt.split(" ")[1].split(":")

  return (
    <div>
      <p className="weather-data">Temperature is {weather.main.temp}°C at {time[0] + ":" + time[1]}
        <br></br>
        Wind speed is {weather.wind.speed}m/s
      </p>
    </div>
  )
}

export default ShowWeather