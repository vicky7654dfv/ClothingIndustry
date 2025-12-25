import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { SearchContext } from "../SearchContext/SearchContext";
import { CartContext } from "../CartContext/CartContext";
import Style from "./Header.module.css";
import Img from "../../assets/Header/logo1.webp";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { cart } = useContext(CartContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const location = useLocation();
  
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsHomeDropdownOpen(false);
  };

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  const handleHomeHover = (state) => {
    if (window.innerWidth > 768) {
      setIsHomeHovered(state);
      if (state) {
        setIsHomeDropdownOpen(true);
      } else {
        setIsHomeDropdownOpen(false);
      }
    }
  };

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen) {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          hamburgerRef.current &&
          !hamburgerRef.current.contains(event.target)
        ) {
          setIsMobileMenuOpen(false);
          setIsHomeDropdownOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close dropdowns on escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsHomeDropdownOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const navLinks = [
    { name: "About Us", href: "/AboutUs" },
    { name: "Dashboard", href: "/DashBoard" },
    { name: "Services", href: "/Services" },
    { name: "FAQ", href: "/FAQ" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <header className={Style.header} data-theme={theme}>
      <div className={Style.headerContainer}>
        {/* Logo */}
        <div className={Style.logoWrapper}>
          <div className={Style.logoContainer} onClick={handleLogoClick}>
            <img
              src={Img}
              alt="Logo"
              className={Style.logo}
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={Style.desktopNav}>
          {/* Search Bar */}
          <div className={Style.searchContainer}>
            <form onSubmit={handleSearchSubmit} className={Style.searchForm}>
              <input
                type="text"
                placeholder="Perfect Fit ✨"
                value={searchTerm}
                onChange={handleSearchChange}
                className={Style.searchInput}
                id="desktop-search"
                name="desktop-search"
                autoComplete="off"
              />
              <button
                type="submit"
                className={Style.searchButton}
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

          {/* Home Dropdown */}
          <div
            className={Style.homeDropdown}
            onMouseEnter={() => handleHomeHover(true)}
            onMouseLeave={() => handleHomeHover(false)}
          >
            <button className={Style.homeButton}>Home</button>
            {isHomeDropdownOpen && (
              <div className={Style.dropdownMenu}>
                <Link to="/" className={Style.dropdownItem}>
                  Home Page 1
                </Link>
                <Link to="/HomePage2" className={Style.dropdownItem}>
                  Home Page 2
                </Link>
              </div>
            )}
          </div>

          {/* Other Navigation Links */}
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className={Style.navLink}>
              {link.name}
            </Link>
          ))}

          {/* Checkout Link with Badge */}
          <Link to="/Checkout" className={Style.navLink}>
            Checkout
            {cart.length > 0 && (
              <span className={Style.cartBadge}>{cart.length}</span>
            )}
          </Link>

          {/* Theme Toggle */}
          <button
            className={Style.themeButton}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* Sign Up Button */}
          <Link to="/SignUp" className={`${Style.navLink} ${Style.signUpButton}`}>
            Sign Up
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          ref={hamburgerRef}
          className={`${Style.mobileMenuButton} ${
            isMobileMenuOpen ? Style.close : ""
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={Style.hamburgerLine}></span>
          <span className={Style.hamburgerLine}></span>
          <span className={Style.hamburgerLine}></span>
        </button>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div
            className={`${Style.mobileOverlay} ${
              isMobileMenuOpen ? Style.open : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Navigation */}
        <div
          ref={menuRef}
          className={`${Style.mobileNav} ${
            isMobileMenuOpen ? Style.open : ""
          }`}
        >
          {/* Mobile Search Bar */}
          <div className={Style.mobileSearchContainer}>
            <form onSubmit={handleSearchSubmit} className={Style.mobileSearchForm}>
              <input
                type="text"
                placeholder="Perfect Fit ✨"
                value={searchTerm}
                onChange={handleSearchChange}
                className={Style.mobileSearchInput}
                id="mobile-search"
                name="mobile-search"
                autoComplete="off"
              />
              <button
                type="submit"
                className={Style.mobileSearchButton}
              >
                <svg
                  width="18"
                  height="18"
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

          {/* Home Dropdown for Mobile */}
          <div className={Style.mobileHomeSection}>
            <button
              className={Style.mobileHomeButton}
              onClick={toggleHomeDropdown}
            >
              Home
            </button>
            {isHomeDropdownOpen && (
              <div className={Style.mobileDropdownMenu}>
                <Link
                  to="/"
                  className={Style.mobileDropdownItem}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home Page 1
                </Link>
                <Link
                  to="/HomePage2"
                  className={Style.mobileDropdownItem}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home Page 2
                </Link>
              </div>
            )}
          </div>

          {/* Other Mobile Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={Style.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Checkout Link */}
          <Link
            to="/Checkout"
            className={Style.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Checkout
            {cart.length > 0 && (
              <span className={Style.mobileCartBadge}>{cart.length}</span>
            )}
          </Link>

          {/* Mobile Theme Toggle */}
          <button
            className={Style.mobileThemeButton}
            onClick={() => {
              toggleTheme();
              setIsMobileMenuOpen(false);
            }}
          >
            {theme === "light" ? "🌙 Switch to Dark" : "☀️ Switch to Light"}
          </button>

          {/* Mobile Sign Up Button */}
          <Link
            to="/SignUp"
            className={`${Style.mobileNavLink} ${Style.mobileSignUpButton}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}