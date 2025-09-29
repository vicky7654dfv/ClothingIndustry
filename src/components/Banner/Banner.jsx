import React from 'react'
import Style from "./Banner.module.css"
import Img1 from "../../assets/Banner/banner1.png"
import Img2 from "../../assets/Banner/banner2.jpeg"

export default function Banner() {
  return (
    <div className={Style.bannerWrap}>
      <img className={Style.img1Wrap} src={Img2} alt="pic2" />
      <img className={Style.img2Wrap} src={Img1} alt="pic1" />

    </div>
  )
}
