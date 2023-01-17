import { createSlice } from '@reduxjs/toolkit';

// Sample data for card view setup
const { sampleCampsites } = require('./sampleData.js');

const campsitesSlice = createSlice({
  name: 'campsites',
  initialState: {
    data: sampleCampsites,
  },
  reducers: {

  },
});

// export reducer to be used by store
export default campsitesSlice.reducer;
