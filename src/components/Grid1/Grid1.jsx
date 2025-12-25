import React, { useContext } from "react";
import Style from "./Grid1.module.css";
// ... (Keep your existing Image imports here) ...
import Img1 from "../../assets/Grid1/1.webp";
import Img2 from "../../assets/Grid1/2.webp";
import Img3 from "../../assets/Grid1/3.webp";
import Img4 from "../../assets/Grid1/4.webp";
import Img5 from "../../assets/Grid1/5.webp";
import Img6 from "../../assets/Grid1/6.webp";
import Img7 from "../../assets/Grid1/7.webp";
import Img8 from "../../assets/Grid1/8.webp";
import Img9 from "../../assets/Grid1/9.webp";
import Img10 from "../../assets/Grid1/10.webp";
import Img11 from "../../assets/Grid1/11.webp";
import Img12 from "../../assets/Grid1/12.webp";
import Img13 from "../../assets/Grid1/13.webp";
import Img14 from "../../assets/Grid1/14.webp";
import Img15 from "../../assets/Grid1/15.webp";
import Img16 from "../../assets/Grid1/16.webp";
import Img17 from "../../assets/Grid1/17.webp";
import Img18 from "../../assets/Grid1/18.webp";
import Img19 from "../../assets/Grid1/19.webp";
import Img20 from "../../assets/Grid1/20.webp";
import Img21 from "../../assets/Grid1/21.webp";
import Img22 from "../../assets/Grid1/22.webp";
import Img23 from "../../assets/Grid1/23.webp";
import Img24 from "../../assets/Grid1/24.webp";
import Img25 from "../../assets/Grid1/25.webp";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { SearchContext } from "../SearchContext/SearchContext";
import { CartContext } from "../CartContext/CartContext";

