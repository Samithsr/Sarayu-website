import React, { useEffect, useState } from "react";
import "./HeroServices.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const HeroServices = () => {

    const navigate = useNavigate()
    const applicationClick = () => {
        navigate(-1)
    }


    const [count, setCount] = useState(0);
    const imagesList = [
        "https://www.aireng.com.au/wp-content/uploads/piller-blowers-and-compressors-piller-one.jpg",
        "https://www.chreed.com/wp-content/uploads/2017/04/P700-Air-Compressor-1.png",
        "https://www.aireng.com.au/wp-content/uploads/piller-blowers-and-compressors-piller-four.jpg",
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            if (count < imagesList.length - 1) {
                setCount((prev) => prev + 1);
            } else {
                setCount(0);
            }
        }, 4000);
        return () => {
            clearInterval(interval);
        };
    }, [count]);

    const handleForw = () => {
        setCount((prev) => (prev < imagesList.length - 1 ? prev + 1 : 0));
    };

    const handleBack = () => {
        setCount((prev) => (prev > 1 ? prev - 1 : imagesList.length - 1));
    };



    const [activeTab, setActiveTab] = useState("brief");
    
    return (
        <>
            <section class="energy-recovery-section">
                <div className="energy-recovery-left-container">
                    <h1>Vapour Fans & Compressors</h1>
                    <h4>
                        Step into a sustainable future -- use our wide range of Vapour Fans
                        & Compressors
                    </h4>
                    <p className="energy-recovery-home">
    <span className="home-link" onClick={applicationClick}>HOME</span> 
    <MdOutlineArrowRightAlt /> SERVICE <MdOutlineArrowRightAlt /> VAPOUR FANS & COMPRESSORS
</p>


                </div>
                <div className="energy-recovery-image-right-container">
                    <img
                        src="https://www.aireng.com.au/wp-content/uploads/piller-blowers-and-compressors-piller-one.jpg"
                        alt=""
                    />
                </div>
            </section>

            <div className="main-container">
                <div className="sidebar">
                    <p className="sidebar-item-header">Products & Services</p>
                    <p className="sidebar-item">Steam Turbines</p>
                    <p className="sidebar-item">Energy Recovery Systems</p>
                    <p className="sidebar-item">Vapour Fans & Compressors</p>
                    <p className="sidebar-item">Refurbishment & Upgrade</p>
                    <p className="contact-btn">CONTACT US NOW!</p>
                </div>

                <div className="content">
                    <div className="section">
                        <div className="section-heading">
                            <h4>
                                Sarayu Infotech Solutions Pvt. Ltd. (SISPL), established in 2002
                                by engineers from the Indian Institute of Science, specializes
                                in designing and manufacturing advanced vibration and condition
                                monitoring instrumentation systems for rotating machinery.
                            </h4>
                            <p>
                                <IoIosCheckmarkCircle
                                    style={{ color: "red", marginBottom: "-2px" }}
                                />{" "}
                                Cutting-edge solutions for industrial condition monitoring.
                                <br />
                                <IoIosCheckmarkCircle
                                    style={{ color: "red", marginBottom: "-2px" }}
                                />{" "}
                                Expertise in turbine diagnostics and predictive maintenance.
                                <br />
                                <IoIosCheckmarkCircle
                                    style={{ color: "red", marginBottom: "-2px" }}
                                />{" "}
                                High-precision vibration analysis technology.
                                <br />
                                <IoIosCheckmarkCircle
                                    style={{ color: "red", marginBottom: "-2px" }}
                                />{" "}
                                Trusted by industries worldwide for reliability and innovation.
                            </p>
                        </div>
                        <div className="heroservicecursol-main-container">
                            {imagesList.map((item, index) => {
                                return (
                                    count === index && (
                                        <div
                                            className="heroservicecursol"
                                            data-aos="zoom-out"
                                            key={index}
                                        >
                                            <img src={item} alt="Turbine Image" />
                                        </div>
                                    )
                                );
                            })}
                            <div className="carousel_button_container">
                                <button onClick={handleBack}>
                                    <IoIosArrowBack />
                                </button>
                                <button onClick={handleForw}>
                                    <IoIosArrowForward />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-container">
                <h2 className="product-heading">Products up to 100MWe</h2>
                <div className="product-card">
                    <div className="product-content">
                        <h3>
                            Industrial Steam Turbines for Combined Heat & Power (VMS) and
                            Power Generation
                        </h3>
                        <p>
                            For CHP and Power Generation, we manufacture Backpressure and
                            Condensing type of steam turbine generators that work across a
                            wide range of pressure and flow applications with a choice of
                            Impulse and Reaction technology to meet the growing customer
                            requirements...
                        </p>
                        <button className="know-more">KNOW MORE →</button>
                    </div>
                    <div className="product-image">
                        <img
                            src="https://sarayuinfotech.in/images/sarayu/newproductimages/PortableVibrationAnalyzer%20.png"
                            alt="Industrial Steam Turbine"
                        />
                    </div>
                </div>
            </div>





            {/* features function  */}
            <div className="features-functions-container">
                <div className="features-functions-header-container">
                    <h1>Features & functions</h1>
                    <h6>
                        The SIPROTEC 6MD85 bay controller is a general-purpose control and
                        automation device with protection function. It has been designed for
                        utilization on all voltage levels, from distribution to
                        transmission. As a part of the SIPROTEC 5 family, it allows the use
                        of a large number of protection functions from the SIPROTEC library.
                        The modular hardware permits application-related IOs to be
                        integrated. Adapt the hardware exactly to your requirements and rely
                        on future-oriented solutions for protection, control, automation,
                        monitoring and PQ basic.it allows the use
                        of a large number of protection functions from the SIPROTEC library.
                    </h6>
                </div>
            </div>









            <div className="features-description-container">
                {/* Tabs Section */}
                <div className="features-description-header">
                    <p
                        onClick={() => setActiveTab("brief")}
                        className={activeTab === "brief" ? "active" : ""}
                    >
                        Brief description
                    </p>
                    <p
                        onClick={() => setActiveTab("functions")}
                        className={activeTab === "functions" ? "active" : ""}
                    >
                        Functions
                    </p>
                    <p
                        onClick={() => setActiveTab("applications")}
                        className={activeTab === "applications" ? "active" : ""}
                    >
                        Applications
                    </p>
                    <p
                        onClick={() => setActiveTab("benefits")}
                        className={activeTab === "benefits" ? "active" : ""}
                    >
                        Benefits
                    </p>
                </div>

                {/* Underline Effect */}
                <div className="border-line"></div>

                {/* Content Section */}
                <div className="tab-content">
                    {activeTab === "brief" && (
                        <div className="tab-content-description">

                            <h2>Brief Description of SISPL Products</h2>
                            <p>SISPL specializes in cutting-edge industrial solutions designed for power management, automation, and system optimization. Their products are built with high reliability, scalability, and advanced technology, catering to industries that require efficient, secure, and intelligent control systems.....</p>
                            <p className="tab-content-description-multiple">With features like real-time monitoring, automation, data analysis, and remote accessibility, SISPL products help businesses enhance productivity, reduce energy costs, and ensure seamless operations. Their modular and user-friendly design allows for easy integration with existing systems, making them an ideal choice for industries looking for flexible and future-proof solutions..</p>

                            <h2>Inputs & Outputs</h2>
                            <p>5 predefined standard variants with 4 current transformers,</p>
                            <p>4 voltage transformers</p>
                            <p>11 to 75 binary inputs</p>
                            <p>9 to 41 binary outputs</p>

                            <h2>Hardware Flexibility</h2>
                            <p>Flexibly adjustable and expandable I/O quantity structure within the SIPROTEC 5 modular system. for grant requirements placed on the quantity structure, the device can be extended in the second row. For example, this premits an additional 240 binary inputs (and more) to be used with the I0230 (see chapter "Hardware")</p>

                            <h2>Vibration Cable</h2>
                            <p>1/3 × 19" to 2/1 × 19"</p>

                            <h2>As standard:</h2>

                        </div>
                    )}

                    {activeTab === "functions" && (
                        <div className="tab-content-description">

                            <h2>Seamless Integration with IoT & Industry 4.0</h2>
                            <p>Equipped with IoT capabilities, SISPL solutions integrate with smart industrial systems, allowing for predictive maintenance, automation, and improved decision-making through AI-driven analytics.</p>
                            <h2>Power Monitoring & Control</h2>
                            <p>SISPL products provide real-time monitoring and control of power distribution, voltage levels, and electrical parameters, ensuring efficient energy management in industrial and commercial setups....</p>

                            <h2>Automation & Process Control</h2>
                            <p>With intelligent automation features, SISPL products help streamline operations by automating repetitive tasks, optimizing workflow efficiency, and reducing human intervention, leading to higher productivity.</p>

                            <h2>Remote Access & Connectivity</h2>
                            <p>SISPL products support remote monitoring and control via cloud-based platforms, mobile apps, and web interfaces, enabling users to manage systems from anywhere.</p>


                        </div>
                    )}

                    {activeTab === "applications" && (
                        <div className="tab-content-description">
                            <h2>Power quality - supply quality</h2>
                            <p>Quality is generally regarded as an important aspect of any power supply. Insufficient power supply quality has a negative impact on operational processes and operational safety of consumers connected to the network and can entail serious consequences, ultimately resulting in increased costs for the user and supply utility....</p>
                            <p className="tab-content-description-multiple">The EN 50160 power quality standard describes the main voltage characteristics at customer's supply terminals in public low, medium and high-voltage systems. Comprehensive acquisition and documentation of parameters relevant to the supply quality is a necessary step required to identify possible weak points and initiate appropriate measures to eliminate them.</p>

                            <h2>Application</h2>
                            <p>The SICAM P855 device is used in single-phase as well as in three-wire and four-wire systems (with neutral conductor). The device is applied wherever comprehensive measurement of supply quality is necessary - at power utilities as well as in industry and trade sectors.</p>
                        </div>
                    )}

                    {activeTab === "benefits" && (
                        <div className="tab-content-description">
                            <h2>Energy Efficiency</h2>
                            <p>SISPL solutions incorporate advanced energy-saving mechanisms, reducing power consumption and lowering operational costs. This makes them an environmentally friendly choice for businesses looking to optimize energy use....</p>

                            <h2>High Reliability & Durability</h2>
                            <p>SISPL products are designed with robust materials and cutting-edge technology to ensure long-lasting performance in various industrial and commercial applications. They undergo rigorous testing to meet high safety and quality standards.</p>

                            <h2>Comprehensive Support & Service</h2>
                            <p>SISPL offers dedicated customer support, including technical assistance, software updates, and troubleshooting services, ensuring smooth and uninterrupted operations for users.</p>

                            <h2>Advanced Security Features</h2>
                            <p>Security is a priority, and SISPL products come with built-in protection mechanisms against cyber threats, unauthorized access, and operational failures, ensuring data integrity and system safety.</p>
                        </div>
                    )}
                </div>
            </div> 
                   </>
    );
};

export default HeroServices;
