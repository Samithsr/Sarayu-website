import React, { useEffect, useState } from 'react'
import "./Hero.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { GiArcheryTarget } from "react-icons/gi";
import { MdVisibility } from "react-icons/md"; 
import CoreValue from "../Image/newCoreValues.png"
import SarayuHomeCloud from "../Image/SarayuHomeCloud.jpg"

import Card from './Card';

const Hero = () => {
  const [count,setCount] = useState(3)
  const carouselData = [
    {
      id : 1,
      title : "Reciprocating and Turbine Engines",
      imgSize : "10%",
      img : "https://media.licdn.com/dms/image/v2/D5612AQHPb2AAQOwaLQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1672073000577?e=2147483647&v=beta&t=YIP5CBqDh4lyFjaRhfoAedLwyM9fbfLH3xBvJYntBHs",
      description : "Vibration analyzer is a high performance, full-featured FFT data collector, signal analyzer and balancer which allow easy condition monitoring of equipment found in many industries such as power generation, petro-chemical, pulp and paper",
    },
    {
      id : 2,
      title : "Technical Illustration of a Hydroelectric Dam Turbine",
      imgSize : "40%",
      img : "https://thumbs.dreamstime.com/z/detailed-technical-sketch-showcases-engineering-design-hydroelectric-dam-turbine-highlighting-intricate-components-345087609.jpg?ct=jpeg=",
      description : "VMS-3000 series is a continuous online monitoring system suitable for condition monitoring and machinery protection applications and is designed to fully meet API 670 standards."
    },
    {
      id : 3,
      title : "Gas Turbine",
      // img : "https://img.freepik.com/premium-photo/gas-turbine-power-plant-with-gas-turbines-operation-highlighting-combustion-process_372999-25785.jpg",
      img : "https://cdn.sanity.io/images/0vv8moc6/turbomag/942a7fd82047eb952b64923e10292391b8200db7-6144x3930.jpg?fit=crop&auto=format",
      imgSize : "25%",
      description : "Vibration Temperature Monitoring System is a continuous online monitoring system suitable for condition monitoring and machinery protection applications."
    },
    {
      id : 4,
      title : "Steam Turbines",
      imgSize : "40%",
      // img : "https://plus.unsplash.com/premium_photo-1661963536116-543d5014d872?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=",
      img : "https://plus.unsplash.com/premium_photo-1661963536116-543d5014d872?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=",
      description : "The VS-800 is an eddy current type non-contact displacement/vibration transducer, used for measuring Shaft Vibration, Axial Position, Rotating Speed, and Phase Mark."
    },
    {
      id : 5,
      title : "Pump Compressor Turbine",
      imgSize : "40%",
      img : "https://www.technologyedge.biz/wp-content/uploads/2020/02/gas-turbine.jpg",
      description : "The VS-800 is an eddy current type non-contact displacement/vibration transducer, used for measuring Shaft Vibration, Axial Position, Rotating Speed, and Phase Mark."
    }
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
    {carouselData.map((item , index)=>{
      return(
        count === item.id && <div key={item.id} className='main_banner_section'>
        <img className='main_banner_section_image' src={item.img}  />
      <div style={{color:"black"}} className='main_banner_section_content_container'>
        <div style={{display:"flex",flexDirection:"column"}}>
        <h2 data-aos="fade-down">
          {item.title}
          </h2>
          <div data-aos="fade-up">
          {item.description}
          </div>
          </div> 
      </div>
    </div>
    
  )
})}
   



   {/* HERO CARD COMPONENET */}


<div>
  <Card />
</div>








<section className="company-container">
  <div className="company-header">
    {/* <div className="company-icon">🏢</div> */}
    <h2 className="company-title">Sarayu Infotech Solutions Pvt. Ltd.</h2>
    <hr className="sarayu_divider" data-aos="fade-up" />
  </div>

  <div className="company-content">
    <p data-aos="fade-up">
      <strong className='sarayu-home-heading'>Sarayu Infotech Solutions Pvt. Ltd.</strong> (SISPL) was incorporated in 2002 by a team of 
      experienced engineers from the Indian Institute of Science. With expertise in industrial instrumentation, 
      we specialize in providing cutting-edge solutions for process control industries.
    </p>

    <p data-aos="fade-up">
      SISPL has successfully designed, developed, and manufactured advanced instrumentation systems, including 
      accelerometer-based vibration analysis, non-contact eddy current-based monitoring, and precision 
      capacitance, pressure, and temperature measurement solutions.
    </p>

    <p data-aos="fade-up">
      Our systems are essential for condition monitoring of various rotating machineries, such as steam turbines 
      and heavy-duty spindles. We offer multi-channel data acquisition analyzers, ranging from 8 to 40 channels, 
      ensuring easy maintenance and enhanced productivity.
    </p>

    <p data-aos="fade-up">
      SISPL proudly serves esteemed clients like BARC, ISRO, Triveni Turbines, MAN Diesel, Kennametal, and many 
      more. Additionally, we have successfully executed fully automated test beds, integrating our proprietary 
      data acquisition systems with custom front-end software for in-depth analysis and historical data tracking.
    </p>

    <p data-aos="fade-up"> 
      We are committed to offering total solutions for process industries, taking on specialized instrumentation 
      design and development projects as per customer requirements.
    </p>
  </div>
</section>


  

    <div className="mission-vision-container">
      {/* Mission Card */}
      <div data-aos="flip-left" className="card">
        <GiArcheryTarget className="icon" /> {/* Mission Icon */}
        <h2>MISSION</h2>
        <div className="card_divider"></div>
        <p>
        To provide a quality solution for critical vibration measurement in turbines, <b>MOTORS,</b> <b>BLOWERS,</b> <b>SPINDLES PUMPS</b> etc.. to enable the customers to achieve the better quality, productivity, creativity and reducing the noise pollution of the environment and the health hazards to the personnel involved in the operation of the plants.
        </p>
      </div>

      {/* Vision Card */}
      <div data-aos="flip-right" className="card">
        < MdVisibility className="icon" /> {/* Vision Icon */}
        <h2>VISION</h2>
        <div className="card_divider"></div>
        <p>
        Number one total solution provider for precision vibration measurement, sensing and analysis of all rotating machineries.
        </p>
      </div>
    </div>



    <div  className="home-container">
      <h1 className="title">SISPL's CORE VALUES AND ETHICS</h1>
      <div className="core_divider"></div>
      <img src={CoreValue} alt="Core Values and Ethics" className="core-values-image" style={{ width: "90%", maxWidth: "1000px", height: "auto", borderRadius: "10px", }} />
    </div>
    


    







{/* 
    <h3 style={{textAlign:"center",fontSize:"30px",margin:"20px 0",}}>Our Products</h3>
    <div className='hero_section_main_container'>
      <div className='vertical_line'></div>
          <div className='hero_sction_left_section'>
            <h4 style={{margin:"10px 0",position:"relative", textAlign:"end", width:"100%"}}>Portable Vibration Analyzer / Dynamic Balancer VA221 <div className='left_section_dot'></div> </h4>
            <p>Vibration analyzer is a high performance, full-featured FFT data collector, signal analyzer and balancer which allow easy condition monitoring of equipment found in many industries such as power generation, petro-chemical, pulp and paper.</p>
          </div>
          <div className='hero_sction_right_section'>
            <img src="https://sarayuinfotech.in/images/sarayu/newproductimages/PortableVibrationAnalyzer%20.png" alt="" />
          </div>
    </div> */}


    {/* <div className='hero_section_main_container'>
      <div className='vertical_line'></div>
          <div className='hero_sction_left_section'>
            <img src="https://sarayuinfotech.in/images/sarayu/newproductimages/PortableVibrationAnalyzer%20.png" alt="" />
          </div>
          <div className='hero_sction_right_section'>
            <h4 style={{margin:"10px 0",position:"relative", textAlign:"start", width:"100%"}}>Portable Vibration Analyzer / Dynamic Balancer VA221 <div className='right_section_dot'></div> </h4>
            <p>Vibration analyzer is a high performance, full-featured FFT data collector, signal analyzer and balancer which allow easy condition monitoring of equipment found in many industries such as power generation, petro-chemical, pulp and paper.</p>
          </div>
    </div> */}


    









{/* 
    <div className='hero'>
        <div className="hero_text">
            <h1>We ensure better perpormance for a better world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veniam! Our mission is to provide the best solutions for a better tomorrow</p>
            <button className='btn'>Expore more</button>
        </div>

    </div> */}
    </>
  )
}

export default Hero