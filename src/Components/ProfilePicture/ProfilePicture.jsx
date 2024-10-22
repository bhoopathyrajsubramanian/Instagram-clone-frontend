import { useSelector } from 'react-redux';
import './profilePicture.scss';

export const ProfilePicture = () => {
  const user = useSelector((state) => state.userProfile);
  return (
    <div className='profile-picture-section'>
      <img
        src={`data:image/jpeg;base64,${user?.avatar}`}
        height='40px'
        width='40px'
      />
    </div>
  );
};
