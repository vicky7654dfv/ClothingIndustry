import React, { useContext } from "react";
import { Link } from "react-router-dom"; 
import Style from "./Footer.module.css";
import Img1 from "../../assets/Header/logo1.webp";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Restored Original Theme Colors
  const themeStyles = {
    background: theme === "light" ? "#ebebebff" : "#474747ff",
    color: theme === "light" ? "#474747ff" : "#ebebebff",
    borderColor: theme === "light" ? "#474747ff" : "#ebebebff",
  };

  return (
    <>
      <div className={Style.footerWrap} style={themeStyles}>
        
        {/* 1. Brand Section */}
        <div className={Style.box}>
          <img src={Img1} alt="Stackly Logo" />
          <p className={Style.paraStyle}>
            To redefine modern fashion by blending creativity, comfort, and
            sustainability — making Stackly a global symbol of confidence and
            style.
          </p>
          <Link to="/AboutUs" onClick={handleScroll} className={Style.btnWrapperLink}>
            <button className={Style.learnMoreBtn}>
              More about company <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </Link>
        </div>

        {/* 2. Quick Links */}
        <div className={Style.box}>
          <h4 className={Style.titleBorder}>Quick links</h4>
          <ul>
            <li><Link to="/AboutUs" className={Style.navLink} style={themeStyles} onClick={handleScroll}>About Us</Link></li>
            <li><Link to="/Services" className={Style.navLink} style={themeStyles} onClick={handleScroll}>Services</Link></li>
            <li><Link to="/FAQ" className={Style.navLink} style={themeStyles} onClick={handleScroll}>FAQ</Link></li>
            <li><Link to="/Contact" className={Style.navLink} style={themeStyles} onClick={handleScroll}>Contact</Link></li>
            <li><Link to="/SignUp" className={Style.navLink} style={themeStyles} onClick={handleScroll}>Sign Up</Link></li>
          </ul>
        </div>

        {/* 3. Explore */}
        <div className={Style.box}>
          <h4 className={Style.titleBorder}>Explore</h4>
          <ul>
            <li><Link to="/" className={Style.navLink} style={themeStyles} onClick={handleScroll}>Home 1</Link></li>
            <li><Link to="/HomePage2" className={Style.navLink} style={themeStyles} onClick={handleScroll}>Home 2</Link></li>
            <li><Link to="/Dashboard" className={Style.navLink} style={themeStyles} onClick={handleScroll}>Dashboard</Link></li>
            <li><Link to="/Checkout" className={Style.navLink} style={themeStyles} onClick={handleScroll}>Checkout</Link></li>
            <li><Link to="/Login" className={Style.navLink} style={themeStyles} onClick={handleScroll}>Login</Link></li>
          </ul>
        </div>

        {/* 4. Headquarters */}
        <div className={Style.box}>
          <h4 className={Style.titleBorder}>Headquarters</h4>
          <ul style={themeStyles} className={Style.infoList}>
            <li>
              <i className="fa-solid fa-location-dot"></i> 
              <span>Chinna tirupathi, Salem</span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i> 
              <span>+91 9876543210</span>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i> 
              <span>info@thestackly.com</span>
            </li>
            <li>
              <i className="fa-solid fa-calendar-days"></i> 
              <span>Mon - Fri: 09:30 AM - 06:30 PM</span>
            </li>
          </ul>
        </div>

        {/* 5. Follow Us */}
        <div className={Style.box}>
          <h4 className={Style.titleBorder}>Follow Us On</h4>
          <p className={Style.paraStyle}>
            Stay connected with Stackly for the latest fashion trends and style updates.
          </p>
          <div className={Style.media}>
            <Link to="/Error" style={themeStyles} onClick={handleScroll}>
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link to="/Error" style={themeStyles} onClick={handleScroll}>
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link to="/Error" style={themeStyles} onClick={handleScroll}>
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
            <Link to="/Error" style={themeStyles} onClick={handleScroll}>
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className={Style.bottomFooter} style={themeStyles}>
        <hr />
        <p>Copyright © 2023. Stackly Clothing Company. All Rights Reserved.</p>
      </div>
    </>
  );
}