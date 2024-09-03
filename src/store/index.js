import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import fixedSlice from "./fixedSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer:{
        user:userSlice,
        fixedSlice,
        cartSlice
    }
})