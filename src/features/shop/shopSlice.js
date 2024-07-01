import { createSlice } from "@reduxjs/toolkit";
import SHOP_DATA from "./shop.data";

const initialState = {
    collections: SHOP_DATA
};

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        
    }
});

// export const { setShop } = shopSlice.actions;
export default shopSlice.reducer;
  