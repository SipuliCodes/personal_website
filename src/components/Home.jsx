import me_img from '../assets/me.png'

import ContactDetails from "./ContactDetails"

const Home = () => {
  return (
    <div className='home-grid'>
      <div className='item2 main-container'>
        <div className='left-main'>
          <h1 className='name'>Sisu <br/>Vepsäläinen</h1>
          <p>ICT student at University of Turku</p>
        </div>
        <div>
          <img src={me_img} width="240px"/>
        </div>
      </div>
      <ContactDetails />
    </div>
  )
}

export default Home