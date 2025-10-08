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
import { SearchContext } from "../SearchContext/SearchContext";

export default function Grid1() {
  const { theme } = useContext(ThemeContext);
  const { searchTerm } = useContext(SearchContext);

  const products = [
    { img: Img1, brand: "Basics", desc: "Plain brown coat", price: "Rs. 2640", old: "Rs. 5490", stock: "Only few left" },
    { img: Img2, brand: "Allen Solly", desc: "Solid Orange coat suit", price: "Rs. 4550", old: "Rs. 6000", stock: "Only 5 left" },
    { img: Img3, brand: "Flying Machine", desc: "Dotted top", price: "Rs. 640", old: "Rs. 1000", stock: "Only few left" },
    { img: Img4, brand: "H&M", desc: "Stylish yellow hoodie", price: "Rs. 900", old: "Rs. 2490", stock: "Only 1 left" },
    { img: Img5, brand: "Basics", desc: "Blue & white stripped top", price: "Rs. 524", old: "Rs. 990", stock: "Limited" },
    { img: Img6, brand: "Chicco", desc: "Kids over coat", price: "Rs. 440", old: "Rs. 590", stock: "Only few left" },
    { img: Img7, brand: "Basics", desc: "Double pocket shirt", price: "Rs. 550", old: "Rs. 1000", stock: "Only few left" },
    { img: Img8, brand: "Rare Rabbit", desc: "Horizontal stripe T-shirt", price: "Rs. 1640", old: "Rs. 2490", stock: "Only 3 left" },
    { img: Img9, brand: "Pepe Jeans", desc: "Kids blue jeans", price: "Rs. 500", old: "Rs. 1200", stock: "Only 1 left" },
    { img: Img10, brand: "Puma", desc: "Yellow hoodie", price: "Rs. 800", old: "Rs. 1500", stock: "Only few left" },
    { img: Img11, brand: "Peter England", desc: "Woolen sweat T-shirt", price: "Rs. 1240", old: "Rs. 2390", stock: "Only 7 left" },
    { img: Img12, brand: "Adidas", desc: "Grey T-shirt", price: "Rs. 800", old: "Rs. 1400", stock: "Only 5 left" },
    { img: Img13, brand: "Basics", desc: "Plain light green collared T-shirt", price: "Rs. 464", old: "Rs. 570", stock: "Limited stock!" },
    { img: Img14, brand: "Peter England", desc: "Jeans shirt", price: "Rs. 345", old: "Rs. 540", stock: "Only few left" },
    { img: Img15, brand: "Zenat", desc: "Blue jean stripped dress", price: "Rs. 2240", old: "Rs. 3490", stock: "Only 4 left" },
    { img: Img16, brand: "Basics", desc: "Full hand jeans shirt", price: "Rs. 1140", old: "Rs. 5490", stock: "Only few left" },
    { img: Img17, brand: "Allen Solly", desc: "Kids wear", price: "Rs. 340", old: "Rs. 590", stock: "Only few left" },
    { img: Img18, brand: "Flying Machine", desc: "Violet T-shirt", price: "Rs. 777", old: "Rs. 1985", stock: "Only 1 left" },
    { img: Img19, brand: "Pepe Jeans", desc: "Beige cotton pant", price: "Rs. 1250", old: "Rs. 2000", stock: "Only few left" },
    { img: Img20, brand: "Wrogn", desc: "Blue over-sized torn jean", price: "Rs. 3640", old: "Rs. 6040", stock: "Only 2 left" },
    { img: Img21, brand: "HighLander", desc: "Pink printed top", price: "Rs. 540", old: "Rs. 1490", stock: "Only 3 left" },
    { img: Img22, brand: "Basics", desc: "Full hand dotted shirt", price: "Rs. 1200", old: "Rs. 2490", stock: "Only 5 left" },
    { img: Img23, brand: "Peter England", desc: "Full hand white T-shirt", price: "Rs. 2000", old: "Rs. 5495", stock: "Only few left" },
    { img: Img24, brand: "PlayFeel", desc: "Full hand orange T-shirt", price: "Rs. 660", old: "Rs. 2550", stock: "Only 1 left" },
    { img: Img25, brand: "Allen Solly", desc: "Yellow top and 3/4 pant", price: "Rs. 3520", old: "Rs. 4500", stock: "Only 2 left" },
  ];

const filteredProducts = products.filter(
  (item) =>
    item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <>
      <div
        className={Style.gridWrap}
        style={{
          background: theme === "light" ? "#ebebebff" : "#474747ff",
          color: theme === "light" ? "#474747ff" : "#ebebebff",
        }}
      >
        
        {filteredProducts.map((item, index) => (
          <div key={index} className={Style.gridPack}>
            <img src={item.img} alt="" />
            <h2>{item.brand}</h2>
            <p>{item.desc}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h4>{item.price}</h4>
              <span style={{ textDecoration: "line-through" }}>{item.old}</span>
            </div>
            <h5 style={{ color: item.stock.toLowerCase().includes("limited") ? "red" : "" }}>{item.stock}</h5>
          </div>
        ))}
      </div>
      <hr />
    </>
  );
}
