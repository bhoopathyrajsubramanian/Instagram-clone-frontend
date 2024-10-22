import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
const initialPostState = async () => {
  try {
    const response = await axios.get('http://localhost:3030/users/feed/posts');
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
  reducers: {},
});

// export const {  } = postSlice.actions;
export default postSlice.reducer;
