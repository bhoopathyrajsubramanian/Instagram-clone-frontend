import { useEffect, useState } from 'react';
import { getCookie } from '../../helper';
import axios from 'axios';

export const EditProfile = () => {
  const [userData, setUserData] = useState();
  const user_id = getCookie('user_id');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    try {
      axios.get(`http://localhost:3030/users/${user_id}`).then((res) => {
        setUserData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [user_id]);
  const confirmChanges = async () => {
    const patchData = {};
    if (userName != '') patchData.userName = userName;
    if (password != '') patchData.password = password;
    if (email != '') patchData.email = email;
    console.log(patchData);
    const { data } = await axios.patch(
      `http://localhost:3030/users/${user_id}/`,
      {
        ...patchData,
      }
    );
    if (data) {
      alert('Changes Made Successfully');
    } else {
      alert('Error');
    }
  };
  return (
    <div className='EditProfile-EditProfile'>
      <div className='edit-profile-form'>
        <div className='edit-profile-form-field'>
          <label htmlFor='Caption'>Change UserName </label>
          <input
            type='text'
            onChange={(e) => setUserName(e.target.value)}
            name='userName'
          />
        </div>
        <div className='edit-profile-form-field'>
          <label htmlFor='email'> Change Email </label>
          <input
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            name='email'
          />
        </div>
        <div className='edit-profile-form-field'>
          <label htmlFor='password'> Password </label>
          <input
            type='text'
            placeholder='Enter New Password'
            onChange={(e) => setPassword(e.target.value)}
            name='password'
          />
        </div>
        <button onClick={() => confirmChanges()}>Add Post</button>
      </div>
    </div>
  );
};
