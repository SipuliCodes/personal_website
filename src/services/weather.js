import axios from "axios"
const baseUrl = "/weather"


const getAll = async city => {
  return await axios.get(`${baseUrl}/${city}`)
}

export default {getAll}