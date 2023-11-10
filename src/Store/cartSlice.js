// src/features/product/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartProductSlice = createSlice({
  name: 'cartProduct',
  initialState: {
    cartProducts: [],
  },
  reducers: {
    addToCartProduct: (state, action) => {
      console.log('Payload received:', action.payload);
      const existingProduct = state.cartProducts.find(
        (product) => product._id === action.payload._id
      );

      if (existingProduct) {
        // If the product already exists in the cart, increment its quantity
        existingProduct.quantity += 1;
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      }

      console.log('Updated cartProducts:', [...state.cartProducts]);
    },

    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      state.cartProducts = state.cartProducts.filter(
        (product) => product._id !== productIdToRemove
      );
      console.log('Updated cartProducts after removal:', [...state.cartProducts]);
    },

    incrementQuantity: (state, action) => {
      const productIdToIncrement = action.payload;
      const productToIncrement = state.cartProducts.find(
        (product) => product._id === productIdToIncrement
      );

      if (productToIncrement) {
        productToIncrement.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const productIdToDecrement = action.payload;
      const productToDecrement = state.cartProducts.find(
        (product) => product._id === productIdToDecrement
      );

      if (productToDecrement && productToDecrement.quantity > 1) {
        productToDecrement.quantity -= 1;
      }
    },
  },
});

export const {
  addToCartProduct,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartProductSlice.actions;
export const selectCartProducts = (state) => state.cartProduct.cartProducts;
export default cartProductSlice.reducer;
