import React from 'react'
import { FaHome, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
        <div to="#" className="company-link">
          <h2 className="company">Sarayu Infotech Solution Pvt.Ltd</h2>
          {/* <div className='footer-line-header-title'></div> */}
        </div>
        <div className="container">
          <div className="wrapper">
            <div className="footer-widget">
              <h6 className="footer-title">Sarayu Infotech Solution Pvt.</h6>
              <div className='footer-line'></div>
              <ul className="links">
                <li><NavLink to="#" className="footer-link">Achievements</NavLink></li>
                <li><NavLink to="#" className="footer-link">About Us</NavLink></li>
                <li><NavLink to="#" className="footer-link">Catalogue</NavLink></li>
                <li><NavLink to="#" className="footer-link">Clients</NavLink></li>
                <li><NavLink to="#" className="footer-link">Contact</NavLink></li>
              </ul>
            </div>

            <div className="footer-widget">
              <h6 className="footer-title">Products</h6>
              <div className='footer-line'></div>
              <ul className="links">
                <li><NavLink to="#" className="footer-link">Vibration Analyzer</NavLink></li>
                <li><NavLink to="#" className="footer-link">Power Monitor</NavLink></li>
                <li><NavLink to="#" className="footer-link">Vibration Meter</NavLink></li>
                <li><NavLink to="#" className="footer-link">User Display Module</NavLink></li>
                <li><NavLink to="#" className="footer-link">Data Acquisition System</NavLink></li>
              </ul>
            </div>

            <div className="footer-widget">
              <h6 className="footer-title">Address</h6>
              <div className='footer-line'></div>
              <ul className="links">
                <li className="footer-text">
                  <FaHome className="unique-footer-icons" /> #177,12th 'A' Cross, 2nd Floor, 2nd
                  Stage, West of Chord Road,
                  Mahalakshmipuram,
                  Bengaluru – 560086.
                </li>
                <li className="footer-text">
                  <FaPhoneAlt className="unique-footer-icons" /> +91-80-23597410
                </li>
                <li className="footer-text">
                  <FaEnvelope className="unique-footer-icons" /> info@sarayuinfotech.in
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              width="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=242&amp;hl=en&amp;q=sarayu info&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        <div className="copyright-wrapper">
          <p className="footer-text">&copy; 2025 Sarayu Infotech Solution Pvt.Ltd. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;
