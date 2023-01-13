import { configureStore } from '@reduxjs/toolkit';
import sampleReducer from './sampleReducer.js';

const store = configureStore({
  reducer: { sample: sampleReducer },
});
export default store;

// in your component at the following import
// import { useSelector } from 'react-redux';
// create the following const
// const sample = useSelector((state) => state.sample.testKey);