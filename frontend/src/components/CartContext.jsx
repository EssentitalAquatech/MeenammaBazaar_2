

// import React, { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   // refresh ke baad bhi data rahe
//   useEffect(() => {
//     const savedCart = localStorage.getItem("myCart");

//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("myCart", JSON.stringify(cart));
//   }, [cart]);

//   // add item
//   const addToCart = (item) => {
//     setCart((prev) => [...prev, item]);
//   };

//   // remove item
//   const removeFromCart = (name) => {
//     setCart((prev) =>
//       prev.filter((item) => item.product.name !== name)
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }











import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Refresh ke baad bhi data rahe
  useEffect(() => {
    const savedCart =
      localStorage.getItem("myCart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "myCart",
      JSON.stringify(cart)
    );
  }, [cart]);

  // Add item
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  // Remove item
  const removeFromCart = (name) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          item.product.name !== name
      )
    );
  };

  // ✅ NEW FUNCTION
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("myCart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart, // ✅ add here
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}