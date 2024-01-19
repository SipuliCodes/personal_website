import "./App.css"

import Footer from './components/Footer'
import ContactDetails from "./components/ContactDetails"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {

  return (
    <div className='grid-container'>
      <Header />
      <Main />
      <ContactDetails />
      <Footer />
      
    </div>
  )
}

export default App
