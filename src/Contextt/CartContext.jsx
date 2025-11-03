import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  // ✅ Add item to cart (supports custom quantity)
  const addToCart = (product, quantity = 1) => {
    const itemInCart = cartItem.find((item) => item.id === product.id);

    if (itemInCart) {
      const updatedCart = cartItem.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItem(updatedCart);
      toast.info("Product quantity updated");
    } else {
      setCartItem((prev) => [...prev, { ...product, quantity }]);
      toast.success("Product added to cart");
    }
  };

  
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
        .filter(Boolean)
    );
  };

  // ✅ Remove item completely
  const removeFromCart = (productId) => {
    setCartItem((prev) => prev.filter((item) => item.id !== productId));
    toast.error("Product removed from cart");
  };

  return (
    <CartContext.Provider
      value={{ cartItem, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
