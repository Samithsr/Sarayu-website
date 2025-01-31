// Products.jsx
import React from 'react';
import './Products.css'; // Create this CSS file
import Hear from "../../assets/haer.jpg"
import Iphon from "../../assets/iphon.jpg"
import LinearProximeter from "../../assets/linearproximeter.jpg"
import Img from '../common/Img';
import VibrationMonitor from "../../Components/Image/VibrationMonitor.jpg"
import VM9620 from "../../Components/Image/VM9620.jpg"
import LinearProxiM from "../../Components/Image/LinearProxiM.jpg"
import VibrationAnalyzer from "../../Components/Image/VibrationAnalyzer.jpg"
import PortableVibration from "../../Components/Image/PortableVibration.jpg"

const Products = () => { 
  const products = [
    
    {
      id: 1,
      title: "Condition Monitoring System",
      description: "VMS-3000 series is a continious online monitoring system suitable for condition monitoring and machinery protection.",
      image: <Hear/>
    },
    { 
      id: 2,
      title: "Vibration and Temprature Monitoring System",
      description: "Vibration Temperature Monitoring System is a continuous online monitoring system.",
      image: <LinearProximeter />
    },
    {
      id: 3,
      title: "Vibration Monitor VM-8000",
      description: "VM-8000 is a continuous online monitoring system suitable for condition monitoring and machinery protection application.",
      image: <VibrationMonitor />
    },
    {
      id: 4,
      title: "Vibration Monitor VM-9620",
      description: "VM-9620 is a two channel vibration monitoring system suitable for condition monitoring and machinery protection applications..",
      image: <VM9620 />
    },
    {
      id: 5,
      title: "Linear Proximity Transducer System",
      description: "The VS-800 is eddy current type non-contact displacement/vibration transducer, used for measuring Shaft Vibration, Axial Position..",
      image: <LinearProxiM />
    },
    {
      id: 6,
      title: "Vibration Analyzer",
      description: "Vibration Analyzer is a digital signal controller based system which is used to analyze the vibration signals,.",
      image: <VibrationAnalyzer />
    },
    {
      id: 7,
      title: "Portable Vibration Analyzer",
      description: "Vibration analyzer is a high performance, full-fea-tured FFT data collector, signal analyzer and balancer which allow easy condition..",
      image: <PortableVibration />
    },
    {
      id: 8,
      title: "Power Monitor",
      description: "3-Phase Power Monitoring system is a digital signal controller based system that can be used to analyze and record the power line signal,.",
      image: "product4.jpg"
    },
    {
      id: 9,
      title: "Vibration Meter",
      description: "The Portable Vibration Meter is a battery powered portable instrument designed to operate with a constant type accelerometer to make vibration.",
      image: "product4.jpg"
    },
    {
      id: 10,
      title: "Automated Spindle Tset System",
      description: "The Spindle test and analysis system is utilized to pre-condition of the spindles before they are installed in a machine,.",
      image: "product4.jpg"
    }
    
  ];

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div className="product-card-wrapper" key={product.id}>
          <div className="product-card">
           <Img img={product.image} title={product.title} />
            <div className="product-content">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;