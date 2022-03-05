import { configureStore } from '@reduxjs/toolkit'
import mobileReducer from './Reducers/mobileReducer'

export default configureStore({
  reducer: {
    mobile: mobileReducer,
  },
})