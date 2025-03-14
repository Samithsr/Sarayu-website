import React, { Routes, useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdOutlineArrowRightAlt } from "react-icons/md";

import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [Formdata, setFormdata] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...Formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      const res = await axios.post("", Formdata);
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
    e.preventDefault();
    console.log(Formdata);
  };

  return (
    <>
      <section className="contact-section">
  <div className="contact-content">
    <h1>Contact Us</h1>
    <h4>Have any query or requirement? We are just a mail away.</h4>
    <p className="contact-breadcrumb">
      <span className="breadcrumb-home">HOME</span>
      <MdOutlineArrowRightAlt /> SUPPORT <MdOutlineArrowRightAlt /> CONTACT US
    </p>
  </div>
  <div className="contact-image-container">
    <img
      src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Contact Us"
    />
  </div>
</section>






      <section className="contact">
        <div className="content">
          {/* <img src={contactus} alt="" /> */}
          {/* <p> Contact Us</p> */}
        </div>

        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  #177,12th 'A' Cross, 2nd Floor, 2nd Stage, West of Chord Road,
                  Mahalakshmipuram, Bengaluru – 560086. Tel Fax: +91-80-23597410
                  email: info@sarayuinfotech.in
                </p>
              </div>
            </div>

            <div className="box">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>+91-80-23597410</p>
              </div>
            </div>

            <div className="box">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>sales@sarayuinfotech.in</p>
              </div>
            </div>
          </div>

          <div className="contactForm">
            <form onSubmit={handleSubmit}>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input
                  type="text"
                  name="username"
                  value={Formdata.username}
                  required
                  onChange={handleChange}
                />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input
                  type="email"
                  name="email"
                  value={Formdata.email}
                  required
                  onChange={handleChange}
                />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea
                  name="message"
                  value={Formdata.message}
                  required
                  onChange={handleChange}
                ></textarea>
                <span>Type your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>

        <div className="chatbot-container">
          <div className="chatbot-popup">
            <div className="chat-header">
              <div className="header-info">
                {/* <h2 className='logo-text'>Chatbot</h2> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
