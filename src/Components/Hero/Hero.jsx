import React, { useEffect, useState } from 'react'
import "./Hero.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { GiArcheryTarget } from "react-icons/gi";
import { MdVisibility } from "react-icons/md"; 
import Card from './Card';
import CompanyDetail from './CompanyDetail';
import { useNavigate } from 'react-router-dom';

// Note: For Vite, images should either be imported or placed in public folder
// I'll show both approaches:

// Option 1: Import images (if they're in src folder)
import CoreValue from "../Image/newCoreValues.png?url"
import SarayuHomeCloud from "../Image/SarayuHomeCloud.jpg?url"
import spindleAuto from "../Hero/HeroCardImages/spindleAuto.webp?url"
import cable from "../Hero/HeroMainPageimages/cable.jpg?url"
import spintest from "../Hero/HeroMainPageimages/spintest.jpg?url"
import iiots from "../Hero/HeroMainPageimages/iiots.jpg?url"
import pumpCompressor from "../Hero/HeroMainPageimages/pump.jpg?url"
import Recprocating from "../Hero/HeroMainPageimages/reprocating.jpg?url"
import smartsen from "../Hero/HeroMainPageimages/smartsensor.jpg?url"


import vms3000 from "../Hero/HeroCommonCard/HeroSectionProductImage/vm3000.png?url"
import vms9620 from "../Hero/HeroCommonCard/HeroSectionProductImage/image.png?url"
import vms8000 from "../Hero/HeroCommonCard/HeroSectionProductImage/VMS800.png?url"
import vtms from "../Hero/HeroCommonCard/HeroSectionProductImage/vtms.png?url"
import portableVibration from "../Hero/HeroCommonCard/HeroSectionProductImage/PortableVibrationAnalyzer.png?url"

// import vms from "../Hero/HeroCommonCard/HeroSectionProductImage/IMG_20220714_105927.jpg?url"
// import vms9620 from "../Hero/HeroCommonCard/HeroSectionProductImage/VM8000.jpg?url"
// import vms3000 from "../Hero/HeroCommonCard/HeroSectionProductImage/VMS3000.png?url"
import updateLiniear from "../Hero/HeroCommonCard/HeroSectionProductImage/updateli.png?url"

// OR Option 2: Use public folder paths (if images are in public folder)
// const CoreValue = "/Image/newCoreValues.png"
// const SarayuHomeCloud = "/Image/SarayuHomeCloud.jpg"
// etc.

