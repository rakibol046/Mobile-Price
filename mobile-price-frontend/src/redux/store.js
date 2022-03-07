import { configureStore } from '@reduxjs/toolkit'
import mobileReducer from './reducers/mobileReducer'

export default configureStore({
  reducer: {
    mobile: mobileReducer,
  },
})