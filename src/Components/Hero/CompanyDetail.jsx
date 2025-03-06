import React from 'react'
import "./CompanyDetail.css"
const CompanyDetail = () => {
  return (
    <section className="company-container">
      <div className="company-header">
        {/* <div className="company-icon">🏢</div> */}
        <h2 className="company-title">Sarayu Infotech Solutions Pvt. Ltd.</h2>
        <hr className="sarayu_divider" data-aos="fade-up" />
      </div>
    
      <div data-aos="fade-up" className="company-content">
        <p>
          <strong className='sarayu-home-heading'>Sarayu Infotech Solutions Pvt. Ltd.</strong> (SISPL) was incorporated in 2002 by a team of 
          experienced engineers from the Indian Institute of Science. With expertise in industrial instrumentation, 
          we specialize in providing cutting-edge solutions for process control industries.
        </p>
    
        <p>
          SISPL has successfully designed, developed, and manufactured advanced instrumentation systems, including 
          accelerometer-based vibration analysis, non-contact eddy current-based monitoring, and precision 
          capacitance, pressure, and temperature measurement solutions.
        </p>
    
        <p>
          Our systems are essential for condition monitoring of various rotating machineries, such as steam turbines 
          and heavy-duty spindles. We offer multi-channel data acquisition analyzers, ranging from 8 to 40 channels, 
          ensuring easy maintenance and enhanced productivity.
        </p>
    
        <p>
          SISPL proudly serves esteemed clients like BARC, ISRO, Triveni Turbines, MAN Diesel, Kennametal, and many 
          more. Additionally, we have successfully executed fully automated test beds, integrating our proprietary 
          data acquisition systems with custom front-end software for in-depth analysis and historical data tracking.
        </p>
    
        <p> 
          We are committed to offering total solutions for process industries, taking on specialized instrumentation 
          design and development projects as per customer requirements.
        </p>
      </div>
    </section>
    
  )
}

export default CompanyDetail