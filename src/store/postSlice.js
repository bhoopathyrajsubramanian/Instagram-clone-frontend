import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
// import { getCookie } from '../helper';

// const user_id = getCookie('user_id');
const initialPostState = async () => {
  try {
    const response = await axios.get(`http://localhost:3030/users/671297a697b020dc73ca1b3b/posts`);
    return response.data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const initialState = await initialPostState();
const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        console.log(state, action.payload);
      },
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
