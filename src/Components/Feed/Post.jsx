import saveIcon from "../../assets/images/save.svg";
import userOptionIcon from "../../assets/images/userOption.svg";
import likeIcon from "../../assets/images/notification.svg";
import likedIcon from "../../assets/images/likeRed.svg";
import messageIcon from "../../assets/images/message.svg";
import shareIcon from "../../assets/images/share.svg";
import savedIcon from '../../assets/images/saved.svg'

import "./post.scss";
import { useNavigate } from "react-router-dom";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import { useState } from "react";
import axios from "axios";
import { getCookie } from "../../helper";

export const Post = (props) => {
  const user = getCookie("user_id");
  const[saved ,setSaved] = useState(false)
  const [like, setLike] = useState(false);
  // const [likesCount, setLikesCount] = useState(0);
  // axios
  //   .get(`http://localhost:3030/likes?post=${props.postData._id}`)
  //   .then((res) => {
  //     setLikesCount(res.data.data.length);
  //   });
  const addLike = () => {
    if (!like) {
      axios
        .post("http://localhost:3030/likes", {
          post: props.postData._id,
          user: user,
        })
        .then((res) => {
          setLike(!like);
        });
    } else {
      axios
        .delete(
          `http://localhost:3030/likes?post=${props.postData._id}&user=${user}`
        )
        .then((res) => {
          console.log(res.data);
        });
      setLike(!like);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="post-header">
        <ProfilePicture avatar={props?.postData?.user?.avatar} />

        <button
          className="user-name"
          onClick={() => {
            navigate(`/user/${props.postData.user._id}`);
          }}
        >
          {props.postData.user?.userName}
        </button>
        {/* <div onClick={() => {}}>
          <img src={userOptionIcon} className="user-option" alt="user-option" />
        </div> */}
      </div>
      <div className="post-image">
        <img
          src={`data:image/jpeg;base64,${props.postData.postFile}`}
          height="450px"
          alt="post-image"
        />
      </div>
      <div className="post-footer">
        <div className="post-response-field">
          <div className="post-response">
            <div className="response-image-field">
              <button onClick={() => addLike()}>
                {!like ? (
                  <img
                    src={likeIcon}
                    alt="response"
                    className="response-image"
                  />
                ) : (
                  <img
                    src={likedIcon}
                    alt="response"
                    className="response-image"
                  />
                )}
              </button>
            </div>
            <div className="response-image-field">
              <button
                onClick={() =>
                  navigate(
                    `/user/${props.postData.user._id}/post/${props.postData._id}/comments`
                  )
                }
              >
                <img
                  src={messageIcon}
                  alt="response"
                  className="response-image"
                />
              </button>
            </div>
            <div className="response-image-field">
              <button>
                <img
                  src={shareIcon}
                  alt="response"
                  className="response-image"
                />
              </button>
            </div>
          </div>
          <div className="post-save">
            <button>
              <img
                src={saved ? saveIcon : savedIcon}
                alt="save-post-button"
                className="save-post-button"
                onClick={(e) => setSaved(!saved) }
              />
            </button>
          </div>
        </div>
        <div className="post-caption-field">
          <button
            className="user-name-caption"
            onClick={() => {
              navigate(`/user/${props.postData.user._id}`);
            }}
          >
            <ProfilePicture name={props.postData.user?.userName} />
          </button>

          <span className="post-caption">{props.postData.caption}</span>
        </div>
        {/* <button
          className="post-comments"
          onClick={() =>
            navigate(
              `/user/${props.postData.user._id}/post/${props.postData._id}/comments`
            )
          }
        >
          View all comments...
        </button> */}
      </div>  
    </div>
  );
};
