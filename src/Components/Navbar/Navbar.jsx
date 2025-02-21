import React, { useState } from 'react';
import './Navbar.css';
import navbarlogo from "../../assets/Logo-removebg-preview.png";
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  const [toogle, settoogle] = useState(false)
  
  const [navbarToggler , setNavbarToggler] = useState(false)
  return (
    <header className="navbar-header">
      <div className="navbar-row">
        <div className="navbar-logo-container">
          <p className="navbar-logo-wrapper">
            <img className="navbar-logo" src={navbarlogo} alt="Main Logo" />
          </p>
        </div>
        
        <div className="navbar-menu-container">
          <div className="navbar-nav-container">
            <section className="navbar-section">
              <nav className="navbar-custom">
                <button
                  className="navbar-toggler-custom"
                  type="button"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon-custom"></span>
                </button>
                <div className="navbar-collapse-custom">
                  <ul className="navbar-nav-list">
                    <li className="navbar-item">
                      <NavLink className="navbar-link" to="/">
                        HOME
                      </NavLink>
                    </li>
                    <li className="navbar-item">
                      <NavLink className="navbar-link" to="/aboutus">
                        ABOUT US
                      </NavLink>
                    </li>
                    <li className="navbar-item">
                      <NavLink className="navbar-link" to="/products">
                        PRODUCTS
                      </NavLink>
                    </li>
                    <li className="navbar-item dropdown">
                      <NavLink className="navbar-link dropdown-toggle" to="/catalogues" role="button">
                        CATALOGUES
                      </NavLink>
                    </li>
                    <li className="navbar-item dropdown">
                      <NavLink className="navbar-link dropdown-toggle" to="/clients" role="button">
                        CLIENTS
                      </NavLink>
                    </li>
                    <li className="navbar-item">
                      <NavLink className="navbar-link" to="/contact">
                        CONTACT US
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </section>
          </div>
          <div className="navbar-secondary-menu">
            <div className="navbar-links-group">
              <NavLink to="/campus" className="navbar-secondary-link">
                INTRENSHIP
              </NavLink>
              <NavLink to="/scholarships" className="navbar-secondary-link">
                FACILITIES
              </NavLink>
              <NavLink to="/tp" className="navbar-secondary-link">
                T&P
              </NavLink>
              <NavLink to="/ic3" className="navbar-secondary-link">
                IC3
              </NavLink>
              <NavLink to="/sports" className="navbar-secondary-link">
                ACHIEVEMENTS
              </NavLink>
            </div>
            <div className="navbar-apply-container">
              <NavLink to="/applications" className="navbar-apply-button" onMouseEnter={() =>settoogle(false)}>
                Applications
              </NavLink>
              <div className='navbar-application-hover-filter'>Portable Vibration Analyzer</div>
                <div>Portable Vibration Meter</div>
            </div>
          </div>
        </div>

      <div className='mobile_menu_icon' onClick={()=>setNavbarToggler(!navbarToggler)}>menu</div>
      {navbarToggler && <div className='mobile_menu_drop_down'>
        <ul>
          <li>dasdasd</li>
          <li>asdasd</li>
          <li>asdads</li>
          <li>asdasd</li>
          <li>asdasd</li>
        </ul>
      </div>}
      </div>
    </header>
  );
};

export default Navbar;
