import React from 'react'


const HeroCard = (ImageSrc, Title, TitleDescription, Description, Button) => {
  return (
    <div className='main_card'>
      <div className='image_container'>
        <img src="https://images.unsplash.com/photo-1492112007959-c35ae067c37b?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className='content_header'>
      <p>CASE STUDY</p>
      <p>Uber hails new era for advertising industry</p>
      </div>
      <div className='overlay_description'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eum quo eligendi minima iure necessitatibus earum sit molestiae vero explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ea!</p>
        <div className='overlay_description_footer'>
          <button>Expan &nbsp; <p style={{transform:"translateY(2px)"}}>&gt;</p></button>
        </div>
      </div>
    </div>
  )
}

export default HeroCard