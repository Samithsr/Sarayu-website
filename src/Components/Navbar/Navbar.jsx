import React from 'react'

import './Navbar.css'
import logo from "../../assets/Logo.jpg"
import sarayuLogo from "../../assets/Logo-removebg-preview.png"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  
  return (
    <nav className='navbar-container'>
        <img src={sarayuLogo} alt="" className='logo' />
        <ul>
          <li onClick={()=>navigate("/home")}>HOME</li>
          <li onClick={()=>navigate("/aboutus")}>ABOUT US</li>
          <li>PRODUCTS</li>
          <li>CATALOGUES</li>
          <li>CLIENTS</li>
          <li> <button className='btn' onClick={()=>navigate("/contact")}>CONTACT US</button></li>
        </ul>
    </nav>
  )
}

export default Navbar