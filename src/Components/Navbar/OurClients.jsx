import React from "react";
import "./OurClients.css";

// import OurClients from "../Navbar/NavbarImages/ourClients.jpg"
import ourclient from "../Navbar/NavbarImages/contactus.jpg";

const OurClients = () => {
  return (
    <>
      <div className="Ourclients-container">
        <div className="Ourclients-container_image">
          <img src={ourclient} alt="" />
        </div>
        <div className="Ourclients-container_box">
          <h1>Our Clients</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia hic,
            ut ratione facere et dolorum id corrupti eius ullam consectetur quis
            atque earum nemo autem tempora asperiores dignissimos illum commodi,
            laudantium,Lorem ipsum dolor sit amet. officiis praesentium vel
            optio. Consectetur repudiandae, sit consequatur vero aut maxime
            mollitia beatae dignissimos impedit porro quis, laboriosam ipsa..
          </p>
        </div>
      </div>
      <div className="ourclients-company-details">
        <h2>Who we serve</h2>

        {/* <!-- From Uiverse.io by gharsh11032000 -->  */}
        <div class="card-container">
          <div class="card">
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
          <div class="card">
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
          <div class="card">
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
        {/* <marquee className="client-image" behavior="" direction="right">Developed by==Sachin VS VS1</marquee> */}
    </>
  );
};

export default OurClients;
