import { Post } from './post';
import './feed.scss';
import { useSelector } from 'react-redux';

export const Feed = () => {
  let posts = useSelector((state) => state.feedPosts);
  const a = [...posts];
  posts = a.reverse();
  console.log(posts);
  return (
    <div className='feed'>
      {posts.map((post, index) => {
        return <Post key={index} postData={post} />;
      })}
    </div>
  );
};
