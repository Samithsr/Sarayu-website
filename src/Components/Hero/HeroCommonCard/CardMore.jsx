import React, { useRef } from "react";
import "./CardMore.css";

import searchgif from "../HeroCardImages/searchgif.gif";
import newsearch from "../HeroCardImages/newsearch.webm";
import { useParams } from "react-router-dom";
import Perspective from '../HeroCommonCard/Perspective';
import CaseStudy from '../HeroCommonCard/CaseStudy';
// import SearchReport from '../HeroCommonCard/SearchReport ';


const CardMore = () => {
  const {title} = useParams()
  if(title === "PERSPECTIVE"){
    return <Perspective />
  }
  if(title.split(" ").join("") === "CASESTUDY"){
    return <CaseStudy />
  }
  // if(title === "SEARCH REPORT"){
  //   return <SearchReport />
  // }
  return <div>{title}</div> ;
};

export default CardMore;
