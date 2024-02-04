import "./Chat.css"
import { useEffect, useState } from "react"

import ChatService from "../../services/chat"
import Message from "./ChatComponents/Message/Message"
import Sendbox from "./ChatComponents/Sendbox/Sendbox"
import Userbox from "./ChatComponents/Userbox/Userbox"

const Chat = () => {
  const [messages, setMessages] = useState([])
  const [pseudonym, setPseudonym] = useState('')
  const [currentUser, setCurrentUser] = useState("")
  const [message, setMessage] = useState("")
  const date = new Date()

  useEffect(() => {
    ChatService.getAll()
      .then(response => {
        setMessages(response.data)
      })
      .catch(error => {
          console.error("Error fetching messages:", error)
        })
  }, [])

  useEffect(() => {
    const storedPseudonym = localStorage.getItem('pseudonym')
    if (storedPseudonym) {
      setPseudonym(storedPseudonym)
    }
  }, [])

  const keyGen = () => {
    return Math.floor(Math.random()*10000000)
  }

  const onChange = (event) => {
    event.preventDefault()
    setMessage(event.target.value)
  }

  const send = (event) => {
    event.preventDefault()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const day =  date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
    const year = date.getFullYear()
    const newMessage = {
      "id": keyGen(),
      "user": pseudonym,
      "message": message ,
      "time": `${hour}.${minutes}`,
      "date": `${day}.${month}.${year}`
    }
    ChatService.newMessage(newMessage)
      .then(response => {
        setMessages([...messages, response.data])
        setMessage("")
    })
  }

  const onPseudonymChange = (event) => {
    event.preventDefault()
    setCurrentUser(event.target.value)
  }

  const addUser = (event) => {
    event.preventDefault()
    setPseudonym(currentUser)
    localStorage.setItem('pseudonym', currentUser)
  }

  console.log(messages)

  return (
    <div className="chat-grid-container">
      <div className="chatbox-grid-container">
        <div className="chat-header">
          <h1>Chat</h1>
        </div>
        <div className="flex-container">
          {messages.length !== 0 ? messages.map(message => {
            return(
              <Message
                key={message.id}
                currentUser={pseudonym}
                message={message.message}
                user={message.user}
                time={message.time}
                date={message.date}
              />
            )
          }) : <h1>Not any messages yet</h1>}
        </div>
        {pseudonym ? <Sendbox onChange={onChange} onSubmit={send} message={message} /> : <Userbox onChange={onPseudonymChange} onSubmit={addUser} /> }
      </div>
    </div>
  )
}

export default Chat