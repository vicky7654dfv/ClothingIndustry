import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Style from "./Error.module.css";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
export default function Error() {
          const {theme} = useContext(ThemeContext)
  return (
    <div className={Style.errorWrap} style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}>
      <div className={Style.overlay} style={{
        background: theme === "light" ? "#340505ff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}>
        <h1 className={Style.title}>404</h1>
        <h2 className={Style.subtitle}>Oops! Page Not Found</h2>
        <p className={Style.text}>
          The page you’re looking for seems to have disappeared into the fashion mist of Stackly.
        </p>
        <Link to="/" className={Style.btn}>Go Back Home</Link>
      </div>
    </div>
  );
}
