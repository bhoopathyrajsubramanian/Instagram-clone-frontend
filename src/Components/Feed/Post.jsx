import saveIcon from '../../assets/images/save.svg';
import userOptionIcon from '../../assets/images/userOption.svg';
import likeIcon from '../../assets/images/notification.svg';
import messageIcon from '../../assets/images/message.svg';
import shareIcon from '../../assets/images/share.svg';

import './post.scss';
import { useNavigate } from 'react-router-dom';
import { ProfilePicture } from '../ProfilePicture/ProfilePicture';

export const Post = (props) => {
  
  const navigate = useNavigate();
  return (
    <div className='post'>
      <div className='post-header'>
        <ProfilePicture name={props?.postData?.user?.userName} />
        <button
          className='user-name'
          onClick={() => {
            navigate(`/user/${props.postData.user._id}`);
          }}
        >
          {props.postData.user.userName}
        </button>
        <div onClick={() => {}}>
          <img src={userOptionIcon} className='user-option' alt='user-option' />
        </div>
      </div>
      <div className='post-image'>
        <img
          src={`data:image/jpeg;base64,${props.postData.postFile}`}
          height='438px'
          width='823px'
          alt='post-image'
        />
      </div>
      <div className='post-footer'>
        <div className='post-response-field'>
          <div className='post-response'>
            <div className='response-image-field'>
              <button>
                <img src={likeIcon} alt='response' className='response-image' />
              </button>
            </div>
            <div className='response-image-field'>
              <button
                onClick={() =>
                  navigate(
                    `/user/${props.postData.user._id}/post/${props.postData._id}/comments`
                  )
                }
              >
                <img
                  src={messageIcon}
                  alt='response'
                  className='response-image'
                />
              </button>
            </div>
            <div className='response-image-field'>
              <button>
                <img
                  src={shareIcon}
                  alt='response'
                  className='response-image'
                />
              </button>
            </div>
          </div>
          <div className='post-save'>
            <button>
              <img
                src={saveIcon}
                alt='save-post-button'
                className='save-post-button'
              />
            </button>
          </div>
        </div>
        <div className='post-caption-field'>
          <button
            className='user-name-caption'
            onClick={() => {
              navigate(`/user/${props.postData.user._id}`);
            }}
          >
            <ProfilePicture name={props.postData.user.userName} />
          </button>

          <p className='post-caption'>{props.postData.caption}</p>
        </div>
        <button
          className='post-comments'
          onClick={() =>
            navigate(
              `/user/${props.postData.user._id}/post/${props.postData._id}/comments`
            )
          }
        >
          View all comments...
        </button>
      </div>
    </div>
  );
};
