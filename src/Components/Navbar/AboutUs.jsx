import React from "react";
import "./AboutUs.css"; // Import the CSS file


import companyimage from "../../assets/company-image.jpg"
import technology from "../../assets/techonology.jpg"
import TeamExpertise from "../../assets/TeamExpertise.webp"
import tools from "../../assets/tools.jpg"
import AboutUsContent from "../CommonAboutPage/CommonAbout";
import footer from '../../assets/footerLogo.jpg'

const AboutUs = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <AboutUsContent
          show={true}
          title="Introduction to Sarayu Infotech Solutions Pvt. Ltd."
          content="Srayu Infotech Solutions Pvt. Ltd. was established by a team of highly experienced engineers from reputed process instrumentation industries. The company aims to address the requirements of the Indian Electronics, Electrical, Computers, IT, Instrumentation, and academic engineering communities. With a vision to focus on embedded systems development, the company specializes in data acquisition and control of process parameters using state-of-the-art technology" />

        <div className="about-image-section">
          <img src={companyimage} alt="Company" />
        </div>
      </div>
      <div className="about-container">

        <div className="about-image-section">
          <img src={technology} alt="Company" />
        </div>
        <AboutUsContent
          show={false}
          title="Innovative Product Offerings and Technology"
          content="SISPL Located in the heart of Silicon Valley on West of Chord Road, Bangalore, SISPL stands at the forefront of innovation with a dedicated team of 15 engineers. The company specializes in developing advanced industrial instrumentation products, including temperature monitoring systems, resistance monitoring, magnetic levitation solutions, vibration analysis tools, PID controllers, speed profilers, MODBUS-based I/O, and electric drives. Leveraging expertise in embedded software development, hardware design, and algorithm optimization, SISPL consistently delivers cutting-edge solutions tailored for scientific and industrial applications."
        />
      </div>

      <div className="about-container">

        <div className="about-image-section">
          <img src={TeamExpertise} alt="Company" />
        </div>
        <AboutUsContent
          show={false}
          title="Team Expertise and Capabilities"
          content="SISPL boasts a robust infrastructure with 15 systems connected via LAN and equipped with internet connectivity, enabling engineers to access online datasheets and product information seamlessly. The team is proficient in utilizing advanced development tools, including dedicated target modules for DSPs like MOTOROLA and ADSP, in-circuit debuggers, JTAG interfaces, and programmers. With hands-on experience in integrated development environments such as Code Warrior, Code Composer, MPLAB, VDSP, and IAR Kickstart, the engineers excel in embedded software development, hardware design, and crafting optimized algorithms to drive innovation in scientific and industrial applications." />
      </div>


      <div className="about-container">

        <div className="about-image-section">
          <img src={tools} alt="Company" />
        </div>
        <AboutUsContent
          show={false}
          title=" Infrastructure and Tools at SISPL"
          content="SISPL provides essential exposure to engineers starting their careers in embedded development, focusing on microcontrollers, DSPs, telecom, audio, and related fields. The company offers hands-on training, sharing its extensive industrial experience and assisting in real-world development projects using its own designed hardware platforms in the advanced R&D lab. Engineers have access to cutting-edge infrastructure, development tools, and the expertise of experienced SISPL engineers, ensuring a comprehensive learning environment to develop practical skills in embedded systems development." />
      </div>



      <footer>
        <div className="container">
          <div className="wrapper">
            <div className="footer-widget">
              <a href="#">
                <h2 className="company">Sarayu Infotech Solution Pvt.Ltd</h2>


              </a>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni natus commodi rem asperiores iste molestias omnis ducimus eligendi aut, ipsam voluptate maiores ipsa placeat officiis minima. In, mollitia hic.
              </p>

              <ul className="socials">
                <li>
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                </li>

                <li>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </li>

                <li>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </li>

                <li>
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                </li>
              </ul>
            </div>

            <div className="footer-widget">
              <h6>Achievements</h6>
              <ul className="links">
                <li><a href="#">AboutUs</a></li>
                <li><a href="#">Catalogue</a></li>
                <li><a href="#">Clients</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="footer-widget">
              <h6>Products</h6>
              <ul className="links">
                <li><a href="#">Vibration Analyzer</a></li>
                <li><a href="#">Power Moniter</a></li>
                <li><a href="#">Vibration Meter</a></li>
                <li><a href="#">User Display Module</a></li>
                <li><a href="#">Data Acquisition System</a></li>
              </ul>
            </div>

            <div className="footer-widget">
              <h6>Address</h6>
              <ul className="links">
                <li><a href="#">#177,12th 'A' Cross, 2nd Floor, 2nd
                  Stage, West of Chord Road,
                  Mahalakshmipuram,</a></li>
                <li><a href="#"></a></li>
                <li><a href="#">Faq</a></li>
                <li><a href="#">Catelouge</a></li>
                <li><a href="#">terms &amp; conditions</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright-wrapper">
          <p>Sarayu Infotech Solution Pvt.Ltd.
            <a href="#" target="blank">DesignTorch</a>

          </p>
        </div>
      </footer>


    </div>
  );
};

export default AboutUs;  