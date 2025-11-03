import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  // Add item to cart (or increase if it already exists)
  const addToCart = (product) => {
    const itemInCart = cartItem.find((item) => item.id === product.id);

    if (itemInCart) {
      const updatedCart = cartItem.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItem(updatedCart);
      toast.success("Product quantity increased")
    } else {
      setCartItem((prev) => [...prev, { ...product, quantity: 1 }]);
      toast.success("Product is added to cart")
    }
  };

  // Update quantity (increase or decrease)
  const updateQuantity = (productId, action) => {
    setCartItem((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === productId) {
            let newQuantity = item.quantity;
            if (action === "increase") newQuantity += 1;
            if (action === "decrease") newQuantity -= 1;

            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter((item) => item !== null)
    );
  };

  // Remove item completely
  const removeFromCart = (productId) => {
    setCartItem((prev) => prev.filter((item) => item.id !== productId));
    toast.error("Product is removed from cart")
};

  return (
    <CartContext.Provider
      value={{ cartItem, setCartItem, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
