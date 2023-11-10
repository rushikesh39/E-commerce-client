// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import searchProduct from './searchProduct';
// import cartSlice from './cartSlice';
import cartProduct from './cartSlice'


export const store = configureStore({
  reducer: {
    product: productSlice,
    searchProduct:searchProduct,
    cart:cartProduct,
    // Add other slices here
  },
});
