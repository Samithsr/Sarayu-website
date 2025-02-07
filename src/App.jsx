import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Contact from './Components/Navbar/Contact'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './Components/Navbar/AboutUs'
import Footer from './Components/common/Footer'
import Products from './Components/Navbar/Products'
import ProductsDetails from "./Components/ProductsMore/ProductsDetails"; 


const App = () => {
  return (
    <div>
       <Navbar />
       <Routes>
        <Route path="/" element={<Hero /> } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productdetails" element={<ProductsDetails />} />
        
       </Routes>
       <Footer />
    </div>
  )
}

export default App