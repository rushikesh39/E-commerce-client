// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import searchProduct from './searchProduct';
import cartSlice from './cartSlice';
import userSlice from './userSlice';



export const store = configureStore({
  reducer: {
    product: productSlice,
    searchProduct:searchProduct,
    cartProduct:cartSlice,
    userName:userSlice,
  },
});
