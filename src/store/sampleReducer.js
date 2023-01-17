import { createSlice } from '@reduxjs/toolkit';

//Sample data for card view setup
const {sampleCampsites} = require("../store/sampleData.js");

// the changeProduct reducer changes the state to a new productId
const sampleSlice = createSlice({
  name: 'campsites',
  initialState: {
    testKey: 'testVal'
  },
  reducers: {
    changeSample: (state, action) => ({
      ...state,
      testKey: action.payload,
    })
  }
});

// export function that will be called by dispatch
export const {
  changeSample
} = sampleSlice.actions;

// export reducer to be used by store
export default sampleSlice.reducer;