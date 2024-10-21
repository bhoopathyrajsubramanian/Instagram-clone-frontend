import { useNavigate } from 'react-router-dom';
import { ProfilePicture } from '../profilePicture.jsx/profilePicture';
import { useSelector } from 'react-redux';
import './button.scss';

const SideBarButton = (props) => {
  let userName = useSelector((state) => state.feedPosts[0].user.userName[0]);
  const navigate = useNavigate();
  return (
    <div>
      {props.name === 'Profile' ? (
        <button
          className='content-button profile-picture'
          onClick={() => navigate(`/${props.route}`)}
        >
          <ProfilePicture name = {userName}/>
          <p className='content-button-name'>{props.name}</p>
        </button>
      ) : (
        <button
          className='content-button'
          onClick={() => navigate(`/${props.route}`)}
        >
          <img
            src={props.image}
            alt={props.name}
            className='content-button-image'
          />
          <span className='cotent-button-name'>{props.name}</span>
        </button>
      )}
    </div>
  );
};

export default SideBarButton;
