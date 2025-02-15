import React, { useEffect, useState } from 'react'
import "./Hero.css"

const Hero = () => {
  const [count,setCount] = useState(3)
  const carouselData = [
    {
      id : 1,
      title : "Sarayu Infotech Solution pvt.ltd",
      img : "https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description : "kansdkjasdasdakjdknaksjdkjaksdasdkadsasdnn"
    },
    {
      id : 2,
      title : "GHIJKL",
      img : "https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description : "kjkjkasjdbkbakdbkasdkbasbdbasbdbasbdbsabdba"
    },
    {
      id : 3,
      title : "MNOPQR",
      img : "https://images.pexels.com/photos/236709/pexels-photo-236709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description : "oookjkjkasjdbkbakdbkasdkbasbdbasbdbasbdbsabdba"
    },
    {
      id : 4,
      title : "INOPQR",
      img : "https://images.pexels.com/photos/236722/pexels-photo-236722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description : "rrrkjkjkasjdbkbakdbkasdkbasbdbasbdbasbdbsabdba"
    },
  ]
  useEffect(()=>{
    const interval = setInterval(()=>{
      if(count < carouselData.length){
        setCount((prev)=>prev+1)
      }else{
        setCount(1)
      }
    },2000)
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
        <section className='main_banner_section_horizontal_line'></section>
      <div style={{color:"white"}} className='main_banner_section_content_container'>
        <div>
          <h2>
          {item.title}
          </h2>
          </div>   
        <div>{item.description}</div>
      </div>
      <div className='main_banner_section_carousel_small'>
        <div onClick={()=>setCount(1)} className={index === 0 && "main_banner_section_carousel_small_active_img"}>
          <img  src={carouselData[0].img} />
        </div>
        <div onClick={()=>setCount(2)} className={index === 1 && "main_banner_section_carousel_small_active_img"} >
          <img src={carouselData[1].img}  />
        </div>
        <div onClick={()=>setCount(3)} className={index === 2 && "main_banner_section_carousel_small_active_img"} >
          <img src={carouselData[2].img}  />
        </div>
        <div onClick={()=>setCount(4)} className={index === 3 && "main_banner_section_carousel_small_active_img"}>
          <img  src={carouselData[3].img}  />
        </div>
      </div>
    </div>
      )
    })}
    <h3 style={{textAlign:"center",fontSize:"30px",margin:"20px 0"}}>Our Products</h3>
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