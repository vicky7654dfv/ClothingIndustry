import React from "react";
import Style from "./Banner2.module.css";
// Renamed import to reflect it is a video
import BgVideo from "../../assets/Banner2/bgVideo.mp4";
import { Link } from "react-router-dom";

export default function Banner2() {
  return (
    <div className={Style.bannerWrap} data-aos="zoom-in">
      {/* Replaced img with video tag */}
      <video className={Style.bgVideo} autoPlay loop muted playsInline>
        <source src={BgVideo} type="video/mp4" />
      </video>

      {/* Creamy white low opacity layer */}
      <div className={Style.overlayLayer}></div>

      <div className={Style.textWrap}>
        <h3>Style Revolution</h3>
        <p>
          Elevate your wardrobe, elevate your confidence. Every piece tells a
          story—make yours unforgettable.
        </p>
        <Link to="/Error">
          <button>Grab Yours</button>
        </Link>
      </div>
    </div>
  );
}