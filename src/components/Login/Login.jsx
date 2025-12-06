import React, { useContext, useState } from "react";
import Style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import ImgBg from "../../assets/Header/logo1.webp";
import { ThemeContext } from "../ThemeContext/ThemeContext";
export default function Login() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Email: ${form.email}\nPassword: ${form.password}`);
    navigate("/Error");
  };

  return (
    <div data-aos="fade-bottom"
      className={Style.loginWrap}
      style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}
    >
      <div className={Style.imgWrap}>
        <img src={ImgBg} alt="sidePic" />
      </div>
      <form className={Style.formFillWrap} onSubmit={handleSubmit}>
        <h2
          style={{
            background: theme === "light" ? "#ebebebff" : "#474747ff",
            color: theme === "light" ? "#474747ff" : "#ebebebff",
          }}
        >
          Login
        </h2>
        <input
          type="email"
          className={`${Style.emailClass} ${Style.commonClass}`}
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          className={`${Style.passwordClass} ${Style.commonClass}`}
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className={Style.submitClass}
          style={{
            background: theme === "light" ? "#474747ff" : "#ebebebff",
            color: theme === "light" ? "#ebebebff" : "#474747ff",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "indianred";
            e.target.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor =
              theme === "light" ? "#474747ff" : "#ebebebff";
            e.target.style.color =
              theme === "light" ? "#ebebebff" : "#474747ff";
          }}
        >
          Submit
        </button>
        <button
          type="button"
          className={Style.loginBtn}
          onClick={() => navigate("/SignUp")}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
