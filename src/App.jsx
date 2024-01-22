import "./App.css"

import Footer from './components/Footer'
import Header from "./components/Header"
import Home from "./components/Home"
import Weather from "./components/Weather"
import Roadmap from "./components/Roadmap"

import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div className='grid-container'>
      <Header />
      <Routes>
        <Route path="/weather" element={<Weather />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
