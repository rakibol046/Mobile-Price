import { configureStore } from '@reduxjs/toolkit';
import mobileSlice from './reducers/mobileSlice';
import watchSlice from './reducers/watchSlice';
import tabletSlice from './reducers/tabletSlice';
import productSlice  from './reducers/productSlice';

export default configureStore({
  reducer: {
    mobile: mobileSlice,
    watch: watchSlice,
    tablet: tabletSlice,
    product: productSlice
  },
})