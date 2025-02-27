import React, { useRef } from "react";
import "./CardMore.css";

import searchgif from "../HeroCardImages/searchgif.gif";
import newsearch from "../HeroCardImages/newsearch.webm";

const CardMore = () => {
  const videoRef = useRef(null);
  return (
    <div className="card-research-report">
      {/* Header Section */}
      <div className="card-research-header">
        <p>RESEARCH REPORT</p>
        <h1>Technology Vision 2025</h1>
        <h4>
          PCB: A Declaration of Autonomy - Advanced embedded PCB solutions with
          optimized performance and reliability.
        </h4>
        <div className="card-search-date">
          <p>10-MINUTE READ</p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p>FEBRUARY 7, 2025</p>
        </div>
      </div>

      {/* Divider Line */}
      <div className="card-search-more-line"></div>

      {/* Brief Section */}
      <div className="card-search-breef-heading">In brief</div>

      {/* Brief Points */}
      <div className="card-search-breef-points">
        <div className="card-search-breef-content"></div>
        <p className="card-search-breef-content-points">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          impedit illo eos ipsa inventore perferendis voluptas quo repellat in
          tempora?
        </p>
      </div>

      <div className="card-search-breef-points">
        <div className="card-search-breef-content"></div>
        <p className="card-search-breef-content-points">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          impedit illo eos ipsa inventore perferendis voluptas quo repellat in
          tempora?
        </p>
      </div>

      <div className="card-search-breef-points">
        <div className="card-search-breef-content"></div>
        <p className="card-search-breef-content-points">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          impedit illo eos ipsa inventore perferendis voluptas quo repellat in
          tempora?
        </p>
      </div>

      {/* REAEARCH IMAGE CONTAINER */}
      <div className="research-left-content-container">
        <div className="research-header-line-container">
          <section className="research-active-line"></section>
          <h2>
            Accelerating Autonomy with the Cognitive Digital Brain and
            Technology
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            laborum facere necessitatibus, similique sed doloremque praesentium
            fugit ipsa, dolore porro recusandae, impedit quisquam perspiciatis
            quasi error delectus non neque aliquid nesciunt qui magni odio
            maiores? Rerum, amet! Laborum excepturi nisi, sed doloremque
            delectus quibusdam dolorem aut in inventore amet ad facilis commodi
            consequatur rerum nobis? Esse incidunt maiores aperiam amet, In
            nihil eos asperiores. Consequuntur, vero!
          </p>
        </div>
        <div className="research-right-image-container">
          <div className="research-right-image-header-container">
            <video
              ref={videoRef}
              className="search-video"
              src={newsearch}
              autoPlay
              loop
              muted
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              style={{ width: "600px", height: "350px" }}
            />

            {/* <img className='search-image' src={searchgif} alt='' style={{ width: '600px', height: '350px' }} /> */}

            {/* <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, repellat.</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia possimus fugit deserunt facere, hic vitae ex, nesciunt quo delectus necessitatibus id quos, doloribus ullam mollitia officiis unde ad quisquam sit rem voluptatibus praesentium? Voluptas nostrum tempore laudantium libero deleniti officiis maiores commodi suscipit adipisci magnam recusandae obcaecati tempora perspiciatis provident, cumque qui corrupti blanditiis necessitatibus assumenda voluptate? Dolorem recusandae placeat id, quisquam aspernatur minus obcaecati officia cupiditate quo error explicabo?</p> */}
          </div>
        </div>
      </div>

                
            {/* horizantal view */}
      <div card-horizantal-view>
        <div className="card-horizantal-heading">
            <h1>3 Emerging Trends of AI, autonomy and trust:</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci ab sapiente. Commodi eius cum cumque earum non suscipit. Ex blanditiis quod quas veniam itaque doloribus voluptatibus aperiam, enim maxime.</p>
        </div>

      </div>
    </div>
  );
};

export default CardMore;
