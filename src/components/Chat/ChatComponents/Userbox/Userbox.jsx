const Userbox = ({onSubmit, onChange}) => {
  return (
    <div className="userbox">
      <p>Add Pseudonym to Chat
        <br></br>
        By adding a pseudonym to participate in the chat, you consent to storing it in your browser's local storage.</p>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" placeholder="pseudonym" />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default Userbox