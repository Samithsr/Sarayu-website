import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';


const CommonAbout = ({ show, title, content, imagePath }) => {
  return (
    <div className="about-content-section">
    
      <div className="about-content">
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="about-button">
          {/* <a href="#">Read More</a> */}
        </div>
      </div>


      <div className="about-social">
        {/* <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a> */}
      </div>
    </div>
  )
}

export default CommonAbout