import { configureStore } from '@reduxjs/toolkit';
import userProfileSlice from './userProfileSlice.js';
import postSlice from './postSlice.js';

export const store = configureStore({
  reducer: {
    userProfile: userProfileSlice,
    feedPosts: postSlice,
  },
});
