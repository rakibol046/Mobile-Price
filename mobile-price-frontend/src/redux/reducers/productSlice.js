import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    brand: "all",
    price: 0
  },
  reducers: {
    setProducts: (state, {payload}) => {
        state.products = payload
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
export const { setProducts, setBrand, setPrice } = productSlice.actions

export default productSlice.reducer