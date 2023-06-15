import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducer/CartReducer";

export const cartStore = configureStore({
  //All the created reducers should be added here
  reducer: {
    CartReducer: CartReducer,
  },
});
