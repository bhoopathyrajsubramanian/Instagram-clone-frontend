import { Post } from './post';
import './feed.scss';
import { useSelector } from 'react-redux';

export const Feed = () => {
  const posts = useSelector((state) => state.post);
  return (
    <div className='feed'>
      {posts.map((post, index) => {
        return <Post key={index} postData={post}  />;
      })}
    </div>
  );
};
