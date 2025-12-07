import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 1. MODIFIED: Initialize Cart from localStorage
  // This checks if data exists before setting the empty [] array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 2. NEW: Save to localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // --- YOUR EXISTING LOGIC BELOW ---

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      const price = Number(product.price) || 0;
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + qty } : p
        );
      }
      return [...prev, { id: product.id, brand: product.brand, desc: product.desc, img: product.img, price, qty }];
    });
  };

  const removeFromCart = (product, qty = 1) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (!exists) return prev;
      if (exists.qty <= qty) return prev.filter((p) => p.id !== product.id);
      return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty - qty } : p));
    });
  };

  const setQuantity = (productId, quantity) => {
    setCart((prev) => {
      if (quantity <= 0) return prev.filter((p) => p.id !== productId);
      return prev.map((p) => (p.id === productId ? { ...p, qty: quantity } : p));
    });
  };

  // This is used by Checkout to empty the cart
  const clearCart = () => setCart([]);

  const total = cart.reduce((acc, item) => acc + (Number(item.price) || 0) * (item.qty || 0), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, setQuantity, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};