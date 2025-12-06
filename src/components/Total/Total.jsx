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
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      data-aos="fade-up"
      className={Style.totalWrap}
      style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}
    >
      <div className={Style.box}>
        <img src={Img1} alt="" />
        <h2>
          {inView && <CountUp start={0} end={2000000} duration={3} suffix="+" />}
        </h2>
        <p>Happy Customers</p>
      </div>

      <div className={Style.box}>
        <img src={Img2} alt="" />
        <h2>
          {inView && <CountUp start={0} end={54000000} duration={3} suffix="+" />}
        </h2>
        <p>Orders Delivered</p>
      </div>

      <div className={Style.box}>
        <img src={Img3} alt="" />
        <h2>
          {inView && <CountUp start={0} end={1564} duration={3} suffix="+" />}
        </h2>
        <p>Brands Collaborated With</p>
      </div>

      <div className={Style.box}>
        <img src={Img4} alt="" />
        <h2>
          {inView && <CountUp start={0} end={10} duration={3} suffix="+" />}
        </h2>
        <p>Years In Industry</p>
      </div>

    </div>
  )
}
