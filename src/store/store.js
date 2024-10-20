import { configureStore } from '@reduxjs/toolkit';
import userProfileSlice from './userProfileSlice.js';

export const store = configureStore({
  reducer: {
    userProfile: userProfileSlice,
  },
});
