import { createSlice } from '@reduxjs/toolkit';

// the changeProduct reducer changes the state to a new productId
const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {
      name: '',
    },
  },
  reducers: {
    changeUser: (state, action) => ({
      ...state,
      userData: action.payload,
    }),
  },
});

// export function that will be called by dispatch
export const {
  changeUser,
} = userSlice.actions;

// export reducer to be used by store
export default userSlice.reducer;
