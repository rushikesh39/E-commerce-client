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
      // state.products = [...state.products, ...action.payload];
      // if (Array.isArray(action.payload)) {
      //   state.products = [...state.products, ...action.payload]; // Merge new data with existing data
      // } else {
      //   console.error("Invalid data format:", action.payload,"state", state);
      // }


      const uniqueProductIds = new Set(state.products.map(product => product._id));
      
      // Filter out duplicate objects based on product ID
      const filteredProducts = action.payload.filter(product => !uniqueProductIds.has(product._id));

      // Update state with non-duplicate products
      state.products = [...state.products, ...filteredProducts];


    },
  },
});

export const { setProducts } = productSlice.actions;
export const selectProducts = (state) => state.product.products;
export default productSlice.reducer;
