import axios from 'axios';

export function getCookie(name) {
  let cookieArr = document.cookie.split('; ');
  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split('=');
    if (name == cookiePair[0]) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

export const getUserInfo = async (user_id) => {
  try {
    const response = await axios.get(
      `http://localhost:3030/users/${user_id}/posts`
    );
    const res = response.data.data;
    return res;
  } catch (error) {
    console.log(error);
  }
};
