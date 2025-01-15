import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Contact from './Components/Navbar/Contact'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './Components/Navbar/AboutUs'

const App = () => {
  return (
    <div>
       <Navbar />
       <Routes>
        <Route path="/home" element={<Hero /> } />
        <Route path="/contact" element={<Contact />} />
        <Route path='/aboutus' element={<AboutUs />} />
      
       </Routes>
    </div>
  )
}

export default App