import React, { useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Img1 from "../../assets/Unique/1.webp";
import Img2 from "../../assets/Unique/2.webp";
import Img3 from "../../assets/Unique/3.webp";
import Img4 from "../../assets/Unique/4.webp";
import Style from "./Unique.module.css";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export default function Unique() {
  const { theme } = useContext(ThemeContext);
  const isLight = theme === "light";
  const trainRef = useRef(null);
  const wheelRefs = useRef([]);

  useEffect(() => {
    // Variable wheel speeds animation
    wheelRefs.current.forEach((wheel) => {
      if (!wheel) return;
      const randomSpeed = 1 + Math.random() * 0.5;
      wheel.style.animationDuration = `${randomSpeed}s`;
    });
  }, []);

  // Data for the train carriages
  const originalTrainData = [
    { 
      id: 1, 
      img: Img1, 
      title: "Crafted Pieces", 
      desc: "Every outfit tells a story—bold, confident, and uniquely you.",
      sparkColor: isLight ? "#ff65aa" : "#ff4081"
    },
    { 
      id: 2, 
      img: Img2, 
      title: "Customer Care", 
      desc: "We're here to assist you with every step—your satisfaction is priority.",
      sparkColor: isLight ? "#4a90e2" : "#64b5f6"
    },
    { 
      id: 3, 
      img: Img3, 
      title: "Packaging", 
      desc: "Thoughtfully designed packaging reflecting commitment to style.",
      sparkColor: isLight ? "#50c878" : "#81c784"
    },
    { 
      id: 4, 
      img: Img4, 
      title: "Quality", 
      desc: "Premium materials ensuring comfort, durability, and timeless style.",
      sparkColor: isLight ? "#ff9800" : "#ffb74d"
    },
  ];

  // Create a seamless loop by duplicating data
  const trainData = [...originalTrainData, ...originalTrainData, ...originalTrainData];

  // Dynamic Theme Colors
  const themeStyles = {
    outer: {
      background: isLight ? "#ebebebff" : "#474747ff",
      color: isLight ? "#474747ff" : "#ebebebff",
    },
    carriage: {
      background: isLight 
        ? "linear-gradient(145deg, #ffffff, #e6e6e6)" 
        : "linear-gradient(145deg, #3a3a3a, #2b2b2b)",
      color: isLight ? "#333" : "#f0f0f0",
      borderColor: isLight ? "#ccc" : "#555",
    },
    btn: {
      background: isLight ? "#333" : "#f0f0f0",
      color: isLight ? "#fff" : "#333",
    },
    trackBed: {
      background: isLight 
        ? "linear-gradient(to bottom, #5d4037, #3e2723, #4e342e)" 
        : "linear-gradient(to bottom, #3e2723, #2c1810, #3e2723)"
    },
    rails: {
      background: isLight 
        ? "linear-gradient(to bottom, #b0bec5, #78909c, #546e7a)" 
        : "linear-gradient(to bottom, #78909c, #546e7a, #37474f)"
    }
  };

  // Handle train hover (Pause/Resume)
  const handleTrainHover = (isHovering) => {
    if (trainRef.current) {
      trainRef.current.style.animationPlayState = isHovering ? "paused" : "running";
    }
  };

  return (
    <div className={Style.outerWrap} style={themeStyles.outer}>
      <h2 style={{ color: themeStyles.outer.color }}>What Makes Us Unique</h2>
      <p style={{ color: themeStyles.outer.color, marginBottom: "2rem" }}>
        Bringing You Genuine Fashion & Wardrobe Inspiration
      </p>
      
      {/* Removed Divider and extra space as requested */}

      {/* Track Area */}
      <div className={Style.trackContainer}>
        {/* Ballast & Track Bed */}
        <div className={Style.ballast}></div>
        <div className={Style.trackBed} style={themeStyles.trackBed}>
          {/* Sleepers */}
          <div className={Style.sleepers}>
            {[...Array(30)].map((_, i) => (
              <div key={i} className={Style.sleeper}></div>
            ))}
          </div>
          
          {/* Rails */}
          <div className={Style.railLeft} style={themeStyles.rails}></div>
          <div className={Style.railRight} style={themeStyles.rails}></div>
          
          {/* Rail Spikes */}
          <div className={Style.railSpikes}>
            {[...Array(60)].map((_, i) => (
              <div key={i} className={Style.spike}></div>
            ))}
          </div>
        </div>

        {/* Environment Details */}
        <div className={Style.railTies}></div>
        <div className={Style.railGraffiti}></div>

        {/* Moving Train */}
        <div 
          className={Style.trainMover} 
          ref={trainRef}
          onMouseEnter={() => handleTrainHover(true)}
          onMouseLeave={() => handleTrainHover(false)}
        >
          {trainData.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className={`${Style.carriage} ${Style[`carriage${index % 4 + 1}`]}`}
              style={themeStyles.carriage}
            >
              {/* Locomotive Features for First Car */}
              {index === 0 && (
                <>
                  <div className={Style.headlight}>
                    <div className={Style.lightBeam}></div>
                  </div>
                  <div className={Style.frontGrill}></div>
                  <div className={Style.cabin}></div>
                </>
              )}

              {/* Roof Detail */}
              <div className={Style.roof}>
                <div className={Style.roofVents}></div>
                <div className={Style.roofRails}></div>
              </div>

              {/* Side Panels & Details */}
              <div className={Style.sidePanels}>
                <div className={Style.panelRivets}>
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={Style.rivet}></div>
                  ))}
                </div>
                <div className={Style.carriageNumber}>{index + 1}</div>
              </div>

              {/* Connectors with Realistic Couplers */}
              {index < trainData.length - 1 && (
                <>
                  <div className={Style.coupler}></div>
                  <div className={Style.connectingRod}></div>
                  <div className={Style.steamPipe}></div>
                  <div className={Style.airHose}></div>
                </>
              )}

              {/* Carriage Content */}
              <div className={Style.carriageContent}>
                <div className={Style.imgFrame}>
                  <img src={item.img} alt={item.title} />
                  <div className={Style.imgOverlay}></div>
                </div>
                <div className={Style.textSection}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <Link to="/Error">
                    <button className={Style.actionBtn} style={themeStyles.btn}>
                      Explore More
                    </button>
                  </Link>
                </div>
              </div>

              {/* Under Carriage Details */}
              <div className={Style.underCarriage}>
                {/* Brake System */}
                <div className={Style.brakeSystem}>
                  <div className={Style.brakePad}></div>
                  <div className={Style.brakeLever}></div>
                </div>
                
                {/* Suspension */}
                <div className={Style.suspension}>
                  <div className={Style.spring}></div>
                  <div className={Style.shockAbsorber}></div>
                </div>
              </div>

              {/* Wheels & Chassis */}
              <div className={Style.chassis}>
                <div className={Style.wheelAssembly}>
                  {/* Main Wheels with Connecting Rod */}
                  <div className={Style.wheelGroup}>
                    <div 
                      className={Style.wheel}
                      ref={el => wheelRefs.current[index * 2] = el}
                    >
                      <div className={Style.wheelRim}></div>
                      <div className={Style.wheelHub}></div>
                      <div className={Style.spokes}></div>
                      <div className={Style.valveStem}></div>
                    </div>
                    
                    {/* Connecting Rod between wheels */}
                    <div className={Style.wheelConnector}></div>
                    
                    <div 
                      className={Style.wheel}
                      ref={el => wheelRefs.current[index * 2 + 1] = el}
                    >
                      <div className={Style.wheelRim}></div>
                      <div className={Style.wheelHub}></div>
                      <div className={Style.spokes}></div>
                      <div className={Style.valveStem}></div>
                    </div>
                  </div>
                  
                  {/* Fire Sparks */}
                  <div className={Style.sparkSystem}>
                    <div 
                      className={Style.fireSparks}
                      style={{ backgroundColor: item.sparkColor }}
                    ></div>
                    <div 
                      className={Style.fireSparks}
                      style={{ backgroundColor: item.sparkColor }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Track Sparks */}
              <div className={Style.trackSparks}>
                <div className={Style.spark}></div>
                <div className={Style.spark}></div>
                <div className={Style.spark}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Ground Details */}
        <div className={Style.groundDetails}>
          <div className={Style.railGravel}></div>
          <div className={Style.railWeeds}></div>
        </div>

        {/* Speed Indicator */}
        <div className={Style.speedIndicator}>
          <div className={Style.speedNeedle}></div>
          <div className={Style.speedText}>Variable Speed Train</div>
        </div>
      </div>

      {/* Track Controls */}
      <div className={Style.controls}>
        <button 
          className={Style.controlBtn} 
          onClick={() => handleTrainHover(true)}
          style={{ backgroundColor: themeStyles.btn.background, color: themeStyles.btn.color }}
        >
          ⏸ Pause Train
        </button>
        <button 
          className={Style.controlBtn}
          onClick={() => handleTrainHover(false)}
          style={{ backgroundColor: themeStyles.btn.background, color: themeStyles.btn.color }}
        >
          ▶ Resume Train
        </button>
      </div>
    </div>
  );
}