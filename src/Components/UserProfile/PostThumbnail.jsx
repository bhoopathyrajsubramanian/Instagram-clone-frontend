/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import './PostThumbnail.scss';
export const PostThumbnail = (props) => {
  const navigate = useNavigate();
  return (
    <div className='UserProfile-PostThumbnail'>
      <img
        onClick={() => {
          navigate(`/user/${props.userid}/post/${props.postid}/comments`);
        }}
        src={`data:image/jpeg;base64,${props.thumbnail}`}
        alt=''
        height='350px'
        width='350px'
      />
    </div>
  );
};
