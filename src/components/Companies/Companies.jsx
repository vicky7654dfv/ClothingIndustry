import React, { useContext } from 'react'
import Img1 from "../../assets/Companies/adidas.webp"
import Img2 from "../../assets/Companies/flying.webp"
import Img3 from "../../assets/Companies/pepe.webp"
import Img4 from "../../assets/Companies/allen.webp"
import Img5 from "../../assets/Companies/rare.webp"
import Img6 from "../../assets/Companies/basics.webp"
import Img7 from "../../assets/Companies/puma.webp"
import Img8 from "../../assets/Companies/peter.webp"
import Style from './Companies.module.css' 
import { ThemeContext } from '../ThemeContext/ThemeContext'

export default function Companies() {
    const {theme} = useContext(ThemeContext)
  return (
    <div data-aos="fade-up" className={Style.companiesWrap} style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}>
        <div className={Style.clientsText}>
        <h1>Brands</h1>
      </div>
      <div className={Style.clientListWrapper}>
        <div className={Style.clientList}>
          <div className={Style.client}>
            <img src={Img1} alt="Client 1" />
          </div>
          <div className={Style.client}>
            <img src={Img2} alt="Client 2" />
          </div>
          <div className={Style.client}>
            <img src={Img3} alt="Client 3" />
          </div>
          <div className={Style.client}>
            <img src={Img4} alt="Client 4" />
          </div>
          <div className={Style.client}>
            <img src={Img5} alt="Client 5" />
          </div>
          <div className={Style.client}>
            <img src={Img6} alt="Client 6" />
          </div>
          <div className={Style.client}>
            <img src={Img7} alt="Client 7" />
          </div>
          <div className={Style.client}>
            <img src={Img8} alt="Client 8" />
          </div>

          {/* <!-- copy loop images --> */}
          <div className={Style.client}>
            <img src={Img1} alt="Client 1" />
          </div>
          <div className={Style.client}>
            <img src={Img2} alt="Client 2" />
          </div>
          <div className={Style.client}>
            <img src={Img3} alt="Client 3" />
          </div>
          <div className={Style.client}>
            <img src={Img4} alt="Client 4" />
          </div>
          <div className={Style.client}>
            <img src={Img5} alt="Client 5" />
          </div>
          <div className={Style.client}>
            <img src={Img6} alt="Client 6" />
          </div>
          <div className={Style.client}>
            <img src={Img7} alt="Client 7" />
          </div>
          <div className={Style.client}>
            <img src={Img8} alt="Client 8" />
          </div>
        </div>
      </div>
      <div className={Style.clientsText2}>
        <h1>Collections</h1>
      </div>
    </div>
  )
}
