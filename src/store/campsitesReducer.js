import { createSlice } from '@reduxjs/toolkit';

// Sample data for card view setup
const { allCamps } = require('./allCamps.js');

const campsitesSlice = createSlice({
  name: 'campsites',
  initialState: {
    data: allCamps.data,
  },
  reducers: {

  },
});

// export reducer to be used by store
export default campsitesSlice.reducer;
