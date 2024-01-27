import me_img from '../assets/me.png'
import "./home.css"

import ContactDetails from "./ContactDetails"

const Home = () => {
  return (
    <div className='home-grid'>
      <div className='main-container'>
          <div className='left'>
            <h1 className='name'>Sisu <br/>Vepsäläinen</h1>
            <p>ICT student at University of Turku</p>
          </div>
          <div className='right'>
            <img src={me_img} className='profile-pic' />
          </div>
      </div>
      <ContactDetails />
    </div>
  )
}

export default Home