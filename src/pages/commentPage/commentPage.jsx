import { useParams } from "react-router-dom";
import userOptionIcon from "../../assets/images/userOption.svg";
import { Comment } from "../../Components/comment/comment";
import { commentData } from "./commentData";
import saveIcon from "../../assets/images/save.svg";
import "./commentPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProfilePicture } from "../../Components/profilePicture.jsx/profilePicture";

export const CommentPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [user, setUser] = useState();
  const [comment, setComment] = useState('');
  const[loading,setLoading] = useState(false);
  const user_id = params.userid;
  console.log(params.userid);
  useEffect(() => {
    try {
      axios.get(`http://localhost:3030/users/${user_id}`).then((res) => {
        setUser(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [user_id]);
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
          setLoading(!loading);

        });
    } catch (error) {
      console.log(error);

    }
  }, [params]);

  // useEffect(() =>{


  // },[loading])

  const handleClick = () =>{
    try{
    axios
        .post(
          `http://localhost:3030/users/${params.userid}/posts/${params.postid}/comments`,
          {
            user: params.userid,
            post: params.postid,
            comment: comment
          }
        )
        .then((res) => {
          comments.push(res.data)
        });
    } catch (error) {
      console.log(error);
    }
  }
   
  return (
    <div className="comment-page">
      <div className="comment-page-section">
        <div className="comment-page-image">
          <img
            src={`data:image/jpeg;base64,${post?.postFile}`}
            className="post"
          />
        </div>
        <div className="comment-section">
          <div className="comment-page-profile">
            <ProfilePicture name={user?.userName[0]} />
            <p className="profile-username">{user?.userName}</p>
            <img src={userOptionIcon} alt="username" className="user-option" />
          </div>
          <div className="comments">
            {comments.map((commentData, key) => {
              return (
                <Comment
                  key={key}
                  comment={commentData?.comment}
                  userName={user?.userName}
                />
              );
            })}
          </div>
          <div className="comment-footer">
            <div className="comment-response-field">
              <div className="comment-response">
                {commentData.map((responseContent, key) => {
                  return (
                    <div className="response-image-field" key={key}>
                      <button className="response-button">
                        <img
                          src={responseContent}
                          alt="response"
                          className="response-image"
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="post-save">
                <img
                  src={saveIcon}
                  alt="save-post-button"
                  className="save-post-button"
                />
              </div>
            </div>
            <div className="comment-caption-field">
              <p className="likes">{post.like}</p>
            </div>
            <div className="add-comments-field">
              <img src={saveIcon} alt="emoji-button" className="emoji-button" />
              <input
                type="text"
                className="add-comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button className="post-comment" onClick={handleClick}>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
