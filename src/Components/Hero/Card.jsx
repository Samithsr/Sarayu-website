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
import CommonCard from './HeroCommonCard/CommonCard'
// import dark from "../Hero/HeroCardImages/dark.avif"
// import white from "../Hero/HeroCardImages/white.avif"


const Card = () => {
  return (
    <div className='main_Container'>
    <CommonCard 
      ImgSrc = {search}
      title  = "SEARCH REPORT"
      descriptiontitle = "Technology Vision 2025"
      description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eum quo eligendi minima iure necessitatibus earum sit molestiae vero explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ea!"
      moreExpand = "Expand"
    />
    <CommonCard 
      ImgSrc = {wordstar}
      title  = "CASE STUDY"
      descriptiontitle = "Advanced PCB routing techniques & interference in high-speed embedded systems"
      description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eum quo eligendi minima iure necessitatibus earum sit molestiae vero explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ea!"
      moreExpand = "Expand"
    />
    <CommonCard 
      ImgSrc = {blog}
      title  = "RESEARCH REPORT"
      descriptiontitle = "Pulse of change: january 2025"
      description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eum quo eligendi minima iure necessitatibus earum sit molestiae vero explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ea!"
      moreExpand = "Expand"
    />
    <CommonCard 
      ImgSrc = {twoclr}
      title  = "CASE STUDY"
      descriptiontitle = "Optimized low-power design for efficiency & longevity"
      description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eum quo eligendi minima iure necessitatibus earum sit molestiae vero explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ea!"
      moreExpand = "Expand"
    />
    <CommonCard 
      ImgSrc = {starsearch}
      title  = "CASE STUDY"
      descriptiontitle = "High-density multilayer PCB with EMI shielding and thermal management for industrial-grade durability"
      description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eum quo eligendi minima iure necessitatibus earum sit molestiae vero explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ea!"
      moreExpand = "Expand"
    />
    <CommonCard 
      ImgSrc = {flow}
      title  = "PERSPECTIVE"
      descriptiontitle = "What's keeping hardware and platform leadres up at night"
      description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eum quo eligendi minima iure necessitatibus earum sit molestiae vero explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ea!"
      moreExpand = "Expand"
    />
    <CommonCard 
      ImgSrc = {fire}
      title  = "RESEARCH REPORT"
      descriptiontitle = "How private equity can optimize procurement for outsized returns"
      description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eum quo eligendi minima iure necessitatibus earum sit molestiae vero explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ea!"
      moreExpand = "Expand"
    />
    <CommonCard 
      ImgSrc = {cardstar}
      title  = "BLOG"
      descriptiontitle = "What we learned desigining a new agentic workforce in Marketing"
      description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eum quo eligendi minima iure necessitatibus earum sit molestiae vero explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ea!"
      moreExpand = "Expand"
    />
  </div>
  )
}

export default Card