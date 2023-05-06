import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addProducts = (products) => {
    console.log(products);
    setProducts([...products]);
  };

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };

  const updateCart = (id, qty) => {
    setCart([...cart.filter((c) => (c.id === id ? (c.qty = qty) : c.qty))]);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        updateCart,
        addProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
  return useContext(CartContext);
}
