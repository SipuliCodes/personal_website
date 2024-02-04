import "./App.css"

import Footer from './components/Footer'
import Header from "./components/Header"
import Home from "./components/Home/Home"
import Weather from "./components/Weather"
import Roadmap from "./components/Roadmap/Roadmap"
import Chat from "./components/Chat/Chat"

import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div className='grid-container'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
