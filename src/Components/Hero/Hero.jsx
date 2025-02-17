import React, { useEffect, useState } from 'react'
import "./Hero.css"

const Hero = () => {
  const [count,setCount] = useState(3)
  const carouselData = [
    {
      id : 1,
      title : "Portable Vibration Analyzer / Dynamic Balancer VA221",
      imgSize : "10%",
      // img : "https://media.istockphoto.com/id/1030262538/photo/abstract-blurred-of-workplace-or-hospital-corridor-background-concept.jpg?s=612x612&w=0&k=20&c=wLVa8rKfJIDoFqps3e5WxdvSdKKT68SP87D_XzXkat4=",
      img : "https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      productImg:"https://sarayuinfotech.in/images/sarayu/newproductimages/PortableVibrationAnalyzer%20.png",
      description : "Vibration analyzer is a high performance, full-featured FFT data collector, signal analyzer and balancer which allow easy condition monitoring of equipment found in many industries such as power generation, petro-chemical, pulp and paper",
    },
    {
      id : 2,
      title : "Condition Monitoring System - VMS-3000",
      imgSize : "40%",
      // img : "https://media.istockphoto.com/id/1030262538/photo/abstract-blurred-of-workplace-or-hospital-corridor-background-concept.jpg?s=612x612&w=0&k=20&c=wLVa8rKfJIDoFqps3e5WxdvSdKKT68SP87D_XzXkat4=",
      img : "https://www.energyconnects.com/media/cc0fllba/bloomburgmedia_riadjcdwx2ps01_16-09-2022_06-20-30_637988832000000000.jpg?anchor=center&mode=crop&width=1200&height=628&rnd=133077828301500000",
      productImg:"https://sarayuinfotech.in/images/sarayu/newproductimages/Condition-Monitoring-System-VMS-3000comp.png",
      description : "VMS-3000 series is a continuous online monitoring system suitable for condition monitoring and machinery protection applications and is designed to fully meet the requirements of the American Petroleum Institute’s API 670 standard for such systems.."
    },
    {
      id : 3,
      title : "Vibration and Temperature Monitoring System - VTMS-x12x",
      // img : "https://media.istockphoto.com/id/1030262538/photo/abstract-blurred-of-workplace-or-hospital-corridor-background-concept.jpg?s=612x612&w=0&k=20&c=wLVa8rKfJIDoFqps3e5WxdvSdKKT68SP87D_XzXkat4=",
      img : "https://warriorexpro.com/wp-content/uploads/2021/08/IEA-Global-Energy-Review-2021.jpg",
      imgSize : "25%",
      productImg:"https://sarayuinfotech.in/images/sarayu/newproductimages/vtms.png",
      description : "Vibration Temperature Monitoring System is a continuous online monitoring system suitable for condition monitoring and machinery protection applications."
    },
    {
      id : 4,
      title : "Vibration Monitor VM-9620",
      imgSize : "28%",
      // img : "https://media.istockphoto.com/id/1030262538/photo/abstract-blurred-of-workplace-or-hospital-corridor-background-concept.jpg?s=612x612&w=0&k=20&c=wLVa8rKfJIDoFqps3e5WxdvSdKKT68SP87D_XzXkat4=",
      img : "https://keystoneindustrialservices.com/wp-content/uploads/sites/4698/2016/06/bg2.jpg",
      productImg:"https://sarayuinfotech.in/images/sarayu/newproductimages/VM.png",
      description : "VM-9620 is a two channel vibration monitoring system suitable for condition monitoring and machinery protection applications .The system is +24V DC operated and industry standard DIN sized Rack mountable PPE+PS enclosure."
    },
    {
      id : 5,
      title : "Vibration Meter",
      img : "https://www.oilandgasadvancement.com/wp-content/uploads/upstream/13490/carlyle_impact_review_cepsa-1000x570.jpg",
      // img : "https://images.pexels.com/photos/236709/pexels-photo-236709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      productImg:"https://sarayuinfotech.in/images/sarayu/vibmeter.png",
      imgSize : "25%",
      description : "VM8000 is a 10 Channel vibration monitoring system suitable for condition monitoring and machinery protection application.The system measures 10-channel Non-Contact /Casing vibration."
    },
    {
      id : 6,
      title : "Automated Spindle Test Sysyem",
      imgSize : "40%",
      img : "https://reneweconomy.com.au/wp-content/uploads/2019/07/Gas-turbine-electrical-power-plant-with-twilight-optimised.jpg",
      // img : "https://images.pexels.com/photos/236709/pexels-photo-236709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      productImg:"https://sarayuinfotech.in/images/sarayu/newproductimages/spindle.png",
      description : "The Spindle test and analysis system is utilized to pre-condition of the spindles before they are installed in a machine. This process is accomplished over several hours at various increased running speeds which can be selected by the end user."
    },
    {
      id : 7,
      title : "Linear Proximity Transducer System",
      imgSize : "40%",
      img : "https://th.bing.com/th/id/OIP.TrmUQudukg35sx4nWfuZNwHaEf?w=314&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      // img : "https://images.pexels.com/photos/236709/pexels-photo-236709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      productImg:"https://sarayuinfotech.in/images/sarayu/newproductimages/ProximeteSensorVS-800.png",
      description : "The VS-800 is eddy current type non-contact displacement/vibration transducer, used for measuring Shaft Vibration, Axial Position, Rotating Speed and Phase Mark (Phase Reference) from small rotating machinery to large critical machinery such as turbines and compressors in plants."
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
    {carouselData.map((item , index)=>{
      return(
        count === item.id && <div key={item.id} className='main_banner_section'>
        <img className='main_banner_section_image' src={item.img}  />
        {/* <section className='main_banner_section_horizontal_line'></section> */}
      <div style={{color:"white"}} className='main_banner_section_content_container'>
        <div>{item.description}</div>
        <div>
          <h2>
          {item.title}
          </h2>
          <img style={{width: item.imgSize}} src={item.productImg} />
          </div>   
      </div>
      <div className='main_banner_section_carousel_small'>
        <div onClick={()=>setCount(1)} className={index === 0 && "main_banner_section_carousel_small_active_img"}>
          <img  src={carouselData[0].productImg} style={{display:"flex", alignItems:"center"}} />
        </div>
        <div onClick={()=>setCount(2)} className={index === 1 && "main_banner_section_carousel_small_active_img"} >
          <img src={carouselData[1].productImg}  />
        </div>
        <div onClick={()=>setCount(3)} className={index === 2 && "main_banner_section_carousel_small_active_img"} >
          <img src={carouselData[2].productImg}  />
        </div>
        <div onClick={()=>setCount(4)} className={index === 3 && "main_banner_section_carousel_small_active_img"}>
          <img  src={carouselData[3].productImg}  />
        </div>
        <div onClick={()=>setCount(5)} className={index === 4 && "main_banner_section_carousel_small_active_img"}>
          <img  src={carouselData[4].productImg}  />
        </div>
        <div onClick={()=>setCount(6)} className={index === 5 && "main_banner_section_carousel_small_active_img"}>
          <img  src={carouselData[5].productImg}  />
        </div>
        <div onClick={()=>setCount(7)} className={index === 6 && "main_banner_section_carousel_small_active_img"}>
          <img  src={carouselData[6].productImg}  />
        </div>
        
      </div>
    </div>
      )
    })}
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
    </div>


    <div className='hero_section_main_container'>
      <div className='vertical_line'></div>
          <div className='hero_sction_left_section'>
            <img src="https://sarayuinfotech.in/images/sarayu/newproductimages/PortableVibrationAnalyzer%20.png" alt="" />
          </div>
          <div className='hero_sction_right_section'>
            <h4 style={{margin:"10px 0",position:"relative", textAlign:"start", width:"100%"}}>Portable Vibration Analyzer / Dynamic Balancer VA221 <div className='right_section_dot'></div> </h4>
            <p>Vibration analyzer is a high performance, full-featured FFT data collector, signal analyzer and balancer which allow easy condition monitoring of equipment found in many industries such as power generation, petro-chemical, pulp and paper.</p>
          </div>
    </div>


    <div className='hero'>
        <div className="hero_text">
            <h1>We ensure better perpormance for a better world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veniam! Our mission is to provide the best solutions for a better tomorrow</p>
            <button className='btn'>Expore more</button>
        </div>

    </div>
    </>
  )
}

export default Hero