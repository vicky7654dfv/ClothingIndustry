import React, { useContext } from "react";
import { CartContext } from "../../components/CartContext/CartContext.jsx";
import Style from "./Checkout.module.css";
import Img1 from "../../assets/Checkout/1.webp";
import Vid from "../../assets/Checkout/vidBg.mp4";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function Checkout() {
  // 1. Get all necessary functions from Context
  const { cart, total, clearCart, addToCart, removeFromCart, setQuantity } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    clearCart();
    navigate("/Error");
  };

  return (
    <>
      <div
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
            <div className={Style.btnWrapper}>
              <Link to="/" className={Style.getItNowBtn}>
                Get it Now
              </Link>
            </div>
          </div>
        ) : (
          <div className={Style.itemWrap}>
            <video src={Vid} autoPlay loop muted playsInline></video>
            <div className={Style.itemBox}>
              
              {/* Scrollable list of items */}
              <div className={Style.scrollableList}>
                {cart.map((item) => (
                  <div key={item.id} className={Style.items}>
                    
                    {/* Item Info (Brand, Desc, Price) */}
                    <div className={Style.itemInfo}>
                      <strong className={Style.str1}>{item.brand}</strong>
                      <span className={Style.str2}>{item.desc}</span>
                      <span className={Style.priceText}>
                         ₹{(item.price * item.qty).toLocaleString("en-IN")}
                      </span>
                    </div>

                    {/* Controls (+, -, x) */}
                    <div className={Style.controls}>
                      <div className={Style.qtyHandler}>
                        <button 
                          onClick={() => removeFromCart(item)} 
                          className={Style.qtyBtn}
                        >
                          −
                        </button>
                        <span className={Style.qtyNum}>{item.qty}</span>
                        <button 
                          onClick={() => addToCart(item)} 
                          className={Style.qtyBtn}
                        >
                          +
                        </button>
                      </div>

                      {/* Remove Button (X) */}
                      <button 
                        className={Style.removeBtn} 
                        onClick={() => setQuantity(item.id, 0)}
                        title="Remove item"
                      >
                        ✕
                      </button>
                    </div>

                  </div>
                ))}
              </div>
              
              {/* Footer with Total and Place Order Button */}
              <div className={Style.checkoutFooter}>
                <h3 className={Style.total}>Total: ₹{Number(total).toLocaleString("en-IN")}</h3>
                <button 
                  className={Style.placeOrderBtn} 
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
              </div>

            </div>
          </div>
        )}
      </div>
    </>
  );
}