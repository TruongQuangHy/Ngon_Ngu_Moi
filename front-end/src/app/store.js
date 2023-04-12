import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/user/userSlice';
import productReducer from '../features/product/productSlice';


export const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productReducer,

  },
});


