// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';

export const store = configureStore({
  reducer: {
    product: productSlice,
    // Add other slices here
  },
});
