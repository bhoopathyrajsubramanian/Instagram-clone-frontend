import './Userinfo.scss';
import plus from '../../assets/images/plus.svg';
import user from '../../assets/images/user.svg';
import postsvg from '../../assets/images/posts.svg';
import tagged from '../../assets/images/tagged.svg';
import saved from '../../assets/images/saved.svg';
import dots from '../../assets/images/dots-horizontal.svg';
import { useState } from 'react';
import { Posts } from './Posts.jsx';
import { useSelector } from 'react-redux';

export const Userinfo = () => {
  const count = 0;
  const [selected, setSelected] = useState('Posts');
  const posts = useSelector((state) => state.post);
  console.log(posts);
  return (
    <div className='UserProfile-Userinfo'>
      <div className='header'>
        {/* top division for user profile and followers */}
        <div className='profile'>
          <button>
            <img src={user} alt='' height='120px' width='124px' />
          </button>
        </div>
        <div className='profile-details'>
          <div className='profile-options'>
            <div className='options'>
              <button>{posts[0].user.userName}</button>
            </div>
            <div className='options'>
              <button>Edit Profile</button>
            </div>
            <div className='options'>
              <button>View Archive</button>
            </div>
            <div className='options'>
              <button>
                <img src={dots} alt='' height='30px' width='30px' />
              </button>
              {/* Three Dots Icon */}
            </div>
          </div>
          <div className='followers-details '>
            <div className='options'>
              <button>{count} posts</button>
            </div>
            <div className='options'>
              <button>{count} followers</button>
            </div>
            <div className='options'>
              <button>{count} following</button>
            </div>
          </div>
          <div className='about-user'>
            <div className='name'>
              <span>My Real Name</span>
            </div>
            <div className='about-content'>
              <span>My about content</span>
            </div>
          </div>
        </div>
      </div>
      <div className='memories'>
        <button>
          {/* need to add plus icon */}
          <img src={plus} alt='' height='70px' width='70px' />
        </button>
      </div>
      <div className='post-options'>
        <div className='options'>
          <button
            className={`${selected == 'Posts' ? 'active' : ''}`}
            onClick={() => setSelected('Posts')}
          >
            {/* need to download svg */}
            <img src={postsvg} alt='' height='20px' width='20px' />
            Posts
          </button>
        </div>
        <div className='options'>
          <button
            className={`${selected == 'Saved' ? 'active' : ''}`}
            onClick={() => setSelected('Saved')}
          >
            {/* need to download svg */}
            <img src={saved} alt='' height='20px' width='20px' />
            Saved
          </button>
        </div>
        <div className='options'>
          <button
            className={`${selected == 'Tagged' ? 'active' : ''}`}
            onClick={() => setSelected('Tagged')}
          >
            {/* need to download svg */}
            <img src={tagged} alt='' height='20px' width='20px' />
            Tagged
          </button>
        </div>
      </div>
      <div className='posts'>
        <Posts currentPage={selected} posts={posts} />
      </div>
    </div>
  );
};
