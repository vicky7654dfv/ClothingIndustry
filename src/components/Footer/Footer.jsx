import React, { useContext } from 'react'
import Style from './Footer.module.css'
import Img1 from "../../assets/Header/logo1.png"
import { Link } from 'react-router-dom'
import { ThemeContext } from '../ThemeContext/ThemeContext'
import AboutUs from './../../pages/AboutUs/AboutUs';
export default function Footer() {
      const {theme} = useContext(ThemeContext)
  return (
    <>
    <hr />
    <div className={Style.footerWrap} style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}>
      <div className={Style.box}>
        <img src={Img1} alt="" />
        <p>To redefine modern fashion by blending creativity, comfort, and sustainability — making Stackly a global symbol of confidence and style.</p>
        <Link to={"/AboutUs"}><button>More about company<i className="fa-solid fa-angles-right"></i></button></Link>
      </div>
      <div className={Style.box} >
        <h4>Quick links</h4>
        <ul>
          <li><Link style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}>About Us</Link></li>
          <li><Link style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}>Services</Link></li>
          <li><Link style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}>FAQ</Link></li>
          <li><Link style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}>Contact</Link></li>
          <li><Link style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}>Profile</Link></li>
        </ul>
      </div>
      <div className={Style.box}>
        <h4>Headquarters</h4>
        <ul  style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}>
          <li><i className="fa-solid fa-location-dot"></i> Chinna tirupathi, Salem</li>
          <li><i className="fa-solid fa-phone"></i> +91 9876543210</li>
          <li><i className="fa-solid fa-envelope"></i> info@thestackly.com</li>
          <li><i className="fa-solid fa-calendar-days"></i> Mon - Fri: 09:30 AM - 06:30 PM</li>
        </ul>
      </div>
      <div className={Style.box}>
        <h4>Follow Us On</h4>
        <p>Stay connected with Stackly for the latest fashion trends, style updates, and tips to elevate your wardrobe with confidence.</p>
        <div className={Style.media} >
          <Link to={"/Error"} style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}><i className="fa-brands fa-linkedin-in"></i></Link>
          <Link to={"/Error"} style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}><i className="fa-brands fa-facebook-f"></i></Link>
          <Link to={"/Error"} style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}><i className="fa-brands fa-x-twitter"></i></Link>
          <Link to={"/Error"} style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}><i className="fa-brands fa-instagram"></i></Link>
        </div>
      </div>
    </div>
    <div className={Style.bottomFooter} style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}>
      <hr />
      <p>Copyright © 2023. Stackly Clothing Company. All Rights Reserved.</p>
    </div>
</>
  )
}
