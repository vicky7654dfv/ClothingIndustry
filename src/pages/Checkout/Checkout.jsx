import React, { useContext } from "react";
import { CartContext } from "../../components/CartContext/CartContext.jsx";
import Style from "./Checkout.module.css";
import Img1 from "../../assets/Checkout/1.webp";
import Vid from "../../assets/Checkout/vidBg.mp4";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function Checkout() {
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
        <div className={Style.headerSection}>
          <h1 className={Style.pageTitle}>Your Shopping Bag</h1>
          <p className={Style.pageSubtitle}>Review your items and proceed to secure checkout</p>
        </div>

        {cart.length === 0 ? (
          <div className={Style.noItemWrap}>
            <video src={Vid} autoPlay loop muted playsInline className={Style.bgVideo}></video>
            
            <div className={Style.emptyCartContent}>
              <div className={Style.imageContainer}>
                <img src={Img1} alt="Empty Cart" />
              </div>
              
              <div className={Style.textContainer}>
                <h2 className={Style.emptyTitle}>Your Cart is Feeling Light</h2>
                <h4 className={Style.emptyDesc}>
                  It looks like you haven’t added anything yet. 
                  Browse through our latest collections and find something that speaks to your style.
                </h4>
                <div className={Style.btnWrapper}>
                  <Link to="/" className={Style.getItNowBtn}>
                    Start Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={Style.itemWrap}>
            <video src={Vid} autoPlay loop muted playsInline className={Style.bgVideo}></video>
            <div className={Style.itemBox}>
              
              <div className={Style.scrollableList}>
                {cart.map((item) => (
                  <div key={item.id} className={Style.items}>
                    
                    <div className={Style.itemInfo}>
                      <strong className={Style.str1}>{item.brand}</strong>
                      <span className={Style.str2}>{item.desc}</span>
                      <span className={Style.priceText}>
                          ₹{(item.price * item.qty).toLocaleString("en-IN")}
                      </span>
                    </div>

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
              
              <div className={Style.checkoutFooter}>
                <div className={Style.totalSection}>
                  <span className={Style.totalLabel}>Grand Total</span>
                  <h3 className={Style.total}>₹{Number(total).toLocaleString("en-IN")}</h3>
                </div>
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