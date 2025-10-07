import React, { useContext } from 'react'
import Style from './Total.module.css'
import Img1 from "../../assets/Total/1.jpg"
import Img2 from "../../assets/Total/2.jpg"
import Img3 from "../../assets/Total/3.jpg"
import Img4 from "../../assets/Total/4.jpg"
import { ThemeContext } from '../ThemeContext/ThemeContext'
export default function Total() {
            const {theme} = useContext(ThemeContext)
  return (
    <div className={Style.totalWrap} style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}>
        <div className={Style.box}>
            <img src={Img1} alt="" />
            <h2>2M+</h2>
            <p>Happy Customers</p>
        </div>
        <div className={Style.box}>
            <img src={Img2} alt="" />
            <h2>2M+</h2>
            <p>Happy Customers</p>
        </div>
        <div className={Style.box}>
            <img src={Img3} alt="" />
            <h2>2M+</h2>
            <p>Happy Customers</p>
        </div>
        <div className={Style.box}>
            <img src={Img4} alt="" />
            <h2>2M+</h2>
            <p>Happy Customers</p>
        </div>
    </div>
  )
}
