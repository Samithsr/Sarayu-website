import React from 'react'

import './Navbar.css'
import logo from "../../assets/Logo.jpg"
import sarayuLogo from "../../assets/Logo-removebg-preview.png"
import { NavLink, useNavigate } from 'react-router-dom'
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate()
  
  return (
    <div>
    <nav className='navbar-container'>
        <img src={logo} alt="" className='logo' />
        <ul className='navbar_desktop_view'>
          <NavLink to={"/home"} className="li" >HOME</NavLink>
          <NavLink to={"/aboutus"} className="li">ABOUT US</NavLink>
          <NavLink className="li">PRODUCTS</NavLink>
          <NavLink className="li">CATALOGUES</NavLink>
          <NavLink className="li">CLIENTS</NavLink>
          <p className="li"> <button className='btn' onClick={()=>navigate("/contact")} >CONTACT US</button></p>
        </ul>
        <div className='navbar_mobile_menu_icon_container'>
          <MdOutlineMenu size={"30"} />
        </div>
    </nav>
    <div className='navbar-bottom'>

    </div>
    </div>
  )
}

export default Navbar