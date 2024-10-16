import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice, // Correctly reference cartSlice
  },
});

export default appStore;
