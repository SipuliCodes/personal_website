import axios from "axios"

const baseUrl = "/messages"

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response
}

const newMessage = async messageObject => {
  const response = await axios.post(`${baseUrl}`, messageObject)
  return response
}

export default {getAll, newMessage}