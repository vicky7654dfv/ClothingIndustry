import React, { useContext } from "react";
import Style from "./Footer.module.css";
import Img1 from "../../assets/Header/logo1.webp";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <hr />
      <div data-aos="fade-up"
        className={Style.footerWrap}
        style={{
          background: theme === "light" ? "#ebebebff" : "#474747ff",
          color: theme === "light" ? "#474747ff" : "#ebebebff",
        }}
      >
        <div className={Style.box}>
          <img src={Img1} alt="" />
          <p>
            To redefine modern fashion by blending creativity, comfort, and
            sustainability — making Stackly a global symbol of confidence and
            style.
          </p>
          <a href="/AboutUs">
            <button>
              More about company<i className="fa-solid fa-angles-right"></i>
            </button>
          </a>
        </div>
        <div className={Style.box}>
          <h4>Quick links</h4>
          <ul>
            <li>
              <a
                href="/AboutUs"
                style={{
                  background: theme === "light" ? "#ebebebff" : "#474747ff",
                  color: theme === "light" ? "#474747ff" : "#ebebebff",
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/Services"
                style={{
                  background: theme === "light" ? "#ebebebff" : "#474747ff",
                  color: theme === "light" ? "#474747ff" : "#ebebebff",
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a href="/FAQ"
                style={{
                  background: theme === "light" ? "#ebebebff" : "#474747ff",
                  color: theme === "light" ? "#474747ff" : "#ebebebff",
                }}
              >
                FAQ
              </a>
            </li>
            <li>
              <a href="/Contact"
                style={{
                  background: theme === "light" ? "#ebebebff" : "#474747ff",
                  color: theme === "light" ? "#474747ff" : "#ebebebff",
                }}
              >
                Contact
              </a>
            </li>
            <li>
              <a href="/SignUp"
                style={{
                  background: theme === "light" ? "#ebebebff" : "#474747ff",
                  color: theme === "light" ? "#474747ff" : "#ebebebff",
                }}
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
        <div className={Style.box}>
          <h4>Headquarters</h4>
          <ul
            style={{
              background: theme === "light" ? "#ebebebff" : "#474747ff",
              color: theme === "light" ? "#474747ff" : "#ebebebff",
            }}
          >
            <li>
              <i className="fa-solid fa-location-dot"></i> Chinna tirupathi,
              Salem
            </li>
            <li>
              <i className="fa-solid fa-phone"></i> +91 9876543210
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i> info@thestackly.com
            </li>
            <li>
              <i className="fa-solid fa-calendar-days"></i> Mon - Fri: 09:30 AM
              - 06:30 PM
            </li>
          </ul>
        </div>
        <div className={Style.box}>
          <h4>Follow Us On</h4>
          <p>
            Stay connected with Stackly for the latest fashion trends, style
            updates, and tips to elevate your wardrobe with confidence.
          </p>
          <div className={Style.media}>
            <a
              href="/Error"
              style={{
                background: theme === "light" ? "#ebebebff" : "#474747ff",
                color: theme === "light" ? "#474747ff" : "#ebebebff",
              }}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="/Error"
              style={{
                background: theme === "light" ? "#ebebebff" : "#474747ff",
                color: theme === "light" ? "#474747ff" : "#ebebebff",
              }}
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="/Error"
              style={{
                background: theme === "light" ? "#ebebebff" : "#474747ff",
                color: theme === "light" ? "#474747ff" : "#ebebebff",
              }}
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="/Error"
              style={{
                background: theme === "light" ? "#ebebebff" : "#474747ff",
                color: theme === "light" ? "#474747ff" : "#ebebebff",
              }}
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div
        className={Style.bottomFooter}
        style={{
          background: theme === "light" ? "#ebebebff" : "#474747ff",
          color: theme === "light" ? "#474747ff" : "#ebebebff",
        }}
      >
        <hr />
        <p>Copyright © 2023. Stackly Clothing Company. All Rights Reserved.</p>
      </div>
    </>
  );
}