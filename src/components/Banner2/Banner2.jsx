import React from "react";
import Style from "./Banner2.module.css";
import Bg from "../../assets/Banner2/bg2.webp";
import { Link } from "react-router-dom";
export default function Banner2() {
  return (
    <div className={Style.bannerWrap} data-aos="zoom-in">
     <img src={Bg} alt="" />
     <div className={Style.textWrap}>
      <h3>Style Revolution</h3>
      <p>Elevate your wardrobe, elevate your confidence. Every piece tells a story—make yours unforgettable.</p>
      <Link to="/Error"><button>Grab Yours</button></Link>
     </div>
    </div>
  );
}
