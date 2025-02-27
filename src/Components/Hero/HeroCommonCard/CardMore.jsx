import React from 'react';
import "./CardMore.css";

const CardMore = () => {
  return (
    <div className='card-research-report'>
      {/* Header Section */}
      <div className='card-research-header'>
        <p>RESEARCH REPORT</p>
        <h1>Technology Vision 2025</h1>
        <h4>PCB: A Declaration of Autonomy - Advanced embedded PCB solutions with optimized performance and reliability.</h4>
        <div className='card-search-date'>
          <p>10-MINUTE READ</p> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p>FEBRUARY 7, 2025</p>
        </div>
      </div>

      {/* Divider Line */}
      <div className='card-search-more-line'></div>

      {/* Brief Section */}
      <div className='card-search-breef-heading'>In brief</div>

      {/* Brief Points */}
      <div className='card-search-breef-points'>
        <div className='card-search-breef-content'></div>
        <p className='card-search-breef-content-points'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum impedit illo eos ipsa inventore perferendis voluptas quo repellat in tempora?
        </p>
      </div>

      <div className='card-search-breef-points'>
        <div className='card-search-breef-content'></div>
        <p className='card-search-breef-content-points'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum impedit illo eos ipsa inventore perferendis voluptas quo repellat in tempora?
        </p>
      </div>

      <div className='card-search-breef-points'>
        <div className='card-search-breef-content'></div>
        <p className='card-search-breef-content-points'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum impedit illo eos ipsa inventore perferendis voluptas quo repellat in tempora?
        </p>
      </div>

        {/* REAEARCH IMAGE CONTAINER */}
      <div className='research-im'></div>
    </div>
  );
};

export default CardMore;
