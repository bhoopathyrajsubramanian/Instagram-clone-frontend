/* eslint-disable react/prop-types */
import './PostThumbnail.scss';
export const PostThumbnail = (props) => {
  return (
    <div className='UserProfile-PostThumbnail'>
      <img
        src={`data:image/jpeg;base64,${props.thumbnail}`}
        alt=''
        height='350px'
        width='350px'
      />
    </div>
  );
};
