import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Img1 from "../../assets/Companies/adidas.webp"
import Img2 from "../../assets/Companies/flying.webp"
import Img3 from "../../assets/Companies/pepe.webp"
import Img4 from "../../assets/Companies/allen.webp"
import Img5 from "../../assets/Companies/rare.webp"
import Img6 from "../../assets/Companies/basics.webp"
import Img7 from "../../assets/Companies/puma.webp"
import Img8 from "../../assets/Companies/peter.webp"
import InsightImg1 from "../../assets/Companies/Insight/1.webp" 
import InsightImg2 from "../../assets/Companies/Insight/2.webp" 
import InsightImg3 from "../../assets/Companies/Insight/3.webp"
import Style from './Companies.module.css' 
import { ThemeContext } from '../ThemeContext/ThemeContext'

export default function Companies() {
  const { theme } = useContext(ThemeContext)
  const [activeCard, setActiveCard] = useState(0)
  
  const isLight = theme === "light"

  // Carousel cards data
  const cards = [
    {
      id: 1,
      image: InsightImg1,
      title: "Sustainable Fabrics",
      description: "Exploring eco-friendly materials that redefine the future of textile manufacturing.",
      link: "/sustainable-fabrics"
    },
    {
      id: 2,
      image: InsightImg2,
      title: "Global Trends",
      description: "Analyzing the shift in fashion dynamics across European and Asian markets.",
      link: "/global-trends"
    },
    {
      id: 3,
      image: InsightImg3,
      title: "Custom Tailoring",
      description: "The rise of AI-driven measurements ensuring the perfect fit for every customer.",
      link: "/custom-tailoring"
    }
  ]

  const logos = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8]

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length)
    }, 4000) // Slightly slower for better readability
    return () => clearInterval(interval)
  }, [cards.length])

  // Reverted to your OLD theme colors (Monochrome/High Contrast)
  // We use gradients that are subtle or solid-like to fit the logic
  const themeGradients = {
    light: {
      primary: "linear-gradient(135deg, #474747 0%, #2b2b2b 100%)", // Dark Grey Text/Elements
      secondary: "linear-gradient(135deg, #5c5c5c 0%, #000000 100%)",
      accent: "linear-gradient(135deg, #808080 0%, #474747 100%)"
    },
    dark: {
      primary: "linear-gradient(135deg, #ebebeb 0%, #ffffff 100%)", // Light Text/Elements
      secondary: "linear-gradient(135deg, #cfcfcf 0%, #a1a1a1 100%)",
      accent: "linear-gradient(135deg, #ffffff 0%, #dcdcdc 100%)"
    }
  }

  // Dynamic styles
  const bgStyle = {
    // Exact old background colors
    background: isLight ? "#ebebebff" : "#474747ff",
    color: isLight ? "#474747ff" : "#ebebebff",
    
    "--theme-primary": themeGradients[theme].primary,
    "--theme-secondary": themeGradients[theme].secondary,
    "--theme-accent": themeGradients[theme].accent,
    
    // Explicit colors for buttons/borders to avoid gradient issues
    "--solid-color": isLight ? "#474747" : "#ebebeb",
    "--inverse-text": isLight ? "#ebebeb" : "#474747"
  }

  const borderStyle = {
    // Use the solid color for the snake path line
    borderColor: isLight ? "#474747" : "#ebebeb",
    opacity: 0.8
  }

  return (
    <div className={Style.companiesWrap} style={bgStyle}>
      
      {/* Brands Section */}
      <div className={Style.headerSection}>
        <h1 className={Style.gradientTitle}>Trusted Brands</h1>
        <p className={Style.subtitle}>Partnering with the top leaders in fashion.</p>
      </div>

      {/* The Snake Path / Track Wrapper */}
      <div className={Style.snakePathOuter}>
        <div className={Style.snakePathLining} style={borderStyle}>
          <div className={Style.clientList}>
            {/* Original Images */}
            {logos.map((img, index) => (
              <div className={Style.client} key={`orig-${index}`}>
                <img src={img} alt={`Client ${index + 1}`} />
              </div>
            ))}
            {/* Duplicate Images for Infinite Loop */}
            {logos.map((img, index) => (
              <div className={Style.client} key={`copy-${index}`}>
                <img src={img} alt={`Client ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clothing Industry Grid/Carousel Section */}
      <div className={Style.industryGridContainer}>
        <div className={Style.gridHeader}>
          <h2 className={Style.gradientTitle}>Industry Insights</h2>
          <p className={Style.gridSubtitle}>Discover the latest trends and innovations</p>
        </div>
        
        {/* Carousel Navigation Dots */}
        <div className={Style.carouselDots}>
          {cards.map((_, index) => (
            <button
              key={index}
              className={`${Style.dot} ${activeCard === index ? Style.activeDot : ''}`}
              onClick={() => setActiveCard(index)}
              aria-label={`Go to slide ${index + 1}`}
              style={{ borderColor: 'var(--solid-color)' }}
            />
          ))}
        </div>
        
        {/* Carousel Wrapper */}
        <div className={Style.carouselWrapper}>
          <div 
            className={Style.carouselTrack} 
            style={{ transform: `translateX(-${activeCard * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div 
                key={card.id} 
                className={`${Style.gridCard} ${activeCard === index ? Style.activeCard : ''}`}
                style={{ 
                  // Card Background: White for light theme, Dark Grey for dark theme
                  background: isLight ? '#ffffff' : '#5c5c5c',
                  border: `1px solid ${isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'}`
                }}
              >
                <div className={Style.cardImageContainer}>
                  <img src={card.image} alt={card.title} className={Style.cardImage} />
                  <div className={Style.cardOverlay} />
                </div>
                <div className={Style.cardContent}>
                  <h3 style={{ color: 'var(--solid-color)' }}>{card.title}</h3>
                  <p>{card.description}</p>
                  <Link 
                    to="/Error" 
                    className={Style.actionBtn}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Manual Navigation Buttons */}
        <div className={Style.carouselControls}>
          <button 
            className={Style.carouselBtn} 
            onClick={() => setActiveCard(prev => (prev - 1 + cards.length) % cards.length)}
            aria-label="Previous slide"
          >
            ←
          </button>
          <button 
            className={Style.carouselBtn}
            onClick={() => setActiveCard(prev => (prev + 1) % cards.length)}
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>

    </div>
  )
}