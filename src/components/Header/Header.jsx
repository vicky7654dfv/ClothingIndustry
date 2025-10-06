import React, { useContext, useState } from "react";
import Style from "../Header/Header.module.css";
import Img from "../../assets/Header/logo1.png";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={Style.headerWrap}
      style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}
    >
      <div className={Style.imgWrap}>
        <img src={Img} alt="logo" />
      </div>
      <div className={Style.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <div className={Style.inputDiv}>
        <input type="text" placeholder="Find your perfect outfit ✨" />
      </div>
      <div
        className={`${Style.linksWrap} ${menuOpen ? Style.showMenu : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <ul>
          <li>
            <Link
              to="/"
              style={{ color: theme === "light" ? "#474747" : "#ebebeb" }}
            >
              Home Page
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{ color: theme === "light" ? "#474747" : "#ebebeb" }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{ color: theme === "light" ? "#474747" : "#ebebeb" }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{ color: theme === "light" ? "#474747" : "#ebebeb" }}
            >
              FAQ
            </Link>
          </li>
          <li>
            <button className={Style.colorButton} onClick={toggleTheme}>
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </li>
          <li>
            <Link
              to="/"
              style={{ color: theme === "light" ? "#474747" : "#ebebeb" }}
            >
              Sign Up
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{ color: theme === "light" ? "#474747" : "#ebebeb" }}
            >
              Login
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
}
