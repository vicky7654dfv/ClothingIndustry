import React, { useContext } from "react";
import Style from "./Grid1.module.css";
import Img1 from "../../assets/Grid1/1.jpg";
import Img2 from "../../assets/Grid1/2.jpg";
import Img3 from "../../assets/Grid1/3.jpg";
import Img4 from "../../assets/Grid1/4.jpg";
import Img5 from "../../assets/Grid1/5.jpg";
import Img6 from "../../assets/Grid1/6.jpg";
import Img7 from "../../assets/Grid1/7.jpg";
import Img8 from "../../assets/Grid1/8.jpg";
import Img9 from "../../assets/Grid1/9.jpg";
import Img10 from "../../assets/Grid1/10.jpg";
import Img11 from "../../assets/Grid1/11.jpg";
import Img12 from "../../assets/Grid1/12.jpg";
import Img13 from "../../assets/Grid1/13.jpg";
import Img14 from "../../assets/Grid1/14.jpg";
import Img15 from "../../assets/Grid1/15.jpg";
import Img16 from "../../assets/Grid1/16.jpg";
import Img17 from "../../assets/Grid1/17.jpg";
import Img18 from "../../assets/Grid1/18.jpg";
import Img19 from "../../assets/Grid1/19.jpg";
import Img20 from "../../assets/Grid1/20.jpg";
import Img21 from "../../assets/Grid1/21.jpg";
import Img22 from "../../assets/Grid1/22.jpg";
import Img23 from "../../assets/Grid1/23.jpg";
import Img24 from "../../assets/Grid1/24.jpg";
import Img25 from "../../assets/Grid1/25.jpg";
import { ThemeContext } from "../ThemeContext/ThemeContext";
export default function Grid1() {
        const {theme} = useContext(ThemeContext)
  return (
    <>
    <div className={Style.gridWrap} style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}>
      <div className={Style.gridPack}>
        <img src={Img1} alt="" />
        <h2>Basics</h2>
        <p>Plain brown coat</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 2640</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 5490
          </span>
        </div>
        <h5>Only few left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img2} alt="" />
        <h2>Allen Solly</h2>
        <p>Solid Orange coat suit</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 4550</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 6000
          </span>
        </div>
        <h5>Only 5 left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img3} alt="" />
        <h2>Flying Machine</h2>
        <p>Dotted top</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 640</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 1000
          </span>
        </div>
        <h5>Only few left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img4} alt="" />
        <h2>H&M</h2>
        <p>Stylish yellow hoodie</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 900</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 2490
          </span>
        </div>
        <h5>Only 1 left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img5} alt="" />
        <h2>Basics</h2>
        <p>Blue & white stripped top</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 524</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 990
          </span>
        </div>
        <h5 style={{color:"red"}}>Limited</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img6} alt="" />
        <h2>Chicco</h2>
        <p>Kids over coat</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 440</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 590
          </span>
        </div>
        <h5>Only few left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img7} alt="" />
        <h2>Basics</h2>
        <p>Double pocket shirt</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 550</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 1000
          </span>
        </div>
        <h5 style={{color:"red"}}>Only few left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img8} alt="" />
        <h2>Rare Rabbit</h2>
        <p>Horizontal stripe T-shirt</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 1640</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 2490
          </span>
        </div>
        <h5>Only 3 left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img9} alt="" />
        <h2>Pepe Jeans</h2>
        <p>Kids blue jeans</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 500</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 1200
          </span>
        </div>
        <h5 style={{color:"red"}}>Only 1 left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img10} alt="" />
        <h2>Puma</h2>
        <p>Yellow hoodie</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 800</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 1500
          </span>
        </div>
        <h5>Only few left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img11} alt="" />
        <h2>Peter England</h2>
        <p>Woolen sweat T-shirt</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 1240</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 2390
          </span>
        </div>
        <h5>Only 7 left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img12} alt="" />
        <h2>Adidas</h2>
        <p>Grey T-shirt</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 800</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 1400
          </span>
        </div>
        <h5>Only 5 left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img13} alt="" />
        <h2>Basics</h2>
        <p>Plain light green collared T-shirt</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 464</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 570
          </span>
        </div>
        <h5 style={{color:"red"}}>Limited stock!</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img14} alt="" />
        <h2>Peter England</h2>
        <p>Jeans shirt</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 345</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 540
          </span>
        </div>
        <h5>Only few left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img15} alt="" />
        <h2>Zenat</h2>
        <p>Blue jean stripped dress</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 2240</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 3490
          </span>
        </div>
        <h5>Only 4 left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img16} alt="" />
        <h2>Basics</h2>
        <p>Full hand jeans shirt</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 1140</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 5490
          </span>
        </div>
        <h5 style={{color:"red"}}>Only few left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img17} alt="" />
        <h2>Allen Solly</h2>
        <p>Kids wear</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 340</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 590
          </span>
        </div>
        <h5>Only few left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img18} alt="" />
        <h2>Flying Machine</h2>
        <p>Violet T-shirt</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 777</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 1985
          </span>
        </div>
        <h5>Only 1 left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img19} alt="" />
        <h2>Pepe Jeans</h2>
        <p>Beige cotton pant</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 1250</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 2000
          </span>
        </div>
        <h5 style={{color:"red"}}>Only few left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img20} alt="" />
        <h2>Wrogn</h2>
        <p>Blue over-sized torn jean</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 3640</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 6040
          </span>
        </div>
        <h5>Only 2 left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img21} alt="" />
        <h2>HighLander</h2>
        <p>Pink printed top</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 540</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 1490
          </span>
        </div>
        <h5>Only 3 left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img22} alt="" />
        <h2>Basics</h2>
        <p>Full hand dotted shirt</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 1200</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 2490
          </span>
        </div>
        <h5>Only 5 left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img23} alt="" />
        <h2>Peter England</h2>
        <p>Full hand white T-shirt</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 2000</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 5495
          </span>
        </div>
        <h5>Only few left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img24} alt="" />
        <h2>PlayFeel</h2>
        <p>Full hand orange T-shirt</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 660</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 2550
          </span>
        </div>
        <h5 style={{color:"red"}}>Only 1 left</h5>
      </div>
      <div className={Style.gridPack}>
        <img src={Img25} alt="" />
        <h2>Allen Solly</h2>
        <p>Yellow top and 3/4 pant</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rs. 3520</h4>
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            Rs. 4500
          </span>
        </div>
        <h5>Only 2 left</h5>
      </div>
    </div>
    <hr />
    </>
  );
}
