/* eslint-disable no-unused-vars */
import './Posts.scss';
import profileIcon from '../../assets/images/plus.svg';

import { PostThumbnail } from './PostThumbnail';
//data will be taken from State
const data = [];
export const Posts = (props) => {
  // const currentPage = props.currentPage;
  return (
    <div className='UserProfile-Posts'>
      {!data.length ? (
        <div className='no-posts'>
          <img src={profileIcon} alt='' height='100px' width='100px' />
          <h3>No Posts</h3>
        </div>
      ) : (
        <div className='posts-grid'>
          {data.map((thumbnail, index) => {
            return <PostThumbnail thumbnail={thumbnail} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};
