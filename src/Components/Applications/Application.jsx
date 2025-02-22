import React from 'react'
import "./Application.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Application = () => {
    const navigate = useNavigate()
    const applicationClick = () => {
        navigate("/")
    }
  return (

    <div className='application-container'>
        <section className='application_contaciner_cover'></section>
        <div className='application-header'>
            <h1>Sarayu Infotech Solution Pvt. Ltd..</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, maxime. Dolor dolorum nesciunt eveniet aliquam error architecto aspernatur ducimus quisquam voluptas earum culpa itaque asperiores praesentium, sequi atque. Enim amet rem placeat quas sapiente distinctio veniam commodi adipisci dolores vero.</p>
            <p className='application-header-industry' onClick={applicationClick}> <span className='application-home-navigate'>HOME</span> <FaArrowRightLong className='application-arrow-icon' /> INDUSTRIES / PORTABLE VIBRATION ANALYZER </p>
            </div>

        <div className='application-image-header'>
            <img className='application-image' src="https://img.freepik.com/free-photo/automotive-assembly-line-precision-automation_91128-4349.jpg?t=st=1740121540~exp=1740125140~hmac=0f9557de6940624b811060f2a9dca341fcc4c91246bd724d9a841687fb1d65a1&w=1380" alt="" />
        </div>
    
    </div>


  )
}

export default Application