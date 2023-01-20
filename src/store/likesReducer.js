import { createSlice } from '@reduxjs/toolkit';

// the changeProduct reducer changes the state to a new productId
const likeSlice = createSlice({
  name: 'like',
  initialState: {
    userLikes: [],
  },
  reducers: {
    changeLikes: (state, action) => ({
      ...state,
      userLikes: action.payload,
    }),
    addLike: (state, action) => ({
      ...state,
      userLikes: [...state.userLikes, action.payload],
    }),
    unliked: (state, action) => ({
      ...state,
      userLikes: [...state.userLikes.slice(0, action.payload),
        ...state.userLikes.slice(action.payload + 1)],
    }),
  },
});

// export function that will be called by dispatch
export const {
  changeLikes, addLike, unliked,
} = likeSlice.actions;

// export reducer to be used by store
export default likeSlice.reducer;
