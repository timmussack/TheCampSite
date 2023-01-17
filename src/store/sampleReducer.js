import { createSlice } from '@reduxjs/toolkit';

// the changeProduct reducer changes the state to a new productId
const sampleSlice = createSlice({
  name: 'sample',
  initialState: {
    testKey: 'testVal',
  },
  reducers: {
    changeSample: (state, action) => ({
      ...state,
      testKey: action.payload,
    }),
  },
});

// export function that will be called by dispatch
export const {
  changeSample,
} = sampleSlice.actions;

// export reducer to be used by store
export default sampleSlice.reducer;
