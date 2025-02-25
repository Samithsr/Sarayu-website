import React from 'react'
import "./Card.css"

import cardstar from "../Hero/HeroCardImages/star.jpg"
import wordstar from "../Hero/HeroCardImages/wordstar.jpg"
import blog from "../Hero/HeroCardImages/blog.jpg"
import starsearch from "../Hero/HeroCardImages/starsearch.jpg"
import twoclr from "../Hero/HeroCardImages/twoclr.jpg"
import flow from "../Hero/HeroCardImages/flow.avif"
import fire from "../Hero/HeroCardImages/fire.avif"
import search from "../Hero/HeroCardImages/search.avif"
// import dark from "../Hero/HeroCardImages/dark.avif"
// import white from "../Hero/HeroCardImages/white.avif"


const Card = () => {
  return (
    <div className='main_Container'>
    

    <div  data-aos="fade-up" className='main_card'>
      <div className='image_container'>
        <img src={search} alt="" />
      </div>
      <div className='content_header'>
      <p>SEARCH REPORT</p>
      <p>Technology Vision 2025</p>
      </div>
      <div className='overlay_description'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eum quo eligendi minima iure necessitatibus earum sit molestiae vero explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ea!</p>
        <div className='overlay_description_footer'>
          <button>Expand &nbsp; <p style={{transform:"translateY(2px)"}}>&gt;</p></button>
        </div>
      </div>
    </div>


    <div  data-aos="fade-up" className='main_card'>
      <div className='image_container'>
        <img src={wordstar} alt="" />
      </div>
      <div className='content_header'>
      <p>CASE STUDY</p>
      <p>Advanced PCB routing techniques & interference in high-speed embedded systems</p>
      </div>
      <div className='overlay_description'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eum quo eligendi minima iure necessitatibus earum sit molestiae vero explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ea!</p>
        <div className='overlay_description_footer'>
          <button>Expand &nbsp; <p style={{transform:"translateY(2px)"}}>&gt;</p></button>
        </div>
      </div>
    </div>


    <div  data-aos="fade-up" className='main_card'>
      <div className='image_container'>
        <img src={blog} alt="" />
      </div>
      <div className='content_header'>
      <p>RESEARCH REPORT</p>
      <p>Pulse of change: january 2025</p>
      </div>
      <div className='overlay_description'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eum quo eligendi minima iure necessitatibus earum sit molestiae vero explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ea!</p>
        <div className='overlay_description_footer'>
          <button>Expand &nbsp; <p style={{transform:"translateY(2px)"}}>&gt;</p></button>
        </div>
      </div>
    </div>

    <div  data-aos="fade-up" className='main_card'>
      <div className='image_container'>
        <img src={twoclr} alt="" />
      </div>
      <div className='content_header'>
      <p>CASE STUDY</p>
      <p>Optimized low-power design for efficiency & longevity</p>
      </div>
      <div className='overlay_description'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eum quo eligendi minima iure necessitatibus earum sit molestiae vero explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ea!</p>
        <div className='overlay_description_footer'>
          <button>Expand &nbsp; <p style={{transform:"translateY(2px)"}}>&gt;</p></button>
        </div>
      </div>
    </div>

    <div  data-aos="fade-up" className='main_card'>
      <div className='image_container'>
        <img src={starsearch} alt="" />
      </div>
      <div className='content_header'>
      <p>CASE STUDY</p>
      <p>High-density multilayer PCB with EMI shielding and thermal management for industrial-grade durability.</p>
      </div>
      <div className='overlay_description'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eum quo eligendi minima iure necessitatibus earum sit molestiae vero explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ea!</p>
        <div className='overlay_description_footer'>
          <button>Expand &nbsp; <p style={{transform:"translateY(2px)"}}>&gt;</p></button>
        </div>
      </div>
    </div>

    <div  data-aos="fade-up" className='main_card'>
      <div className='image_container'>
        <img src={flow} alt="" />
      </div>
      <div className='content_header'>
      <p>PERSPECTIVE</p>
      <p>What's keeping hardware and platform leadres up at night?</p>
      </div>
      <div className='overlay_description'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eum quo eligendi minima iure necessitatibus earum sit molestiae vero explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ea!</p>
        <div className='overlay_description_footer'>
          <button>Expand &nbsp; <p style={{transform:"translateY(2px)"}}>&gt;</p></button>
        </div>
      </div>
    </div>

    <div  data-aos="fade-up" className='main_card'>
      <div className='image_container'>
        <img src={fire} alt="" />
      </div>
      <div className='content_header'>
      <p>RESEARCH REPORT</p>
      <p>How private equity can optimize procurement for outsized returns</p>
      </div>
      <div className='overlay_description'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eum quo eligendi minima iure necessitatibus earum sit molestiae vero explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ea!</p>
        <div className='overlay_description_footer'>
          <button>Expand &nbsp; <p style={{transform:"translateY(2px)"}}>&gt;</p></button>
        </div>
      </div>
    </div>

    
    <div  data-aos="fade-up" className='main_card'>
      <div className='image_container'>
        <img src={cardstar} alt="" />
      </div>
      <div className='content_header'>
      <p>BLOG</p>
      <p>What we learned desigining a new agentic workforce in Marketing</p>
      </div>
      <div className='overlay_description'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eum quo eligendi minima iure necessitatibus earum sit molestiae vero explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ea!</p>
        <div className='overlay_description_footer'>
          <button>Expand &nbsp; <p style={{transform:"translateY(2px)"}}>&gt;</p></button>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Card