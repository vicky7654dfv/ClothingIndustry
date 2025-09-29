import React, { useContext, useState } from "react";
import Style from "../Header/Header.module.css";
import Img from "../../assets/Header/logo1.png";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className={Style.linksWrap}>
        <ul>
          <li>
            <input type="text" placeholder="Find your perfect outfit ✨" />
          </li>
          <li>
            <Link
              to="/"
              style={{ color: theme === "light" ? "#474747" : "#ebebeb" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{ color: theme === "light" ? "#474747" : "#ebebeb" }}
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{ color: theme === "light" ? "#474747" : "#ebebeb" }}
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{ color: theme === "light" ? "#474747" : "#ebebeb" }}
            >
              Kids
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{ color: theme === "light" ? "#474747" : "#ebebeb" }}
            >
              Latest
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{ color: theme === "light" ? "#474747" : "#ebebeb" }}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{ color: theme === "light" ? "#474747" : "#ebebeb" }}
            >
              Wishlist
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{ color: theme === "light" ? "#474747" : "#ebebeb" }}
            >
              Checkout
            </Link>
          </li>
          <li>
            <button className={Style.colorButton} onClick={toggleTheme}>
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
