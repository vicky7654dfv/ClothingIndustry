import React, { useContext } from "react";
import { CartContext } from "../../components/CartContext/CartContext.jsx";
import Style from "./Checkout.module.css";
import Img1 from "../../assets/Checkout/1.webp";
import Vid from "../../assets/Checkout/vidBg.mp4";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext.jsx";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cart, total } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div data-aos="flip-up"
        className={Style.checkoutWrap}
        style={{
          background: theme === "light" ? "#ebebebff" : "#474747ff",
          color: theme === "light" ? "#474747ff" : "#ebebebff",
        }}
      >
        <h1 style={{ color: "indianred", paddingBottom: "10px" }}>Checkout</h1>

        {cart.length === 0 ? (
          <div className={Style.noItemWrap}>
            <video src={Vid} autoPlay loop muted playsInline></video>
            <img src={Img1} alt="" />
            <h4>
              No items in cart. It looks like you haven’t added anything yet.
              Browse through our latest collections and add your favorite
              products to proceed with checkout.
            </h4>
            <button>
              <Link to={"/"}>Get it Now</Link>
            </button>
          </div>
        ) : (
          <div className={Style.itemWrap}>
          <video src={Vid} autoPlay loop muted playsInline></video>
<div className={Style.itemBox}>
  {cart.map((item, index) => (
    <div key={item.id} className={Style.items} style={{ top: `${20 + index * 8}%` }}>
      <strong className={Style.str1}>{item.brand}</strong>
      <strong className={Style.str2}>
        — {item.desc} × {item.qty} = ₹{(item.price * item.qty).toLocaleString("en-IN")}
      </strong>
    </div>
  ))}

  <h3 className={Style.total}>Total: ₹{Number(total).toLocaleString("en-IN")}</h3>
  </div>
</div>

        )}
      </div>
    </>
  );
}
