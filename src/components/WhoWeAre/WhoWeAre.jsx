import React, { useContext } from "react";
import Img from "../../assets/WhoWeAre/Img.webp";
import Style from "./WhoWeAre.module.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export default function WhoWeAre() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={Style.fullWrap}
      style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}
    >
      <div className={Style.imgWrap}>
        <img src={Img} alt="" />
      </div>
      <div className={Style.textAreaWrap}>
        <h2 style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}>Who We Are</h2>
        <p style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }} className={Style.para1}>
          We are a modern clothing brand committed to creating stylish and
          versatile outfits that empower you to express your individuality. Each
          design is crafted with care to blend comfort, quality, and timeless
          fashion.
        </p>
        <p style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }} className={Style.para2}>
          Our mission is to inspire confidence and creativity through clothing.
          From everyday essentials to statement pieces, we ensure every item in
          our collection tells a story and elevates your personal style.
        </p>
        <button>
          <Link to={"/Error"}>Learn more</Link>
        </button>
      </div>
    </div>
  );
}
