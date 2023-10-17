import { configureStore } from "@reduxjs/toolkit";
import homeReducers from '../redux/';

const store = configureStore(
  reducer: {
    home: homeReducers,
  }
);

export default store;