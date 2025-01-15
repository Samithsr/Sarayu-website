import React from 'react'
import "./Hero.css"
import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

const Hero = () => {
  const NeonCursor = () => {
    const appRef = useRef(null);
  
    useEffect(() => {
      // Initialize neonCursor when the component mounts
      if (appRef.current) {
        neonCursor({
          el: appRef.current,
          shaderPoints: 16,
          curvePoints: 80,
          curveLerp: 0.5,
          radius1: 5,
          radius2: 30,
          velocityTreshold: 10,
          sleepRadiusX: 100,
          sleepRadiusY: 100,
          sleepTimeCoefX: 0.0025,
          sleepTimeCoefY: 0.0025,
        });
      }
    }, []);
  
    return (
      <div id="app" ref={appRef}>
        <div id="hero">
          <h1>
            NEON
            <br />
            CURSOR
          </h1>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/klevron/threejs-toys">
            github/threejs-toys
          </a>
        </div>
      </div>
    );
  };

  
  return (
    <div className='hero'>
        <div className="hero_text">
            <h1>We ensure better perpormance for a better world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veniam! Our mission is to provide the best solutions for a better tomorrow</p>
            <button className='btn'>Expore more</button>
        </div>

    </div>
  )
}

export default Hero