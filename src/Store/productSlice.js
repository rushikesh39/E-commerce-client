// src/features/product/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [], // Initial state for products
  },
  reducers: {
    setProducts: (state, action) => {
      // state.products = action.payload;
      state.products = [...state.products, ...action.payload];
      // if (Array.isArray(action.payload)) {
      //   state.products = [...state.products, ...action.payload]; // Merge new data with existing data
      // } else {
      //   console.error("Invalid data format:", action.payload,"state", state);
      // }
    },
  },
});

export const { setProducts } = productSlice.actions;
export const selectProducts = (state) => state.product.products;
export default productSlice.reducer;
