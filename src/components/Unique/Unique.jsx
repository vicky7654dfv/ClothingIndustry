import React, { useContext } from "react";
import Img1 from "../../assets/Unique/1.webp";
import Img2 from "../../assets/Unique/2.webp";
import Img3 from "../../assets/Unique/3.webp";
import Img4 from "../../assets/Unique/4.webp";
import Style from "./Unique.module.css";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export default function Unique() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={Style.outerWrap}
      style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}
    >
      <h2
        style={{
          background: theme === "light" ? "#ebebebff" : "#474747ff",
          color: theme === "light" ? "#474747ff" : "#ebebebff",
        }}
      >
        What Makes Us Unique
      </h2>
      <p
        style={{
          background: theme === "light" ? "#ebebebff" : "#474747ff",
          color: theme === "light" ? "#474747ff" : "#ebebebff",
        }}
      >
        Bringing You Genuine Fashion & Wardrobe Inspiration
      </p>
      <hr />
      <div
        className={Style.uniqueWrap}
        style={{
          background: theme === "light" ? "#ebebebff" : "#474747ff",
          color: theme === "light" ? "#474747ff" : "#ebebebff",
        }}
      >
        <div className={Style.grids}>
          <img src={Img1} alt="" />
          <h3>crafted pieces</h3>
          <p>
            Every outfit tells a story—bold, confident, and uniquely you.
            Explore our collection of carefully crafted pieces designed to make
            every moment stylish and unforgettable.
          </p>
        </div>
        <div className={Style.grids}>
          <img src={Img2} alt="" />
          <h3>Customer Care</h3>
          <p>
            From queries to support, we’re here to assist you with every
            step—because your satisfaction is our top priority.
          </p>
        </div>
        <div className={Style.grids}>
          <img src={Img3} alt="" />
          <h3>Packaging</h3>
          <p>
            Every order arrives in thoughtfully designed packaging that reflects
            our commitment to quality and style.
          </p>
        </div>
        <div className={Style.grids}>
          <img src={Img4} alt="" />
          <h3>Quality</h3>
          <p>
            Each piece is made with premium materials and meticulous attention
            to detail, ensuring comfort, durability, and timeless style.
          </p>
        </div>
      </div>
    </div>
  );
}