const Hero = (img) => {
  const navigate = useNavigate()
  const handlesubmit = () => {
    navigate("/HeroServices")
  }
  const [count, setCount] = useState(3)
  
  const carouselData = [
    {
      id: 1,
      title: "Condition Monitoring System - VMS-3000",
      // imgSize: "10%",
      img: Recprocating,
      img2: vms3000, 
      description: "VMS-3000 series is a continuous online monitoring system suitable for condition monitoring and machinery protection applications and is designed to fully meet the requirements of the American Petroleum Institute’s API 670 standard for such systems.",
    },
    {
      id: 2,
      title: "Vibration Monitor VM-9620",
      // imgSize: "40%",
      img: "https://thumbs.dreamstime.com/z/detailed-technical-sketch-showcases-engineering-design-hydroelectric-dam-turbine-highlighting-intricate-components-345087609.jpg?ct=jpeg",
      img2: vms9620,
      description: "VM-9620 is a two channel vibration monitoring system suitable for condition monitoring and machinery protection applications .The system is +24V DC operated and industry standard DIN sized Rack mountable PPE+PS enclosure."
    },
    {
      id: 3,
      title: "Vibration Monitor 8000",
      img: "https://cdn.sanity.io/images/0vv8moc6/turbomag/942a7fd82047eb952b64923e10292391b8200db7-6144x3930.jpg?fit=crop&auto=format",
      img2: vms8000,
      // imgSize: "25%",
      description: "VM8000 is a 10 Channel vibration monitoring system suitable for condition monitoring and machinery protection application.The system measures 10-channel Non-Contact /Casing vibration."
    },
    {
      id: 4,
      title: "Vibration and Temperature Monitoring System - VTMS-x12x",
      // imgSize: "40%",
      img: "https://plus.unsplash.com/premium_photo-1661963536116-543d5014d872?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: vtms,
      description: "Vibration Temperature Monitoring System is a continuous online monitoring system suitable for condition monitoring and machinery protection applications.."
    },
    {
      id: 5,
      title: "Linear Proximity Transducer System",
      // imgSize: "40%",
      img: pumpCompressor,
      img2: updateLiniear, 
      description: "The VS-800 is eddy current type non-contact displacement/vibration transducer, used for measuring Shaft Vibration, Axial Position, Rotating Speed and Phase Mark (Phase Reference) from small rotating machinery to large critical machinery such as turbines and compressors in plants."
    },
    {
      id: 6,
      title: "Portable Vibration Analyzer / Dynamic Balancer VA221",
      // imgSize: "40%",
      img: spintest,
      img2: portableVibration,
      description: "Vibration analyzer is a high performance, full-featured FFT data collector, signal analyzer and balancer which allow easy condition monitoring of equipment found in many industries such as power generation, petro-chemical, pulp and paper."
    },
    {
      id: 7,
      title: "Vibration Meter",
      // imgSize: "40%",
      img: cable,
      img2: updateLiniear,
      description: "The Portable Vibration Meter is a battery powered portable instrument designed to operate with a constant current type accelerometer to make vibration measurement simple and convenient."
    },
    {
      id: 8, 
      title: "Automated Spindle Test System.",
      // imgSize: "40%",
      img: iiots,
      img2: updateLiniear,
      description: "The Spindle test and analysis system is utilized to pre-condition of the spindles before they are installed in a machine. This process is accomplished over several hours at various increased running speeds which can be selected by the end user."
    },
    {
      id: 9,
      title: "Advancements in IIOT: Transforming Industry 4.0",
      // imgSize: "40%",
      img: smartsen,
      img2: updateLiniear, 
      description: "The VS-800 is an eddy current type non-contact displacement/vibration transducer, used for measuring Shaft Vibration, Axial Position, Rotating Speed, and Phase Mark."
    },
  ]

  useEffect(() => {
    AOS.init(); // Initialize AOS
    const interval = setInterval(() => {
      if (count < carouselData.length) {
        setCount((prev) => prev + 1)
      } else {
        setCount(1)
      }
    }, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [count])

  return (
    <>
      {carouselData.map((item, index) => {
        return (
          count === item.id && (
            <div key={item.id} className='main_banner_section'>
              <img className='main_banner_section_image' src={item.img} alt={item.title} />
              <div className='main_banner_section_content_container'>
                <div>
                  <h2 data-aos="fade-down">{item.title}</h2>
                  <div data-aos="fade-up">{item.description}</div>
                  <div data-aos="fade-up" className='home_hero_section_readmore_btn'>
                    <button onClick={handlesubmit}>Read more...</button>
                  </div>
                </div>
                <div className='left-side-image'>
                  <img src={item.img2} alt={item.title} data-aos="fade-left" />
                </div>
              </div>
            </div>
          )
        );
      })}

      {/* hero company details */}
<div>
  <CompanyDetail />
</div>


 








   {/* mission vision card */}
    <div className="mission-vision-container">
      {/* Mission Card */}
      <div data-aos="flip-left" className="our-mission-card">
        <GiArcheryTarget className="icon" /> {/* Mission Icon */}
        <h2>MISSION</h2>
        <div className="card_divider"></div>
        <p>
        To provide a quality solution for critical vibration measurement in turbines, <b>MOTORS,</b> <b>BLOWERS,</b> <b>SPINDLES PUMPS</b> etc.. to enable the customers to achieve the better quality, productivity, creativity and reducing the noise pollution of the environment and the health hazards to the personnel involved in the operation of the plants.
        </p>
      </div>

      {/* Vision Card */}
      <div data-aos="flip-right" className="our-mission-card">
        < MdVisibility className="icon" /> {/* Vision Icon */}
        <h2>VISION</h2>
        <div className="card_divider"></div>
        <p>
        Number one total solution provider for precision vibration measurement, sensing and analysis of all rotating machineries.
        </p>
      </div>
    </div>



   {/* core vallues */}
    <div  className="home-container">
      <h1 className="title">SISPL's CORE VALUES AND ETHICS</h1>
      <div className="core_divider"></div>
      <img src={CoreValue} alt="Core Values and Ethics" className="core-values-image" style={{ width: "90%", maxWidth: "1000px", height: "auto", borderRadius: "10px", }} />
    </div>


      {/* HERO CARD COMPONENET */}
<div>
  <Card />
</div>
    </>
  )
}

export default Hero