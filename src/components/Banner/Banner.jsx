import React from "react";
import Style from "./Banner.module.css";
import Vid from "../../assets/Banner/bannerVideo.mp4";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <div className={Style.bannerWrap} data-aos="zoom-in">
     <video src={Vid} autoPlay loop muted playsInline></video>
     <div className={Style.textWrap}>
      <h3>Clothing Industry</h3>
      <p>Style isn’t just what you wear — it’s how you tell your story without saying a word. Dress bold. Live confident. Wear your vibe.</p>
      <Link to="/Error"><button>Shop now</button></Link>
     </div>
    </div>
  );
}
