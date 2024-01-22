import "./App.css"

import Footer from './components/Footer'
import Header from "./components/Header"
import Home from "./components/Home"
import Weather from "./components/Weather"

function App() {

  return (
    <div className='grid-container'>
      <Header />
      <Home />
      <Footer />
      
    </div>
  )
}

export default App
