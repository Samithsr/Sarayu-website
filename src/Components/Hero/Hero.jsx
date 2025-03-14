import React, { useEffect, useState } from 'react'
import "./Hero.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { GiArcheryTarget } from "react-icons/gi";
import { MdVisibility } from "react-icons/md"; 
import CoreValue from "../Image/newCoreValues.png"
import SarayuHomeCloud from "../Image/SarayuHomeCloud.jpg"
import spindleAuto from "../Hero/HeroCardImages/spindleAuto.webp"
// import cablehornes from "../Hero/HeroMainPageimages/cableHor.webp"
import cable from "../Hero/HeroMainPageimages/cable.jpg"
import spintest from "../Hero/HeroMainPageimages/spintest.jpg"
import iiots from "../Hero/HeroMainPageimages/iiots.jpg"
import pumpCompressor from "../Hero/HeroMainPageimages/pump.jpg"
import Recprocating from "../Hero/HeroMainPageimages/reprocating.jpg"
import smartsen from "../Hero/HeroMainPageimages/smartsensor.jpg"




import final from "../Hero/HeroCommonCard/HeroSectionProductImage/FINAL.jpg"
import proximeter from "../Hero/HeroCommonCard/HeroSectionProductImage/20220620_141556.jpg"
import vms from "../Hero/HeroCommonCard/HeroSectionProductImage/IMG_20220714_105927.jpg"
import vms9620 from "../Hero/HeroCommonCard/HeroSectionProductImage/VM8000.jpg"

import Card from './Card';
import CompanyDetail from './CompanyDetail';
import { useNavigate } from 'react-router-dom';


const Hero = (img) => {
  const navigate = useNavigate()
  const handlesubmit = () => {
    navigate("/HeroServices")
  }
  const [count,setCount] = useState(3)
  const carouselData = [
    {
      id : 1,
      title : "Reciprocating and Turbine Engines",
      imgSize : "10%",
      // img : "https://media.licdn.com/dms/image/v2/D5612AQHPb2AAQOwaLQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1672073000577?e=2147483647&v=beta&t=YIP5CBqDh4lyFjaRhfoAedLwyM9fbfLH3xBvJYntBHs",
      img : Recprocating,
      img2 : final, 
      description : "Vibration analyzer is a high performance, full-featured FFT data collector, signal analyzer and balancer which allow easy condition monitoring of equipment found in many industries such as power generation, petro-chemical, pulp and paper",
    },
    {
      id : 2,
      title : "Technical Illustration of a Hydroelectric Dam Turbine",
      imgSize : "40%",
      img : "https://thumbs.dreamstime.com/z/detailed-technical-sketch-showcases-engineering-design-hydroelectric-dam-turbine-highlighting-intricate-components-345087609.jpg?ct=jpeg=",
      img2 : proximeter,
      description : "VMS-3000 series is a continuous online monitoring system suitable for condition monitoring and machinery protection applications and is designed to fully meet API 670 standards."
    },
    {
      id : 3,
      title : "Gas Turbine",
      // img : "https://img.freepik.com/premium-photo/gas-turbine-power-plant-with-gas-turbines-operation-highlighting-combustion-process_372999-25785.jpg",
      img : "https://cdn.sanity.io/images/0vv8moc6/turbomag/942a7fd82047eb952b64923e10292391b8200db7-6144x3930.jpg?fit=crop&auto=format",
      img2 : vms,
      imgSize : "25%",
      description : "Vibration Temperature Monitoring System is a continuous online monitoring system suitable for condition monitoring and machinery protection applications."
    },
    {
      id : 4,
      title : "Steam Turbines",
      imgSize : "40%",
      // img : "https://plus.unsplash.com/premium_photo-1661963536116-543d5014d872?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=",
      img : "https://plus.unsplash.com/premium_photo-1661963536116-543d5014d872?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=",
      img2 : vms9620,
      description : "The VS-800 is an eddy current type non-contact displacement/vibration transducer, used for measuring Shaft Vibration, Axial Position, Rotating Speed, and Phase Mark."
    },
    {
      id : 5,
      title : "Pump Compressor Turbine",
      imgSize : "40%",
      img : pumpCompressor,
      // img : Recprocating,
      img2 : final, 
      // img : "https://www.technologyedge.biz/wp-content/uploads/2020/02/gas-turbine.jpg",
      description : "The VS-800 is an eddy current type non-contact displacement/vibration transducer, used for measuring Shaft Vibration, Axial Position, Rotating Speed, and Phase Mark."
    },
    {
      id : 6,
      title : "Advanced Spindle Automation System for Precision Manufacturing",
      imgSize : "40%",
      img: spintest,
      img2 : proximeter,
      description : "The VS-800 is an eddy current type non-contact displacement/vibration transducer, used for measuring Shaft Vibration, Axial Position, Rotating Speed, and Phase Mark."
    },
    {
      id : 7,
      title : "Cable Horness",
      imgSize : "40%",
      img: cable,
      img2 : vms,
      description : "The VS-800 is an eddy current type non-contact displacement/vibration transducer, used for measuring Shaft Vibration, Axial Position, Rotating Speed, and Phase Mark."
    },
    {
      id : 8,
      title : "Advancements in IIOT: Transforming Industry 4.0",
      imgSize : "40%",
      img: iiots,
      img2 : vms9620,
      description : "The VS-800 is an eddy current type non-contact displacement/vibration transducer, used for measuring Shaft Vibration, Axial Position, Rotating Speed, and Phase Mark."
    },
    {
      id : 9,
      title : "Advancements in IIOT: Transforming Industry 4.0",
      imgSize : "40%",
      img: smartsen,
      img2 : final, 
      description : "The VS-800 is an eddy current type non-contact displacement/vibration transducer, used for measuring Shaft Vibration, Axial Position, Rotating Speed, and Phase Mark."
    },
  ]

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(count < carouselData.length){
        setCount((prev)=>prev+1)
      }else{
        setCount(1)
      }
    },4000)
    return ()=>{
      clearInterval(interval)
    }
  },[count])




  
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
                            <div>
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