import React from 'react'
import { FaHome, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
        <NavLink to="#" className="a">
          <h2 className="company" style={{ textAlign: "center", marginBottom: "10px", paddingTop: "20px" }}>Sarayu Infotech Solution Pvt.Ltd</h2>
          <div className='footer-heading-line'></div>
        </NavLink>
        <div className="container">
          <div className="wrapper">
            {/* <div className="footer-widget">
              <p className="desc">
                Sarayu Infotech Solutions Pvt. Ltd. a company floated by a team of highly experienced engineers worked in the reputed process instrumentation industries to address a cause of the Indian Electronics, Electrical, Computers, Information technology,
              </p>

              <ul className="socials">
                <li>
                  <NavLink to="#" className="a"><i className="fab fa-facebook-f"></i></NavLink>
                </li>

                <li>
                  <NavLink to="#" className="a"><i className="fab fa-twitter"></i></NavLink>
                </li>

                <li>
                  <NavLink to="#" className="a"><i className="fab fa-instagram"></i></NavLink>
                </li>

                <li>
                  <NavLink to="#" className="a"><i className="fab fa-linkedin"></i></NavLink>
                </li>
              </ul>
            </div> */}

            <div className="footer-widget">
              <h6>Products</h6>
              <div className='footer-line'></div>
              <ul className="links">
                <li><NavLink to="#" className="a">AboutUs</NavLink></li>
                <li><NavLink to="#" className="a">Catalogue</NavLink></li>
                <li><NavLink to="#" className="a">Clients</NavLink></li>
                <li><NavLink to="#" className="a">Products</NavLink></li>
                <li><NavLink to="#" className="a">Contact</NavLink></li>
              </ul>
            </div>

            <div className="footer-widget">
              <h6>Achievements</h6>
              <div className='footer-line'></div>
              <ul className="links">
                <li><NavLink to="#" className="a">Vibration Analyzer</NavLink></li>
                <li><NavLink to="#" className="a">Power Moniter</NavLink></li>
                <li><NavLink to="#" className="a">Vibration Meter</NavLink></li>
                <li><NavLink to="#" className="a">User Display Module</NavLink></li>
                <li><NavLink to="#" className="a">Data Acquisition System</NavLink></li>
              </ul>
            </div>

            <div className="footer-widget">
              <h6>Address</h6>
              <div className='footer-line'></div>
              <ul className="links">
                <li>
                  <FaHome className="unique-footer-icons" /> #177,12th 'A' Cross, 2nd Floor, 2nd
                  Stage, West of Chord Road,
                  Mahalakshmipuram,
                  Bengaluru – 560086.
                </li>
                <li>
                  <FaPhoneAlt className="unique-footer-icons" /> +91-80-23597410
                </li>
                <li>
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
        <a href="https://sprunkiplay.com/" target="_blank" rel="noopener noreferrer">
          Sprunki Game
        </a>
      </div>
    </div>

        <div className="copyright-wrapper">
          <p>Sarayu Infotech Solution Pvt.Ltd. @2025 All Rights Reserved.
            <NavLink to="#" target="blank"></NavLink>
          </p>
        </div>

      </footer>
  )
}

export default Footer