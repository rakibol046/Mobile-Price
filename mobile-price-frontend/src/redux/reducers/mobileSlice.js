import { createSlice } from '@reduxjs/toolkit'

export const mobileSlice = createSlice({
  name: 'mobiles',
  initialState: {
    mobiles: [],
    brand: "",
    price: 0
  },
  reducers: {
    setMobiles: (state, {payload}) => {
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
export const { setMobiles, setBrand, setPrice } = mobileSlice.actions

export default mobileSlice.reducer