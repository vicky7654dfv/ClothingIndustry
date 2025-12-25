import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Style from "./StyleSection.module.css";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import VerticalVideo from "../../assets/StyleSection/bgVideo.mp4"; 
import StudioCoverPhoto from "../../assets/StyleSection/YouTube/coverBg.webp"; 
import StudioCoverHover from "../../assets/StyleSection/YouTube/coverBg.webp"; 

export default function StyleSection() {
  const { theme } = useContext(ThemeContext);
  const [playYt, setPlayYt] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isLight = theme === "light";

  // Dynamic Theme Variables
  const themeStyles = {
    "--bg-color": isLight ? "#ebebeb" : "#474747",
    "--text-color": isLight ? "#474747" : "#ebebeb",
    "--card-bg": isLight ? "#ffffff" : "#333333",
    "--accent-color": isLight ? "#ff65aa" : "#ff4081",
    "--wire-color": isLight ? "#555" : "#ccc",
    "--secondary-accent": isLight ? "#4a90e2" : "#64b5f6",
    "--tertiary-accent": isLight ? "#50c878" : "#81c784",
  };

  // Text Pieces Array for Variety
  const textPieces = {
    studioTitles: [
      "Inside Our Creative Studio",
      "Where Designs Come to Life",
      "The Art of Fashion Creation",
      "Behind the Seams: Our Workshop",
      "Crafting Dreams into Reality"
    ],
    studioDescriptions: [
      "Step behind the scenes and witness the craftsmanship. From selecting premium fabrics to the final stitch, explore how our designs come to life.",
      "Every garment begins as an idea, nurtured through sketches, patterns, and precision tailoring. Discover the meticulous process that defines our quality.",
      "Our studio buzzes with creativity—where inspiration meets innovation. See how traditional techniques blend with modern technology.",
      "From mood boards to runway-ready pieces, follow the journey of our collections through the hands of skilled artisans.",
      "Witness the symphony of creativity where fabric, color, and design harmonize to create timeless fashion statements."
    ],
    lookbookTitles: [
      "Seasonal Lookbook: Urban Elegance",
      "Style Stories in Motion",
      "Curated Collections: Modern Edge",
      "Fashion Narratives Unfold",
      "Trends in Motion: Your Style Guide"
    ],
    lookbookDescriptions: [
      "Discover the latest trends in motion. Our seasonal lookbook features versatile styles curated for the modern wardrobe.",
      "Watch as our collections come alive through cinematic storytelling. Each piece tells a unique style narrative.",
      "Experience fashion through a dynamic lens. Our lookbook showcases how to style pieces for different occasions.",
      "From casual chic to evening glamour, our video lookbook demonstrates the versatility of each design.",
      "See how our garments move and flow in real-life settings, styled by our creative directors."
    ],
    buttonTexts: {
      studio: ["🎬 Watch Full Tour", "✨ Explore Studio", "📽️ See The Process", "👁️ Behind The Scenes", "🎨 Creative Journey"],
      lookbook: ["👗 View Collection", "📱 Browse Looks", "🌟 Style Guide", "🎥 Watch Showcase", "💫 Get Inspired"]
    }
  };

  // Get random text pieces
  const getRandomText = (array) => array[Math.floor(Math.random() * array.length)];

  // State for current text pieces
  const [currentText, setCurrentText] = useState({
    studioTitle: getRandomText(textPieces.studioTitles),
    studioDesc: getRandomText(textPieces.studioDescriptions),
    lookbookTitle: getRandomText(textPieces.lookbookTitles),
    lookbookDesc: getRandomText(textPieces.lookbookDescriptions),
    studioBtn: getRandomText(textPieces.buttonTexts.studio),
    lookbookBtn: getRandomText(textPieces.buttonTexts.lookbook)
  });

  const rotateTexts = () => {
    setCurrentText({
      studioTitle: getRandomText(textPieces.studioTitles),
      studioDesc: getRandomText(textPieces.studioDescriptions),
      lookbookTitle: getRandomText(textPieces.lookbookTitles),
      lookbookDesc: getRandomText(textPieces.lookbookDescriptions),
      studioBtn: getRandomText(textPieces.buttonTexts.studio),
      lookbookBtn: getRandomText(textPieces.buttonTexts.lookbook)
    });
  };

  return (
    <div className={Style.fullWrap} style={themeStyles}>
      
      {/* ==================== ROW 1: Studio Tour (YouTube) ==================== */}
      <div className={Style.rowContainer}>
        
        {/* Text Side */}
        <div className={Style.textSide}>
          <div className={Style.titleWrapper}>
            <span className={Style.titleBadge}>Exclusive</span>
            <h2 className={Style.mainTitle}>{currentText.studioTitle}</h2>
            <div className={Style.titleUnderline}></div>
          </div>
          
          <div className={Style.textContent}>
            <p className={Style.para}>
              {currentText.studioDesc}
            </p>
            <div className={Style.statsGrid}>
              <div className={Style.statItem}>
                <span className={Style.statNumber}>50+</span>
                <span className={Style.statLabel}>Artisans</span>
              </div>
              <div className={Style.statItem}>
                <span className={Style.statNumber}>24</span>
                <span className={Style.statLabel}>Hour Crafting</span>
              </div>
              <div className={Style.statItem}>
                <span className={Style.statNumber}>100%</span>
                <span className={Style.statLabel}>Hand-Finished</span>
              </div>
            </div>
          </div>
          
          <div className={Style.btnWrapper}>
            <Link to="/Error" className={Style.creativeBtn}>
              <span>{currentText.studioBtn}</span>
            </Link>
            <button 
              className={Style.textRotateBtn} 
              onClick={rotateTexts}
              title="Get different text"
            >
              🔄
            </button>
            <div className={`${Style.wire} ${Style.wireRight}`}></div>
          </div>
        </div>

        {/* Visual Side (YouTube with Cover) */}
        <div className={Style.visualSide}>
          <div className={Style.videoCard}>
            <div className={Style.videoFrameHorizontal}>
              {!playYt ? (
                <div 
                  className={Style.coverOverlay}
                  onClick={() => setPlayYt(true)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{ 
                    backgroundImage: `url(${isHovered ? StudioCoverHover : StudioCoverPhoto})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className={Style.coverGradient}></div>
                  
                  <div className={Style.coverContent}>
                    <div className={Style.playButton}>
                      <i className="fa-solid fa-play"></i>
                      <div className={Style.playPulse}></div>
                    </div>
                    
                    <div className={Style.coverText}>
                      <span className={Style.videoBadge}>Behind The Scenes</span>
                      <h3 className={Style.videoTitle}>Studio Tour 2024</h3>
                      <p className={Style.videoDescription}>
                        Exclusive look at our creative process
                      </p>
                    </div>
                    
                    <div className={Style.videoMeta}>
                      <span className={Style.metaItem}>⏱️ 8:45</span>
                      <span className={Style.metaItem}>🎥 4K</span>
                      <span className={Style.metaItem}>✨ HD</span>
                    </div>
                  </div>
                  
                  <div className={`${Style.hoverEffect} ${isHovered ? Style.active : ''}`}>
                    <div className={Style.hoverGlow}></div>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/YD9QLw5vBZQ?autoplay=1&modestbranding=1&rel=0"
                  title="Style Studio"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={Style.iframeVideo}
                ></iframe>
              )}
            </div>
            
            <div className={Style.videoInfo}>
              <div className={Style.infoRow}>
                <span className={Style.infoLabel}>🎯 Featured:</span>
                <span className={Style.infoValue}>Design Process</span>
              </div>
              <div className={Style.infoRow}>
                <span className={Style.infoLabel}>📅 Released:</span>
                <span className={Style.infoValue}>March 2024</span>
              </div>
              <div className={Style.infoRow}>
                <span className={Style.infoLabel}>👁️ Views:</span>
                <span className={Style.infoValue}>25K+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== ROW 2: Lookbook (Vertical Video) ==================== */}
      <div className={`${Style.rowContainer} ${Style.reverseRow}`}>
        
        <div className={Style.visualSide}>
          <div className={Style.phoneContainer}>
            <div className={Style.videoFrameVertical}>
              <video 
                src={VerticalVideo} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className={Style.verticalVid}
              ></video>
              <div className={Style.phoneNotch}></div>
              <div className={Style.phoneButtons}>
                <div className={Style.volumeUp}></div>
                <div className={Style.volumeDown}></div>
                <div className={Style.sideButton}></div>
              </div>
              <div className={Style.phoneScreenGlow}></div>
            </div>
            
            <div className={Style.phoneDecorations}>
              <div className={Style.floatingElement}></div>
              <div className={Style.floatingElement}></div>
              <div className={Style.floatingElement}></div>
            </div>
          </div>
        </div>

        <div className={Style.textSide}>
          <div className={Style.titleWrapper}>
            <span className={Style.titleBadge}>New Collection</span>
            <h2 className={Style.mainTitle}>{currentText.lookbookTitle}</h2>
            <div className={Style.titleUnderline}></div>
          </div>
          
          <div className={Style.textContent}>
            <p className={Style.para}>
              {currentText.lookbookDesc}
            </p>
            
            <div className={Style.featureList}>
              <div className={Style.featureItem}>
                <span className={Style.featureIcon}>🎬</span>
                <span className={Style.featureText}>Cinematic Production</span>
              </div>
              <div className={Style.featureItem}>
                <span className={Style.featureIcon}>👗</span>
                <span className={Style.featureText}>20+ Outfits Featured</span>
              </div>
              <div className={Style.featureItem}>
                <span className={Style.featureIcon}>🎵</span>
                <span className={Style.featureText}>Curated Soundtrack</span>
              </div>
              <div className={Style.featureItem}>
                <span className={Style.featureIcon}>✨</span>
                <span className={Style.featureText}>Style Tips Included</span>
              </div>
            </div>
          </div>
          
          <div className={Style.btnWrapper}>
            <Link to="/Error" className={Style.creativeBtn}>
              <span>{currentText.lookbookBtn}</span>
            </Link>
            <div className={`${Style.wire} ${Style.wireLeft}`}></div>
          </div>
        </div>
      </div>

      <div className={Style.bgElements}>
        <div className={Style.bgCircle}></div>
        <div className={Style.bgCircle}></div>
        <div className={Style.bgCircle}></div>
      </div>
    </div>
  );
}