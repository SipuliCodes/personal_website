import axios from "axios"

const OPENWEATHER_API_KEY = import.meta.env.VITE_SOME_KEY


const getAll = async city => {
  const city_data = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${OPENWEATHER_API_KEY}`)
  return await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${city_data.data[0].lat}&lon=${city_data.data[0].lon}&units=metric&appid=${OPENWEATHER_API_KEY}`)
}

export default {getAll}