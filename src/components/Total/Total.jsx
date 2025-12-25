import React, { useContext } from 'react'
import Style from './Total.module.css'
import Img1 from "../../assets/Total/1.webp"
import Img2 from "../../assets/Total/2.webp"
import Img3 from "../../assets/Total/3.webp"
import Img4 from "../../assets/Total/4.webp"
import { ThemeContext } from '../ThemeContext/ThemeContext'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function Total() {
  const { theme } = useContext(ThemeContext);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isLight = theme === "light";

  // Dynamic Theme Variables
  const themeStyles = {
    '--bg-color': isLight ? "#ebebeb" : "#474747",
    '--text-color': isLight ? "#474747" : "#ebebeb",
    '--card-bg': isLight ? "rgba(255, 255, 255, 0.95)" : "rgba(45, 55, 72, 0.95)",
    '--card-border': isLight ? "rgba(220, 38, 38, 0.1)" : "rgba(248, 113, 113, 0.2)",
    '--shadow-color': isLight ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.4)",
    '--sub-text': isLight ? "#2d3748" : "#cbd5e0",
    '--line-color': "#dc2626" // Red color for the connecting line
  };

  return (
    <div className={Style.componentContainer} style={themeStyles}>
      <div className={Style.headerSection}>
        <h2 className={Style.title}>Our Journey in Numbers</h2>
        <p className={Style.subtitle}>Celebrating milestones and achievements</p>
      </div>
      
      <div ref={ref} className={Style.totalWrap}>
        
        {/* The Square Track with Moving Lines */}
        <div className={Style.squareTrack}>
          
          {/* Decorative Corner Dots */}
          <div className={`${Style.cornerDot} ${Style.topLeft}`}></div>
          <div className={`${Style.cornerDot} ${Style.topRight}`}></div>
          <div className={`${Style.cornerDot} ${Style.bottomRight}`}></div>
          <div className={`${Style.cornerDot} ${Style.bottomLeft}`}></div>

          {/* Center Decoration */}
          <div className={Style.centerOrb}></div>
          
          {/* Box 1 */}
          <div className={`${Style.box} ${Style.box1}`}>
            <div className={Style.imageWrapper}>
              <img src={Img1} alt="Happy Customers" />
            </div>
            <div className={Style.content}>
              <h2 className={Style.number}>
                {inView && <CountUp start={0} end={2000000} duration={3} suffix="+" />}
              </h2>
              <p className={Style.label}>Happy Customers</p>
            </div>
          </div>

          {/* Box 2 */}
          <div className={`${Style.box} ${Style.box2}`}>
            <div className={Style.imageWrapper}>
              <img src={Img2} alt="Orders Delivered" />
            </div>
            <div className={Style.content}>
              <h2 className={Style.number}>
                {inView && <CountUp start={0} end={54000000} duration={3} suffix="+" />}
              </h2>
              <p className={Style.label}>Orders Delivered</p>
            </div>
          </div>

          {/* Box 3 */}
          <div className={`${Style.box} ${Style.box3}`}>
            <div className={Style.imageWrapper}>
              <img src={Img3} alt="Brands Collaborated" />
            </div>
            <div className={Style.content}>
              <h2 className={Style.number}>
                {inView && <CountUp start={0} end={1564} duration={3} suffix="+" />}
              </h2>
              <p className={Style.label}>Brands Collaborated</p>
            </div>
          </div>

          {/* Box 4 */}
          <div className={`${Style.box} ${Style.box4}`}>
            <div className={Style.imageWrapper}>
              <img src={Img4} alt="Years in Industry" />
            </div>
            <div className={Style.content}>
              <h2 className={Style.number}>
                {inView && <CountUp start={0} end={10} duration={3} suffix="+" />}
              </h2>
              <p className={Style.label}>Years in Industry</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}