import { useEffect, useState, useRef } from "react"; // Ensure useRef is imported
import "./Navbar.css";
import navbarlogo from "../../assets/Logo-removebg-preview.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toogle, settoogle] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [navbarToggler, setNavbarToggler] = useState(false);
  const [isProductsDropdownVisible, setIsProductsDropdownVisible] = useState(false);


  const navigate = useNavigate()
 const listOneClick =()=>{
  navigate("/applications")
 }
 const listTwoClick=()=>{
  navigate("/applications")
 }



 
 const [navbarVisible, setNavbarVisible] = useState(true);
 const lastScrollY = useRef(0);

 useEffect(() => {
   const handleScroll = () => {
     if (window.scrollY > 300) {
       if (window.scrollY > lastScrollY.current) {
         setNavbarVisible(false); // Hide when scrolling down past 200px
       } else {
         setNavbarVisible(true); // Show when scrolling up
       }
     } else {
       setNavbarVisible(true); // Always show if less than 200px scrolled
     }
     lastScrollY.current = window.scrollY;
   };

   window.addEventListener("scroll", handleScroll);
   return () => window.removeEventListener("scroll", handleScroll);
 }, []);
 

 const handlesubmit = (item) => {
    navigate(`/products/${item}`)
 }



 

  return (
    <header className={`navbar-header ${navbarVisible ? "visible" : "hidden"}`}>
      <section className="navbar_shadow_overlay"></section>
      <div className="navbar-row">
        <div className="navbar-logo-container">
          <p className="navbar-logo-wrapper">
            <img className="navbar-logo" src={navbarlogo} alt="Main Logo" />
          </p>
        </div>

        <div className="navbar-menu-container">
          <div className="navbar-nav-container">
            <section className="navbar-section">
              <nav className="navbar-custom">
                <button
                  className="navbar-toggler-custom"
                  type="button"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon-custom"></span>
                </button>


                
                <div className="navbar-collapse-custom">
      <ul className="navbar-nav-list">
        <li className="navbar-item">
          <NavLink className="navbar-link" to="/">
            HOME
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink className="navbar-link" to="/aboutus">
            ABOUT US
          </NavLink>
        </li>
        <li
          className="navbar-item dropdown"
          onMouseEnter={() => setIsProductsDropdownVisible(true)}
          onMouseLeave={() => setIsProductsDropdownVisible(false)}
        >
          <p className="navbar-link dropdown-toggle">
            PRODUCTS
          </p>
          {isProductsDropdownVisible && (
            <ul className="products-dropdown">
              <li onClick={() => handlesubmit("Condition Monitoring System")}>Condition Monitoring System</li>
              <li onClick={() => handlesubmit("Vibration and Temperature Monitoring System")}>Vibration and Temperature Monitoring System</li>
              <li onClick={() => handlesubmit("Vibration Monitor VM8000")}>Vibration Monitor VM8000</li>
              <li onClick={() => handlesubmit("Vibration Monitor VM9620")}>Vibration Monitor VM9620</li>
              <li onClick={() => handlesubmit("Linear Proximity Sensor")}>Linear Proximity Sensor</li>
              <li onClick={() => handlesubmit("Vibration Analyzer")}>Vibration Analyzer</li>
              <li onClick={() => handlesubmit("Portable Vibration Analyzer | Dynamic Balancer")}>Portable Vibration Analyzer / Dynamic Balancer</li>
              <li onClick={() => handlesubmit("Power Monitor")}>Power Monitor</li>
              <li onClick={() => handlesubmit("Vibration Meter")}>Vibration Meter</li>
              <li onClick={() => handlesubmit("Automated Spindle Test System")}>Automated Spindle Test System</li>
            </ul>
          )}
        </li>
        <li className="navbar-item dropdown">
          <NavLink className="navbar-link dropdown-toggle" to="/clients">
            CLIENTS
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink className="navbar-link" to="/contact">
            CONTACT US
          </NavLink>
        </li>
        {/* <li className="navbar-item">
          <div
            className="navbar-apply-container"
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
          > */}
            {/* <NavLink className="navbar-apply-button" to="/application">
              APPLICATION
            </NavLink>
            {isDropdownVisible && (
              <ul className="application-dropdown">
                <li onClick={() => listOneClick()}>Industries / Applications Steam Turbines</li>
                <li onClick={() => listTwoClick()}>Industries / Portable Vibration Analyzer</li>
              </ul>
            )} */}
          {/* </div>
        </li> */}
      </ul>
    </div>

              </nav>
            </section>
          </div>
          <div className="navbar-secondary-menu">
            <div className="navbar-links-group">
              {/* <NavLink to="/campus" className="navbar-secondary-link">
                INTRENSHIP
              </NavLink>
              <NavLink to="/scholarships" className="navbar-secondary-link">
                FACILITIES
              </NavLink>
              <NavLink to="/tp" className="navbar-secondary-link">
                T&P
              </NavLink>
              <NavLink to="/ic3" className="navbar-secondary-link">
                IC3
              </NavLink>
              <NavLink to="/sports" className="navbar-secondary-link">
                ACHIEVEMENTS
              </NavLink> */}
            </div>
            {/* <div
              className="navbar-apply-container"
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
            >
              <p className="navbar-apply-button">
                Applications
              </p>

              {isDropdownVisible && (
                <ul className="application-dropdown">
                  <li onClick={()=>listOneClick()}>Industries / Applications Steam Turbines</li>
                  <li onCanPlay={()=>listTwoClick()}>Industries / Portable Vibration Analyzer</li>
                </ul>
              )}
            </div> */}



          </div>
        </div>

        <div
          className="mobile_menu_icon"
          onClick={() => setNavbarToggler(!navbarToggler)}
        >
          menu
        </div>
        {navbarToggler && (
          <div className="mobile_menu_drop_down">
            <ul>
              <li>dasdasd</li>
              <li>asdasd</li>
              <li>asdads</li>
              <li>asdasd</li>
              <li>asdasd</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
