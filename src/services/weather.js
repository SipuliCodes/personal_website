import axios from "axios"

const api_key = import.meta.env.VITE_OPENWEATHER


const getAll = async city => {
  const city_data = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api_key}`)
  return await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${city_data.data[0].lat}&lon=${city_data.data[0].lon}&units=metric&appid=${api_key}`)
}

export default {getAll}