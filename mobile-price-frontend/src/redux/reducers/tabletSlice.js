import { createSlice } from '@reduxjs/toolkit'

export const tabletSlice = createSlice({
  name: 'mobiles',
  initialState: {
    mobiles: [],
    brand: "",
    price: 0
  },
  reducers: {
    setTablets: (state, {payload}) => {
        state.mobiles = payload
    },
    setBrand: (state, action) => {
        state.brand = action.payload
    },
    setPrice: (state, action) => {
        state.price = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTablets, setBrand, setPrice } = tabletSlice.actions

export default tabletSlice.reducer