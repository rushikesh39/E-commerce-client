// src/features/product/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const searchProductSlice = createSlice({
  name: 'searchProduct',
  initialState: {
    searchProducts: [], 
  },
  reducers: {
    setSearchProducts: (state, action) => {
        state.searchProducts = action.payload;
      
    },
  },
});

export const { setSearchProducts } = searchProductSlice.actions;
export const selectSearchProducts = (state) => state.searchProduct.searchProducts;
export default searchProductSlice.reducer;
