const Message = ({ currentUser, message, user, time, date }) => {
  return (
    <div className={ currentUser === user ? "my-chat" : "other-chat" }> 
      <div className="time-date">{`${user === currentUser ? "me" : user} ${time} ${date}`}</div>
      <div className="text-message">{message}</div>
    </div>
  )
}

export default Message