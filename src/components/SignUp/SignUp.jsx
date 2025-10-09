import React, { useContext, useState } from "react";
import Style from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import ImgSide from "../../assets/Header/logo1.png"
import { ThemeContext } from "../ThemeContext/ThemeContext";
import Error from './../../pages/Error/Error';
export default function SignUp() {
  const { theme } = useContext(ThemeContext);

    const navigate=useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [rules, setRules] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    special: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (/^\d{0,10}$/.test(value)) {
        setForm({ ...form, [name]: value });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validatePassword = (password) => {
    return {
      length: password.length >= 8,
      upper: /[A-Z]/.test(password),
      lower: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Password do not match");
      return;
    }
    if (!Object.values(rules).every(Boolean)) {
      alert("Password does not meet all requirements");
      return;
    }
    alert(`Name: ${form.name}\n Email: ${form.email}\n Phone: ${form.phone}`);
    navigate("/Error")
  };

  return (
    <div className={Style.signUpWrap} style={{
          background: theme === "light" ? "#ebebebff" : "#474747ff",
          color: theme === "light" ? "#474747ff" : "#ebebebff",
        }}>
      <div className={Style.imgWrap}>
        <img src={ImgSide} alt="sidePic" />
      </div>
      <form className={Style.signUpForm} onSubmit={handleSubmit}>
        <h2 style={{
          background: theme === "light" ? "#ebebebff" : "#474747ff",
          color: theme === "light" ? "#474747ff" : "#ebebebff",
        }}>SignUp</h2>
        <div className={Style.firstRow}>
<input
          type="text"
          className={`${Style.nameClass} ${Style.commonClass}`}
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          className={`${Style.emailClass} ${Style.commonClass}`}
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        </div>
        
        <input
          type="tel"
          className={`${Style.phoneClass} ${Style.commonClass}`}
          name="phone"
          placeholder="Mobile number (Optional)"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          type="password"
          className={`${Style.passwordClass} ${Style.commonClass}`}
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => {
            handleChange(e);
            setRules(validatePassword(e.target.value));
          }}
          required
        />
        <input
          type="text"
          className={`${Style.confirmPasswordClass} ${Style.commonClass}`}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={
            handleChange
          }
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
    e.target.style.backgroundColor = "indianred"
    e.target.style.color = "white"
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = theme === "light" ? "#474747ff" : "#ebebebff"
    e.target.style.color = theme === "light" ? "#ebebebff" : "#474747ff"
  }}
>
  Submit
</button>
<button type="Error" className={Style.loginBtn}><Link to={"/Login"}>Login</Link></button>

      </form>
    </div>
  );
}
