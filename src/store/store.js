import { configureStore } from '@reduxjs/toolkit';
import campsitesReducer from './campsitesReducer.js';
import userReducer from './userReducer';

const store = configureStore({
  reducer:
  {
    campsites: campsitesReducer,
    currentUser: userReducer,
  },
});

export default store;

// in your component at the following import
// import { useSelector } from 'react-redux';
// create the following const
// const sample = useSelector((state) => state.sample.testKey);
