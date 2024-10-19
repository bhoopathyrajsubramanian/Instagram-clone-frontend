import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const user_id = '6710b6003e6dfac15e5694b1';
const initialPostState = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3030/users/${user_id}/posts`
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
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
