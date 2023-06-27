import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  items: Product[];
  totalAmount: number;
  totalCount: number;
}

interface Product {
  _id: string;
  title: string;
  price: number;
  gender: string;
}

const initialState: CounterState = {
  items: [],
  totalAmount: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTocart: (state, action: PayloadAction<any>) => {
      const productDetails: Product = action.payload.product;
      if (state.items.length) {
        const checkDuplicate = state.items.find(
          (product) => product._id === productDetails._id
        );
        if (!checkDuplicate) {
          state.totalCount += 1;
          state.items.unshift(productDetails);
        }
      } else {
        state.items.unshift(productDetails);
        state.totalCount += 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<any>) => {
      state.totalCount -= 1;
      state.items = state.items.filter((obj) => obj._id !== action.payload.id);
      if (!state.items.length) {
        state.totalCount = 0;
      }
    },
    addItems: (state, action: PayloadAction<any>) => {
      state.items = action.payload.filteredArray;
      state.totalCount = action.payload.filteredArray.length;
    },
    clearcart: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
