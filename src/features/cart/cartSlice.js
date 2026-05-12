import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { loadCartFromStorage } from "./cartStorage";

const initialState = {
  cartItem: loadCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const itemInCart = state.cartItem.find((item) => item.id === product.id);

      if (itemInCart) {
        itemInCart.quantity += quantity;
      } else {
        state.cartItem.push({ ...product, quantity });
      }
    },
    updateQuantity: (state, action) => {
      const { productId, actionType } = action.payload;
      const itemInCart = state.cartItem.find((item) => item.id === productId);

      if (!itemInCart) return;

      if (actionType === "increase") {
        itemInCart.quantity += 1;
      }

      if (actionType === "decrease") {
        itemInCart.quantity -= 1;
      }

      if (itemInCart.quantity <= 0) {
        state.cartItem = state.cartItem.filter((item) => item.id !== productId);
      }
    },
    removeItemFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter((item) => item.id !== action.payload);
    },
  },
});

export const { updateQuantity, removeItemFromCart } = cartSlice.actions;

export const addToCart =
  (product, quantity = 1) =>
  (dispatch, getState) => {
    const itemInCart = getState().cart.cartItem.find(
      (item) => item.id === product.id,
    );

    dispatch(cartSlice.actions.addItemToCart({ product, quantity }));

    if (itemInCart) {
      toast.info("Product quantity updated");
    } else {
      toast.success("Product added to cart");
    }
  };

export const removeFromCart = (productId) => (dispatch) => {
  dispatch(removeItemFromCart(productId));
  toast.error("Product removed from cart");
};

export default cartSlice.reducer;