export default function Grid1() {
  const { theme } = useContext(ThemeContext);
  const { searchTerm } = useContext(SearchContext);
  const { addToCart, removeFromCart, cart } = useContext(CartContext);

  const products = [
    { id: 1, img: Img1, brand: "Basics", desc: "Plain brown coat", price: 2640 },
    { id: 2, img: Img2, brand: "Allen Solly", desc: "Solid Orange coat suit", price: 4550 },
    { id: 3, img: Img3, brand: "Flying Machine", desc: "Dotted top", price: 640 },
    { id: 4, img: Img4, brand: "H&M", desc: "Stylish yellow hoodie", price: 900 },
    { id: 5, img: Img5, brand: "Basics", desc: "Blue & white stripped top", price: 524 },
    { id: 6, img: Img6, brand: "Chicco", desc: "Kids over coat", price: 440 },
    { id: 7, img: Img7, brand: "Basics", desc: "Double pocket shirt", price: 550 },
    { id: 8, img: Img8, brand: "Rare Rabbit", desc: "Horizontal stripe T-shirt", price: 1640 },
    { id: 9, img: Img9, brand: "Pepe Jeans", desc: "Kids blue jeans", price: 500 },
    { id: 10, img: Img10, brand: "Puma", desc: "Yellow hoodie", price: 800 },
    { id: 11, img: Img11, brand: "Peter England", desc: "Woolen sweat T-shirt", price: 1240 },
    { id: 12, img: Img12, brand: "Adidas", desc: "Grey T-shirt", price: 800 },
    { id: 13, img: Img13, brand: "Basics", desc: "Plain light green collared T-shirt", price: 464 },
    { id: 14, img: Img14, brand: "Peter England", desc: "Jeans shirt", price: 345 },
    { id: 15, img: Img15, brand: "Zenat", desc: "Blue jean stripped dress", price: 2240 },
    { id: 16, img: Img16, brand: "Basics", desc: "Full hand jeans shirt", price: 1140 },
    { id: 17, img: Img17, brand: "Allen Solly", desc: "Kids wear", price: 340 },
    { id: 18, img: Img18, brand: "Flying Machine", desc: "Violet T-shirt", price: 777 },
    { id: 19, img: Img19, brand: "Pepe Jeans", desc: "Beige cotton pant", price: 1250 },
    { id: 20, img: Img20, brand: "Wrogn", desc: "Blue over-sized torn jean", price: 3640 },
    { id: 21, img: Img21, brand: "HighLander", desc: "Pink printed top", price: 540 },
    { id: 22, img: Img22, brand: "Basics", desc: "Full hand dotted shirt", price: 1200 },
    { id: 23, img: Img23, brand: "Peter England", desc: "Full hand white T-shirt", price: 2000 },
    { id: 24, img: Img24, brand: "PlayFeel", desc: "Full hand orange T-shirt", price: 660 },
    { id: 25, img: Img25, brand: "Allen Solly", desc: "Yellow top and 3/4 pant", price: 3520 },
  ];

  const filteredProducts = products.filter(
    (item) =>
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isLight = theme === "light";

  // Dynamic Theme Colors
  const pageStyle = {
    background: isLight ? "#ebebebff" : "#474747ff",
    color: isLight ? "#474747ff" : "#ebebebff",
    transition: "background 0.3s ease, color 0.3s ease",
  };

  // Card Theme Vars
  const cardVars = {
    '--card-bg': isLight ? 'rgba(255, 255, 255, 0.65)' : 'rgba(92, 92, 92, 0.4)',
    '--card-border': isLight ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.1)',
    '--text-primary': isLight ? '#474747' : '#ebebeb',
    '--text-secondary': isLight ? '#666' : '#ccc',
    '--glow-shadow': isLight ? '0 8px 32px rgba(31, 38, 135, 0.15)' : '0 8px 32px rgba(0, 0, 0, 0.3)',
    '--glow-accent': isLight ? 'rgba(205, 92, 92, 0.4)' : 'rgba(205, 92, 92, 0.6)', // IndianRed glow
  };

  return (
    <div className={Style.pageContainer} style={pageStyle}>
      
      <div className={Style.headerContainer}>
        <h1 className={Style.mainTitle}>New Arrivals</h1>
        <p className={Style.subtitle}>Curated styles for the modern wardrobe</p>
        <div className={Style.headerDivider}></div>
      </div>

      <div className={Style.gridWrap}>
        {filteredProducts.map((item) => {
          const cartItem = cart.find((p) => p.id === item.id);
          
          return (
            <div 
              key={item.id} 
              className={Style.gridPack}
              style={cardVars}
            >
              {/* Image Section */}
              <div className={Style.imageContainer}>
                <div className={Style.imageOverlay}></div>
                <img src={item.img} alt={item.brand} />
                <div className={Style.brandBadge}>{item.brand}</div>
              </div>
              
              {/* Details Section */}
              <div className={Style.detailsContainer}>
                <h2>{item.brand}</h2>
                <p>{item.desc}</p>
                
                {/* Price is now always visible here */}
                <h4 className={Style.priceText}>
                  ₹{item.price.toLocaleString("en-IN")}
                </h4>
                
                {/* Quantity Controls */}
                <div className={Style.quantitySection}>
                  <div className={Style.btnGroup}>
                    <button
                      onClick={() => removeFromCart(item)}
                      aria-label={`decrease ${item.brand}`}
                      disabled={!cartItem}
                      className={Style.quantityBtn}
                    >
                      −
                    </button>
                    <span className={Style.quantityCount}>
                      {cartItem ? cartItem.qty : 0}
                    </span>
                    <button 
                      onClick={() => addToCart(item)} 
                      aria-label={`increase ${item.brand}`}
                      className={Style.quantityBtn}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={Style.gridFooter}>
        <div className={Style.footerLine}></div>
        <p className={Style.footerText}>Showing {filteredProducts.length} of {products.length} items</p>
      </div>
    </div>
  );
}