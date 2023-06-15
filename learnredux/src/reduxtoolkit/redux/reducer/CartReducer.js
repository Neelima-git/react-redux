import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartValues: [],
  totalPrice: 0,
};

/*
CreateSlice has 3 different parameters by default
*/
const CartReducer = createSlice({
  name: "CartReducer",
  initialState,
  reducers: {
    incrementCart: (state, action) => {
      state.cartValues.push(action.payload);
      const pricearray = state.cartValues.map((obj) => obj.productPrice);
      state.totalPrice = pricearray.reduce((a, b) => a + b);
    },
    decrementCart: (state, action) => {
      const index = state.cartValues.findIndex(
        (obj) => obj.productName === action.payload.productName
      );
      if (index > -1) {
        state.cartValues.splice(index, 1);
      }
      const pricearray = state.cartValues.map((obj) => obj.productPrice);
      state.totalPrice = pricearray.reduce((a, b) => a + b, 0);
    },
  },
});

export const { incrementCart, decrementCart } = CartReducer.actions;
export default CartReducer.reducer;
