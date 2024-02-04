const Sendbox = ({onChange, onSubmit, message}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="send-bar">
          <input onChange={onChange} className="message-input" type="text" value={message} />
          <button type="submit" className="send-button">send</button>
        </div>
      </form>
    </div>
  )
}

export default Sendbox