import { configureStore } from '@reduxjs/toolkit';
import homeReducers from './home/homeSlice';

const store = configureStore({
  reducer: {
    home: homeReducers,
  },
});

export default store;
