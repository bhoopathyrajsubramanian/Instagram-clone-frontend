import './PostThumbnail.scss';
export const PostThumbnail = (props) => {
  return (
    <div className='UserProfile-PostThumbnail'>
      <img src={props.thumbnail} alt='' height='350px' width='350px' />


    </div>
  );
};
