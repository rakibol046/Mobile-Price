import { createSlice } from '@reduxjs/toolkit'

export const watchSlice = createSlice({
  name: 'watches',
  initialState: {
    watches: [],
    brand: "",
    price: 0
  },
  reducers: {
    setWatches: (state, {payload}) => {
        state.watches = payload
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
export const { setWatches, setBrand, setPrice } = watchSlice.actions

export default watchSlice.reducer