/* eslint-disable prettier/prettier */
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../reducers/counter/countSlice';

const store = configureStore({
    reducer: counterReducer,
});

export default store;
