import { configureStore } from '@reduxjs/toolkit';
import sampleReducer from './sampleReducer.js';
import campsitesReducer from './campsitesReducer.js';

const store = configureStore({
  reducer:
  {
    sample: sampleReducer,
    campsites: campsitesReducer,
  },
});

export default store;

// in your component at the following import
// import { useSelector } from 'react-redux';
// create the following const
// const sample = useSelector((state) => state.sample.testKey);
