import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Contact from './Components/Navbar/Contact';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Components/Navbar/AboutUs';
import Footer from './Components/common/Footer';
import Products from './Components/Navbar/Products';
import ProductsDetails from "./Components/ProductsMore/ProductsDetails"; 
import ChatBot from "react-chatbotify";
import Application from './Components/Applications/Application';


const App = () => {
  // Chatbot Configuration
  const id = "my-chatbot-id"
  const flow = {
    "start": {
        message: "Hello there!",
        path: "end"
    },
    "end": {
        message: "See you, goodbye!"
    }
  }
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing type
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
       <Navbar />
       <Routes>
        <Route path="/" element={<Hero /> } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<ProductsDetails />} />
        <Route path="/applications" element={<Application />} />
       </Routes>

       {/* Chatbot with predefined responses */}
       <ChatBot id={id} flow={flow} />

       <Footer />
    </div>
  );
};

export default App;
