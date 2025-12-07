import React, { useContext } from "react";
import Style from "./StyleSection.module.css";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export default function StyleSection() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={Style.fullWrap}
      style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}
    >
      
      <div className={Style.textAreaWrap}>
        <h2
          style={{
            background: theme === "light" ? "#ebebebff" : "#474747ff",
            color: theme === "light" ? "#474747ff" : "#ebebebff",
          }}
        >
          Inside Our Style Studio
        </h2>
        <p
          style={{
            background: theme === "light" ? "#ebebebff" : "#474747ff",
            color: theme === "light" ? "#474747ff" : "#ebebebff",
          }}
          className={Style.para1}
        >
          Explore how your favorite outfits come to life at our online fashion hub.
        </p>
        <p
          style={{
            background: theme === "light" ? "#ebebebff" : "#474747ff",
            color: theme === "light" ? "#474747ff" : "#ebebebff",
          }}
          className={Style.para2}
        >
          From selecting premium fabrics to designing the latest trends, we ensure every piece reflects quality, comfort, and style—crafted to make your online shopping experience truly special.
        </p>
        <button>
          <a href="https://www.youtube.com/embed/YD9QLw5vBZQ" target="_blank" rel="noopener noreferrer">🎬 WATCH NOW</a>
        </button>
      </div>
      <div className={Style.imgWrap}>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/YD9QLw5vBZQ"
          title="Who We Are Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
