import { useParams } from 'react-router-dom';
import exploreIcon from '../../assets/images/explore.svg';
import { Comment } from '../../Components/comment/comment';
import { commentData } from './commentData';
import saveIcon from '../../assets/images/save.svg';
import './commentPage.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const CommentPage = () => {
  const params = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    try {
      axios
        .get(
          `http://localhost:3030/users/${params.userid}/posts/${params.postid}/`
        )
        .then((res) => {
          setPost(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [params]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(
          `http://localhost:3030/users/${params.userid}/posts/${params.postid}/comments`
        )
        .then((res) => {
          setComments(res.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [params]);
  console.log(post);
  console.log(comments);
  return (
    <div className='comment-page'>
      <div className='comment-page-section'>
        <div className='comment-page-image'></div>
        <div className='comment-section'>
          <div className='comment-page-profile'>
            <div className='profile-picture-section'>
              <p className='profile-picture'>p</p>
            </div>
            <p className='profile-username'>name</p>
            <img src={exploreIcon} alt='username' className='user-option' />
          </div>
          <div className='comments'>
            <Comment />
            <Comment />
          </div>
          <div className='comment-footer'>
            <div className='comment-response-field'>
              <div className='comment-response'>
                {commentData.map((responseContent, key) => {
                  return (
                    <div className='response-image-field' key={key}>
                      <button className='response-button'>
                        <img
                          src={responseContent}
                          alt='response'
                          className='response-image'
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className='post-save'>
                <img
                  src={saveIcon}
                  alt='save-post-button'
                  className='save-post-button'
                />
              </div>
            </div>
            <div className='comment-caption-field'>
              <p className='likes'>o</p>
            </div>
            <div className='add-comments-field'>
              <img src={saveIcon} alt='emoji-button' className='emoji-button' />
              <input type='text' className='add-comment' />
              <button className='post-comment'>Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
