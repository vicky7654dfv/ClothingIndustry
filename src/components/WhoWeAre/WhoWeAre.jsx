import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Img from "../../assets/WhoWeAre/Img.webp";
import Style from "./WhoWeAre.module.css";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export default function WhoWeAre() {
  const { theme } = useContext(ThemeContext);

  // Define CSS variables based on theme
  const themeStyles = {
    "--bg-color": theme === "light" ? "#ebebeb" : "#474747",
    "--text-color": theme === "light" ? "#474747" : "#ebebeb",
    "--accent-color": "indianred", 
    "--button-text": "#ffffff",
  };

  return (
    <div className={Style.fullWrap} style={themeStyles}>
      
      {/* Image Section with Hover Overlay */}
      <div className={Style.imgWrap}>
        <div className={Style.imgFrame}>
          <img src={Img} alt="Creative Director" />
          
          {/* Overlay Content */}
          <div className={Style.personOverlay}>
            <div className={Style.overlayContent}>
              <h3>Sarah Jenkins</h3>
              <span>Creative Director</span>
              <p>Leading our vision with bold elegance and sustainable innovation.</p>
              <Link to="/Error">
                <button className={Style.profileBtn}>View Profile</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Text Content Section */}
      <div className={Style.textAreaWrap}>
        <h2>Who We Are</h2>
        <div className={Style.divider}></div>
        
        <p className={Style.para1}>
          We are a modern clothing brand committed to creating stylish and
          versatile outfits that empower you to express your individuality. Each
          design is crafted with care to blend comfort, quality, and timeless
          fashion.
        </p>
        
        <p className={Style.para2}>
          Our mission is to inspire confidence and creativity through clothing.
          From everyday essentials to statement pieces, we ensure every item in
          our collection tells a story and elevates your personal style.
        </p>
        
        <Link to="/Error" className={Style.linkWrapper}>
          <button className={Style.learnBtn}>
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
}