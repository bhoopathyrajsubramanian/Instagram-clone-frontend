import axios from 'axios';
import { getCookie } from '../../helper';
import './deleteprofile.scss';
import { useNavigate } from 'react-router-dom';
export const DeleteProfile = () => {
  const navigate = useNavigate();
  const deactivateAccount = async () => {
    const user_id = getCookie('user_id');
    try {
      const response = await axios.delete(
        `http://localhost:3030/users/${user_id}`
      );
      if (response) {
        document.cookie = "user_id = ''";
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='UserProfile-DeleteProfile'>
      <div className='delete-profile'>
        <button
          onClick={() => {
            deactivateAccount();
          }}
        >
          Deactivate Account
        </button>
      </div>
    </div>
  );
};
