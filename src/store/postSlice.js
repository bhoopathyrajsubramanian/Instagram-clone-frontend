import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
// import { getCookie } from '../helper';

// const user_id = getCookie('user_id');
const initialPostState = async () => {
  try {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    const response = await axios.get(`http://localhost:3030/users/671297a697b020dc73ca1b3b/posts`);
=======
    const response = await axios.get('http://localhost:3030/users/feed/posts');
>>>>>>> Stashed changes
=======
    const response = await axios.get('http://localhost:3030/users/feed/posts');
>>>>>>> Stashed changes
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
    
  },
});

// export const {  } = postSlice.actions;
export default postSlice.reducer;
