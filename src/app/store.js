import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/features/cart/cartSlice";
import { saveCartToStorage } from "@/features/cart/cartStorage";
import productsReducer from "@/features/products/productsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

store.subscribe(() => {
  saveCartToStorage(store.getState().cart.cartItem);
});
