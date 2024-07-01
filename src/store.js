import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import userReducer from './features/user/userSlice';
import cartReducer from './features/cart/cartSlice'
import directoryReducer from './features/directory/directorySlice';
import shopReducer from './features/shop/shopSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = (getDefaultMiddleware) => {
  if(process.env.NODE_ENV === 'development') {
    return getDefaultMiddleware().concat(logger);
  }
  return getDefaultMiddleware();
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares, 
});


const persistor = persistStore(store);

export { store, persistor };
