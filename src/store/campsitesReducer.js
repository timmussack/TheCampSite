import { createSlice } from '@reduxjs/toolkit';

// Sample data for card view setup
const { allCamps } = require('./allCamps.js');

const campsitesSlice = createSlice({
  name: 'campsites',
  initialState: {
    data: {},
  },
  reducers: {
    changeData: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const {
  changeData,
} = campsitesSlice.actions;

// export reducer to be used by store
export default campsitesSlice.reducer;
