// slices/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
        console.log("cart item",state.cartItems)
        const product = action.payload;
        console.log("product to add cart ",product)
        const existingItem = state.cartItems.find((item) => item._id === product._id);
        console.log("existing item",existingItem)
        if (existingItem) {
          // If the item already exists, update its quantity
          existingItem.quantity += 1;
        } else {
          // If the item doesn't exist, add it to the cart with quantity 1
          state.cartItems.push({ ...action.payload, quantity: 1 });
        }
      },
    incrementQuantity: (state, action) => {
      const { productId } = action.payload;
      const item = state.cartItems.find((item) => item._id === productId);

      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const { productId } = action.payload;
      const item = state.cartItems.find((item) => item._id === productId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeProduct: (state, action) => {
      const { productId } = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== productId
      );
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
