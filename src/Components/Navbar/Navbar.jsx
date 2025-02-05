import React from 'react';
import './Navbar.css';
import navbarlogo from "../../assets/Logo-removebg-preview.png";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
                CAMPUS
              </NavLink>
              <NavLink to="/scholarships" className="navbar-secondary-link">
                SCHOLARSHIPS
              </NavLink>
              <NavLink to="/tp" className="navbar-secondary-link">
                T&P
              </NavLink>
              <NavLink to="/ic3" className="navbar-secondary-link">
                IC3
              </NavLink>
              <NavLink to="/sports" className="navbar-secondary-link">
                SPORTS
              </NavLink>
            </div>
            <div className="navbar-apply-container">
              <NavLink to="/apply" className="navbar-apply-button">
                APPLY NOW
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
