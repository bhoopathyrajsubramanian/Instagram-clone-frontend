import { useEffect, useState } from 'react';
import { getCookie } from '../../helper.js';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import plus from '../../assets/images/plus.svg';
import userPicture from '../../assets/images/user.svg';
import postsvg from '../../assets/images/posts.svg';
import tagged from '../../assets/images/tagged.svg';
import saved from '../../assets/images/saved.svg';
import dots from '../../assets/images/dots-horizontal.svg';

import { Posts } from './Posts.jsx';

import './Userinfo.scss';
import { DeleteProfile } from './DeleteProfile.jsx';

export const Userinfo = () => {
  const count = 0;
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [selected, setSelected] = useState('Posts');
  const params = useParams();
  const navigate = useNavigate();
  let user_id = getCookie('user_id');
  user_id = params.userid == user_id ? user_id : params.userid;

  const [user, setUser] = useState();
  useEffect(() => {
    try {
      axios.get(`http://localhost:3030/users/${user_id}`).then((res) => {
        setUser(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [user_id]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:3030/users/${user_id}/posts`)
        .then((res) => setPosts(res.data.data));
    } catch (error) {
      console.log(error);
    }
  }, [user_id]);
  return (
    <div className='UserProfile-Userinfo'>
      <div className='header'>
        {/* top division for user profile and followers */}
        <div className='profile'>
          <button>
            <img src={userPicture} alt='' height='120px' width='124px' />
          </button>
        </div>
        <div className='profile-details'>
          <div className='profile-options'>
            <div className='options'>
              <button>{user?.userName}</button>
            </div>
            <div className='options'>
              {params.userid == getCookie('user_id') ? (
                <button
                  onClick={() => {
                    navigate('/editprofile');
                  }}
                >
                  Edit Profile
                </button>
              ) : (
                <button>Follow</button>
              )}
            </div>
            <div className='options'>
              {params.userid == getCookie('user_id') ? (
                <button>View Archive</button>
              ) : (
                <></>
              )}
            </div>
            <div className='options'>
              <button
                onClick={() => {
                  setOptionsOpen(!optionsOpen);
                }}
              >
                <img src={dots} alt='' height='30px' width='30px' />
              </button>
            </div>
            {optionsOpen ? <DeleteProfile /> : <></>}
          </div>
          <div className='followers-details '>
            <div className='options'>
              <button>
                {posts.length === 1 ? '1 post' : posts.length + ' posts'}
              </button>
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
