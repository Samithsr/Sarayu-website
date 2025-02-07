import React from 'react';
import "./ProductsDetails.css";
import VibrationM from "../../Components/Image/vibrationMonitor.jpg";
import Sensor from "../../Components/Image/PortableVibration.jpg";
import Final from "../../Components/Image/FINAL.png";
import VibrationA from "../../Components/Image/VibrationAnalyzer.jpg";
import Iiot from "../../Components/Image/image.png";

const services = [
  { id: 1, title: "Vibration Monitor System", imgSrc: VibrationM, link: "#" },
  { id: 2, title: "Vibration Monitor Sensor", imgSrc: Sensor, link: "#" },
  { id: 3, title: "Hornies", imgSrc: VibrationA, link: "#" },
  { id: 4, title: "Automations", imgSrc: Final, link: "#" },
  { id: 5, title: "IIOT", imgSrc: Iiot, link: "#" }
];

const ProductsDetails = () => {
  return (
    <div className="services-container">
      {services.map((service) => (
        <div key={service.id} className="service-item">
          <img src={service.imgSrc} alt={service.title} className="service-img" />
          <h3 className="service-title">
            {service.title} <span className="arrow-icon">➜</span>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default ProductsDetails;

        
    




  //  <div class="card_container">
  //   <div class="card">
  //     <div class="content">
  //       <p class="heading">Card Hover Effect
  //       </p><p class="para">
  //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
  //         laboriosam at voluptas minus culpa deserunt delectus sapiente
  //         inventore pariatur
  //       </p>
  //       <button class="btn">Read more</button>
  //     </div>
  //   </div>
  //   </div >
