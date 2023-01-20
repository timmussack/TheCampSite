import { createSlice } from '@reduxjs/toolkit';

const coordSlice = createSlice({
  name: 'coord',
  initialState: {
    coordData: {},
    location: false,
  },
  reducers: {
    changeCoord: (state, action) => ({
      ...state,
      coordData: action.payload,
    }),
    setLocation: (state, action) => ({
      ...state,
      location: action.payload,
    }),
  },
});

// export function that will be called by dispatch
export const {
  changeCoord,
  setLocation,
} = coordSlice.actions;

// export reducer to be used by store
export default coordSlice.reducer;
