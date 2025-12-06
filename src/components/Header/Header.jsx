import React, { useContext, useState, useEffect, useRef } from "react";
import Style from "../Header/Header.module.css";
import Img from "../../assets/Header/logo1.webp";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { SearchContext } from "../SearchContext/SearchContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const location = useLocation();
  const isHome2 = location.pathname === "/HomePage2";
  
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchClick = () => {
    // Search functionality handled by context
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const handleHomePageNavigation = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const handleMobileLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) &&
          hamburgerRef.current && 
          !hamburgerRef.current.contains(event.target)) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [menuOpen]);

  return (
    <div 
      data-aos="fade"
      className={Style.headerWrap}
      style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}
    >
      <div className={Style.imgWrap}>
        <a href="/">
          <img src={Img} alt="logo" />
        </a>
      </div>
      
      {/* Hamburger/X Button */}
      <div 
        ref={hamburgerRef}
        className={Style.hamburger} 
        onClick={toggleMenu}
        style={{
          color: theme === "light" ? "#474747ff" : "#ebebebff",
        }}
      >
        {menuOpen ? '✕' : '☰'}
      </div>

      <div className={Style.inputDiv}>
        <form onSubmit={handleSearchSubmit} className={Style.searchForm}>
          <input
            type="text"
            placeholder="Find your perfect outfit ✨"
            value={searchTerm}
            onChange={handleSearchChange}
            className={Style.searchInput}
            style={{
              background: theme === "light" ? "white" : "#333333",
              color: theme === "light" ? "#474747ff" : "#ebebebff",
              border: theme === "light" ? "2px solid #e9ecef" : "2px solid #555555",
            }}
          />
          <button
            type="submit"
            className={Style.searchButton}
            onClick={handleSearchClick}
            style={{
              background: theme === "light" ? "#474747ff" : "#ebebebff",
              color: theme === "light" ? "#ebebebff" : "#474747ff",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </form>
      </div>

      {/* Navigation Menu */}
      <div 
        ref={menuRef}
        className={`${Style.linksWrap} ${menuOpen ? Style.showMenu : ""}`}
        style={{
          background: theme === "light" ? "#ebebebff" : "#474747ff",
        }}
      >
        <ul onClick={() => setMenuOpen(false)}>
          <li className={Style.dropdown}>
            <div className={Style.dropdownHeader}>
              <a 
                href={isHome2 ? "/" : "/HomePage2"} 
                onClick={handleMobileLinkClick}
                className={Style.homePageLink}
                style={{ color: theme === "light" ? "#474747ff" : "#ebebebff" }}
              >
                {isHome2 ? "Home Page 2" : "Home Page"}
              </a>
              <button 
                className={Style.dropdownToggle} 
                onClick={toggleDropdown}
                aria-label="Toggle dropdown"
                style={{
                  color: theme === "light" ? "#474747ff" : "#ebebebff",
                }}
              >
                <i className={`fa-solid fa-chevron-${dropdownOpen ? 'up' : 'down'}`}></i>
              </button>
            </div>
            <ul className={`${Style.dropdownMenu} ${dropdownOpen ? Style.showDropdown : ''}`}>
              <li>
                <a 
                  href={isHome2 ? "/" : "/HomePage2"} 
                  onClick={handleHomePageNavigation}
                  style={{
                    color: theme === "light" ? "#474747ff" : "#ebebebff",
                    background: theme === "light" ? "#ebebebff" : "#474747ff",
                  }}
                >
                  {isHome2 ? "Home Page" : "Home Page 2"}
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="/AboutUs"
              onClick={handleMobileLinkClick}
              style={{ color: theme === "light" ? "#474747ff" : "#ebebebff" }}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/DashBoard"
              onClick={handleMobileLinkClick}
              style={{ color: theme === "light" ? "#474747ff" : "#ebebebff" }}
            >
              DashBoard
            </a>
          </li>
          <li>
            <a
              href="/Services"
              onClick={handleMobileLinkClick}
              style={{ color: theme === "light" ? "#474747ff" : "#ebebebff" }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/FAQ"
              onClick={handleMobileLinkClick}
              style={{ color: theme === "light" ? "#474747ff" : "#ebebebff" }}
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="/Contact"
              onClick={handleMobileLinkClick}
              style={{ color: theme === "light" ? "#474747ff" : "#ebebebff" }}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/Checkout"
              onClick={handleMobileLinkClick}
              style={{ color: theme === "light" ? "#474747ff" : "#ebebebff" }}
            >
              Checkout
            </a>
          </li>
          <li>
            <button 
              className={Style.colorButton} 
              onClick={toggleTheme}
              style={{
                background: theme === "light" ? "#474747ff" : "#ebebebff",
                color: theme === "light" ? "#ebebebff" : "#474747ff",
              }}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </li>
          <li>
            <a
              href="/SignUp"
              onClick={handleMobileLinkClick}
              style={{ color: theme === "light" ? "#474747ff" : "#ebebebff" }}
            >
              Sign Up
            </a>
          </li>
        </ul>
        
        {/* Close Button for Mobile */}
        <div 
          className={Style.mobileCloseButton} 
          onClick={() => setMenuOpen(false)}
          style={{
            background: theme === "light" ? "#474747ff" : "#ebebebff",
            color: theme === "light" ? "#ebebebff" : "#474747ff",
          }}
        >
          <i className="fa-solid fa-times"></i> Close Menu
        </div>
      </div>
      
      {/* Overlay for mobile when menu is open */}
      {menuOpen && <div className={Style.menuOverlay} onClick={() => setMenuOpen(false)}></div>}
    </div>
  );
}