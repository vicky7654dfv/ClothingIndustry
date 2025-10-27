import React, { useContext } from "react";
import Style from "./Contact.module.css";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import { Link, useNavigate } from "react-router-dom";

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Error");
  };
  return (
    <div data-aos="slide-up"
      className={Style.contactWrap}
      style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}
    >
      <div className={Style.topSection}>
        <h2>Contact Us</h2>
        <p
          style={{
            background: theme === "light" ? "#ebebebff" : "#474747ff",
            color: theme === "light" ? "#474747ff" : "#ebebebff",
          }}
        >
          We’d love to hear from you! Whether it’s about your order, feedback,
          or collaboration, our team is here to help you with quick and friendly
          support.
        </p>
      </div>

      <div className={Style.mainContent}>
        <div className={Style.infoBox}>
          <h3>Headquarters</h3>
          <p>
            <i className="fa-solid fa-location-dot"></i> Stackly Clothing,
            Chinna Tirupathi, Salem, Tamil Nadu – 636008
          </p>
          <p>
            <i className="fa-solid fa-phone"></i> +91 9876543210
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i> support@thestackly.com
          </p>
          <p>
            <i className="fa-solid fa-clock"></i> Mon - Fri: 9:30 AM - 6:30 PM
          </p>
          <div className={Style.socialLinks}>
            <Link to="/Error">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link to="/Error">
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link to="/Error">
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
            <Link to="/Error">
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </div>
        </div>

        <div className={Style.formBox}>
          <h3>Get in Touch</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className={Style.mapWrap}>
        <h3>Find Us Here</h3>
        <iframe
          title="Stackly Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.548890043977!2d78.14007507459923!3d11.664325042797106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf09e216e9dfd%3A0x3a9828e2c36e5f0b!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: "0", borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
