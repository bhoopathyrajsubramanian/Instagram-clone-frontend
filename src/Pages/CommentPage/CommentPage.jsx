import { useParams } from "react-router-dom";
import { Comment } from "../../Components/Comment/Comment";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProfilePicture } from "../../Components/ProfilePicture/ProfilePicture";
import postIcon from "../../assets/images/posts.svg";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import likeIcon from "../../assets/images/notification.svg";
import messageIcon from "../../assets/images/message.svg";
import shareIcon from "../../assets/images/share.svg";
import saveIcon from "../../assets/images/save.svg";
import postSaveIcon from "../../assets/images/postSave.svg";
import userOptionIcon from "../../assets/images/userOption.svg";
import likedIcon from "../../assets/images/liked.svg";

import "./commentPage.scss";
import { getCookie } from "../../helper";

export const CommentPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [user, setUser] = useState();
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [postSaved, setPostSaved] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [comments, setComments] = useState([]);
  const [postUser, setPostUser] = useState(false);

  const user_id = params.userid;
  const navigate = useNavigate();
  const userId = getCookie("user_id");

  useEffect(() => {
    try {
      userId === user_id ? setPostUser(true) : setPostUser(false);
      axios.get(`http://localhost:3030/users/${user_id}`).then((res) => {
        setUser(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

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
  }, [params, loading]);

  const deletePost = () => {
    try {
      axios
        .delete(`http://localhost:3030/users/${params.userid}`)
        .then((res) => {
          navigate("/home");
        });
    } catch (err) {
      console.log(err);
    }
  };

  const savePost = () => {
    try {
      axios
        .patch(
          `http://localhost:3030/users/${params.userid}/posts/${params.postid}`,
          {
            saved: !post.saved,
          }
        )
        .then((res) => setPostSaved(!postSaved));
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    try {
      axios
        .post(
          `http://localhost:3030/users/${params.userid}/posts/${params.postid}/comments`,
          {
            user: params.userid,
            post: params.postid,
            comment: comment,
          }
        )
        .then((res) => {
          setComment("");
          setLoading(!loading);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyEnter = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

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
            <span className="profile-username">{user?.userName}</span>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img
                  src={userOptionIcon}
                  alt="username"
                  className="user-option"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {postUser && (
                  <Dropdown.Item onClick={deletePost}>
                    Delete post
                  </Dropdown.Item>
                )}
                <Dropdown.Item
                  onClick={() => {
                    navigate(`/user/${user?._id}`);
                  }}
                >
                  Profile
                </Dropdown.Item>
                <Dropdown.Item>Copy link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="comments">
            {comments.map((commentData, key) => {
              return (
                <Comment
                  key={key}
                  comment={commentData?.comment}
                  userName={user?.userName}
                  image={user?.avatar}
                />
              );
            })}
          </div>
          <div className="comment-footer">
            <div className="comment-response-field">
              <div className="comment-response">
                <div className="response-image-field">
                  <button className="response-button">
                    <img
                      src={toggle ? likeIcon : likedIcon}
                      alt="response"
                      className="response-image"
                      onClick={() => setToggle(!toggle)}
                    />
                  </button>
                </div>
                <div className="response-image-field">
                  <button className="response-button">
                    <img
                      src={messageIcon}
                      alt="response"
                      className="response-image"
                    />
                  </button>
                </div>
                <div className="response-image-field">
                  <button className="response-button">
                    <img
                      src={shareIcon}
                      alt="response"
                      className="response-image"
                    />
                  </button>
                </div>
              </div>
              <div className="post-save" onClick={savePost}>
                <img
                  src={postSaved ? postSaveIcon : saveIcon}
                  alt="save-post-button"
                  className="save-post-button"
                />
              </div>
            </div>
            <div className="comment-caption-field">
              <p className="likes">{post.like}</p>
            </div>
            <div className="add-comments-field">
              <img src={postIcon} alt="emoji-button" className="emoji-button" />
              <input
                type="text"
                className="add-comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onKeyUp={(e) => handleKeyEnter(e)}
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
