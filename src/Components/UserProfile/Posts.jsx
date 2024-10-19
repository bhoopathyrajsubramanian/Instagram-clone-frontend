/* eslint-disable no-unused-vars */
import './Posts.scss';
import profileIcon from '../../assets/images/plus.svg';

import { PostThumbnail } from './PostThumbnail';
//data will be taken from State

export const Posts = (props) => {
  return (
    <div className='UserProfile-Posts'>
      {!props.posts.length ? (
        <div className='no-posts'>
          <img src={profileIcon} alt='' height='100px' width='100px' />
          <h3>No Posts</h3>
        </div>
      ) : (
        <div className='posts-grid'>
          {props.posts.map((post, index) => {
            return <PostThumbnail thumbnail={post.postFile} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};
