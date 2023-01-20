import { configureStore } from '@reduxjs/toolkit';
import campsitesReducer from './campsitesReducer.js';
import userReducer from './userReducer.js';
import coordReducer from './coordReducer.js';
import likesReducer from './likesReducer.js';

const store = configureStore({
  reducer:
  {
    campsites: campsitesReducer,
    currentUser: userReducer,
    currentCoord: coordReducer,
    likes: likesReducer,
  },
});

export default store;

// in your component at the following import
// import { useSelector } from 'react-redux';
// create the following const
// const sample = useSelector((state) => state.sample.testKey);
