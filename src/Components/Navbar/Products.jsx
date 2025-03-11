import React, { useState } from "react";
import "./Products.css";
import isro from "../Navbar/NavbarClientImages/isro.webp";

const ProductsDetails = () => {
  const [activeTab, setActiveTab] = useState("video");

  return (
    <>
      <div className="arc-container">
        <div className="arc-content">
          <h1>VS-800</h1>
          <p>Proximity Transducer System</p>
          <button className="arc-button">ProNotes newsletter</button>
        </div>
        <div className="arc-image">
          <img
            src="https://sarayuinfotech.in/images/sarayu/newproductimages/ProximeteSensorVS-800.png"
            alt="Arc Protection"
          />
        </div>
      </div>

      <div className="product-features-functions-container">
        <div className="product-features-functions-header-container">
          {/* <h1>Features & functions</h1> */}
          <h6>
            The SIPROTEC 6MD85 bay controller is a general-purpose control and
            automation device with protection function. It has been designed for
            utilization on all voltage levels, from distribution to
            transmission. As a part of the SIPROTEC 5 family, it allows the use
            of a large number of protection functions from the SIPROTEC library.
            The modular hardware permits application-related IOs to be
            integrated. Adapt the hardware exactly to your requirements and rely
            on future-oriented solutions for protection, control, automation,
            monitoring and PQ basic Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ad. Voluptas, explicabo? Minus doloribus mollitia explicabo, minima laborum reiciendis tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloribus!.
          </h6>
        </div>
      </div>

      <div className="siprotec-container">
        <div className="siprotec-content">
          <div data-aos="zoom-in" className="siprotec-image">
            <img
              src="https://sarayuinfotech.in/images/sarayu/newproductimages/ProximityTransducerSystem.png"
              alt="SIPROTEC 5 Arc Protection"
            />
          </div>
          <div className="siprotec-text">
            <h1>SIPROTEC 5 Arc Protection</h1>
            <h2>Optical arc detection for SIPROTEC 5</h2>
            <p>
              Electric arcs are among the most dreaded fault scenarios in power
              supply engineering. They can be caused by a multitude of factors,
              such as aging of the insulation, environmental conditions as well as
              operating errors. Electric arcs can cause heavy damage to switchgear
              and present a serious hazard to operating personnel. The SIPROTEC 5
              arc protection detects electric arcs through an optical sensor. Arcs
              are detected reliably and quickly as they develop, and the protective
              device can trip immediately and without delay times.
            </p>
          </div>
        </div>
      </div>




      <div className="product-info-container">
      <h1>Features & functions</h1>
    {/* Tabs Section */}
    <div className="product-info-header">
        <p
            onClick={() => setActiveTab("overview")}
            className={activeTab === "overview" ? "active" : ""}
        >
            Video
        </p>
        <p
            onClick={() => setActiveTab("features")}
            className={activeTab === "features" ? "active" : ""}
        >
            General
        </p>
        <p
            onClick={() => setActiveTab("uses")}
            className={activeTab === "uses" ? "active" : ""}
        >
            Technical data vm-800
        </p>
        <p
            onClick={() => setActiveTab("advantages")}
            className={activeTab === "advantages" ? "active" : ""}
        >
            Application
        </p>
    </div>

    {/* Underline Effect */}
    <div className="underline-effect"></div>

    {/* Content Section */}
    <div className="tab-content">
        {activeTab === "overview" && (
            <div className="tab-description">

                <h2>Product Overview</h2>
                <p>Our company specializes in advanced solutions for power management, automation, and system optimization. The products are designed with high reliability and scalability to meet the demands of various industries requiring secure and intelligent control systems.</p>
                <p className="tab-description-extra">With features like real-time monitoring, automation, and data analytics, these products enhance productivity, reduce energy consumption, and offer seamless integration with existing systems.</p>

                <h2>Inputs & Outputs</h2>
                <p>Standard variants with 4 current transformers,</p>
                <p>Voltage transformers and binary inputs/outputs available</p>

                <h2>Hardware Flexibility</h2>
                <p>Adjustable and expandable I/O configuration within our modular system.</p>

            </div>
        )}

        {activeTab === "features" && (
            <div className="tab-description">

                <h2>Seamless IoT & Industry 4.0 Integration</h2>
                <p>Enable predictive maintenance, automation, and AI-based decision-making Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odit veritatis, earum alias pariatur repellendus obcaecati ut. Laboriosam, dicta? Incidunt?.</p>

                <h2>Power Monitoring & Control</h2>
                <p>Real-time Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa illum deserunt odio itaque minus voluptas sapiente aut laudantium quidem laborum. monitoring and control of power distribution and electrical parameters.</p>

                <h2>Automation & Process Control</h2>
                <p>Streamline operations and improve efficiency through intelligent Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci blanditiis nulla repellat numquam voluptates mollitia culpa fuga quos nesciunt labore!automation features.</p>

                <h2>Remote Connectivity</h2>
                <p>Access and manage systems from anywhere via cloud Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus enim nisi doloremque fugit vitae magnam corporis alias ipsam dolor itaque. platforms, apps, and web interfaces.</p>

            </div>
        )}

        {activeTab === "uses" && (
            <div className="tab-description">
                <h2>Power Supply Quality</h2>
                <p>The quality of the power supply impacts operational processes. Inadequate quality can result in operational disruptions and higher costs for users.</p>
                <p className="tab-description-extra">The EN 50160 standard describes voltage characteristics, helping identify weak points in the supply chain for appropriate corrective actions.</p>

                <h2>Applications</h2>
                <p>Used in both single-phase and multi-wire systems for comprehensive power quality measurements in utilities and industrial sectors.</p>
            </div>
        )}

        {activeTab === "advantages" && (
            <div className="tab-description">
                <h2>Energy Efficiency</h2>
                <p>Our solutions minimize power consumption, reducing costs while providing an environmentally friendly option for optimization.</p>

                <h2>Reliability & Durability</h2>
                <p>Built with robust materials and technology to ensure long-lasting, safe performance in demanding applications.</p>

                <h2>Support & Service</h2>
                <p>Offering dedicated support services, including troubleshooting, software updates, and more for smooth operations.</p>

                <h2>Advanced Security</h2>
                <p>Protects systems from cyber threats and unauthorized access with built-in security features, ensuring data integrity and operational safety.</p>
            </div>
        )}
    </div>
</div>

    </>
  );
};

export default ProductsDetails;
