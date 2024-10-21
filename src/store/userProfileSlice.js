import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { getCookie } from '../helper';

const user_id = getCookie('user_id');
const initialUserProfileState = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3030/users/${user_id}/posts`
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return []
  }
};
const initialState = await initialUserProfileState();
const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        console.log(state, action.payload);
      },
    },
  },
});

export const { addPost } = userProfileSlice.actions;
export default userProfileSlice.reducer;
