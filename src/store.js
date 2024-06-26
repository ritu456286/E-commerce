import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './features/userSlice';
import cartReducer from './features/cart/cartSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
