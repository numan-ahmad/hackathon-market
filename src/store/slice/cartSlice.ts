import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  items: [],
  totalAmount: number,
  totalCount: number
}

const initialState: CounterState = {
  items: [],
  totalAmount: 0,
  totalCount: 0
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTocart: (state, action: PayloadAction<any>) => {
        state.totalCount += action.payload.quantity;
    },
    removeFromCart: (state, action :PayloadAction<any>) => {
        state.totalCount -= action.payload.quantity;
    },
    clearcart: (state) => {
        state = initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions

export default cartSlice.reducer