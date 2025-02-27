import React from 'react';
import { useNavigate } from 'react-router-dom';

const CommonCard = ({ ImgSrc, title, descriptiontitle, description, moreExpand,  }) => {



  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/CardMore/${title}`)
      // console.log("card clicked", title);   
  };

  return (
    <div data-aos="fade-up" className='main_card' onClick={handleCardClick}>
      <div className='image_container'>
        <img src={ImgSrc} alt={title} />
      </div>
      <div className='content_header'>
        <p>{title}</p>
        <p>{descriptiontitle}</p>
      </div>
      <div className='overlay_description'>
        <p>{description}</p>
        <div className='overlay_description_footer'>
          <button>{moreExpand} &nbsp; <span style={{ transform: "translateY(2px)" }}>&gt;</span></button>
        </div>
      </div>
    </div>
  );
};

export default CommonCard;
