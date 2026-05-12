const CART_STORAGE_KEY = "grabcart_cart";

export const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);

    if (!savedCart) {
      return [];
    }

    const parsedCart = JSON.parse(savedCart);
    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch {
    return [];
  }
};

export const saveCartToStorage = (cartItem) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItem));
  } catch {
    // Ignore storage failures so cart actions still work in private/restricted browsers.
  }
};
