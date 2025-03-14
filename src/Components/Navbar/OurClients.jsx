import React from "react";
import "./OurClients.css";

// import OurClients from "../Navbar/NavbarImages/ourClients.jpg"
import ourclient from "../Navbar/NavbarClientImages/contactus.jpg";
import barc from "../Navbar/NavbarClientImages/barc.jpg"
import cpe from "../Navbar/NavbarClientImages/cpe.png"
import envicon from "../Navbar/NavbarClientImages/envicon.jpg"
import getechnology from "../Navbar/NavbarClientImages/getechnology.jpg"
import isro from "../Navbar/NavbarClientImages/isro.webp"
import jaycetech from "../Navbar/NavbarClientImages/jayceetechnology.png"
import karthikeng from "../Navbar/NavbarClientImages/karthikengineers.jpg"
import kennametal from "../Navbar/NavbarClientImages/kennametal.jpg"
import lpsc from "../Navbar/NavbarClientImages/lpsc.jpg"
import mandisel from "../Navbar/NavbarClientImages/mandisel.jpg"
import nextfirst from "../Navbar/NavbarClientImages/nextfirst.png"
import terrapower from "../Navbar/NavbarClientImages/terrapower.jpg"
import triveni from "../Navbar/NavbarClientImages/triveni.png"


const OurClients = () => {
  return (
    <>
      <div className="Ourclients-container">
        <div className="Ourclients-container_image">
          {/* <img src={ourclient} alt="" /> */}
          <img src="https://plus.unsplash.com/premium_photo-1683134479351-134d66fda33a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="Ourclients-container_box">
          <h1>Our Clients</h1>
          <h3 style={{color:"white", padding: "25px 0"}}>Following are the list of Clients for SISPL</h3>
          <p>
          With so many clients across a multitude of industries, we are proud to be a part of the great things our clients achieve. No matter the industry or department we help, it’s always a pleasure to hear that we’ve done a great job...
          </p>
        </div>
      </div>
      <div className="ourclients-company-details">
        <h2>Who we serve</h2>

        {/* <!-- From Uiverse.io by gharsh11032000 -->  */}
        <div class="card-container">
          <div class="weserve-card">
            <div class="front-content">
              <p>Trusted by Industry Leaders</p>
            </div>
            <div class="content">
              {/* <p class="heading">Card Hover</p> */}
              <p>
                Relied on by industry leaders for innovative solutions and unmatched expertise.
              </p>
            </div>
          </div>
        </div>

        <div class="card-container">
          <div class="weserve-card">
            <div class="front-content">
              <p>Our Valued Partners</p>
            </div>
            <div class="content">
              {/* <p class="heading">Card Hover</p> */}
              <p>
                Together with our partners, we drive innovation and success.
              </p>
            </div>
          </div>
        </div>

        <div class="card-container">
          <div class="weserve-card">
            <div class="front-content">
              <p>Clients Who Inspire Us</p>
            </div>
            <div class="content">
              {/* <p class="heading">Card Hover</p> */}
              <p>
                Inspired by our clients to innovate, collaborate, and achieve excellence every day.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="ourclient-logo">
      <div class="ourclient-card">
        <div class="card-info">
          <img src={barc} alt="" />
        </div>
      </div>
      <div class="ourclient-card">
        <div class="card-info">
        <img src={cpe} alt="" />
        </div>
      </div>
      <div class="ourclient-card">
        <div class="card-info">
        <img src={envicon} alt="" />
        </div>
      </div>
      <div class="ourclient-card">
        <div class="card-info">
        <img src={getechnology} alt="" />
        </div>
      </div>
      <div class="ourclient-card">
        <div class="card-info">
        <img src={isro} alt="" />
        </div>
      </div>
      <div class="ourclient-card">
        <div class="card-info">
        <img src={jaycetech} alt="" />
        </div>
      </div>
      <div class="ourclient-card">
        <div class="card-info">
        <img src={karthikeng} alt="" />
        </div>
      </div>
      <div class="ourclient-card">
        <div class="card-info">
        <img src={kennametal} alt="" />
        </div>
      </div>
      <div class="ourclient-card">
        <div class="card-info">
        <img src={lpsc} alt="" />
        </div>
      </div>
      <div class="ourclient-card">
        <div class="card-info">
        <img src={mandisel} alt="" />
        </div>
      </div>
      <div class="ourclient-card">
        <div class="card-info">
        <img src={nextfirst} alt="" />
        </div>
      </div>
      <div class="ourclient-card">
        <div class="card-info">
        <img src={terrapower} alt="" />
        </div>
      </div>
      <div class="ourclient-card">
        <div class="card-info">
        <img src={triveni} alt="" />
        </div>
      </div>
      {/* <div class="ourclient-card">
        <div class="card-info">
        <img src="" alt="" />
        </div>
      </div> */}
      </div>
      <marquee className="client-image" behavior="" direction="right">Developed by==Samith R Gowda</marquee>
    </>
  );
};

export default OurClients;
