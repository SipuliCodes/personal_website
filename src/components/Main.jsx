import me_img from '../assets/me.png'

const Main = () => {
  return (
    <div className='item2 main-container'>
      <div className='left-main'>
        <h1 className='name'>Sisu <br/>Vepsäläinen</h1>
        <p>Student at University of Turku</p>
      </div>
      <div>
        <img src={me_img} width="240px"/>
      </div>
    </div>
  )
}

export default Main