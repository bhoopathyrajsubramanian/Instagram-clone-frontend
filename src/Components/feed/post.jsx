import { postData } from "./postdata";
import saveIcon from "../../assets/images/save.svg";
import userOptionIcon from "../../assets/images/userOption.svg";

import "./post.scss";
import { useNavigate } from "react-router-dom";
import { ProfilePicture } from "../profilePicture.jsx/profilePicture";

export const Post = (props) => {
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="post-header">
        <ProfilePicture name={props.postData.user.userName[0]} />
        <button
          className="user-name"
          onClick={() => {
            navigate(`/user/${props.postData.user._id}`);
          }}
        >
          {props.postData.user.userName}
        </button>
        <div onClick={() => {}}>
          <img src={userOptionIcon} className="user-option" alt="user-option" />
        </div>
      </div>
      <img
        src={`data:image/jpeg;base64,${props.postData.postFile}`}
        className="post-image"
        alt="post-image"
      />
      <div className="post-footer">
        <div className="post-response-field">
          <div className="post-response">
            {postData.map((responseContent, key) => {
              return (
                <div className="response-image-field" key={key}>
                  {" "}
                  {/* Overlap with transparant button */}
                  <img
                    src={responseContent}
                    alt="response"
                    className="response-image"
                  />
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
        <div className="post-caption-field">
          <button
            className="user-name-caption"
            onClick={() => {
              navigate(`/user/${props.postData.user._id}`);
            }}
          >
            <ProfilePicture name={props.postData.user.userName[0]} />
          </button>

          <p className="post-caption">{props.postData.caption}</p>
        </div>
        <button
          className="post-comments"
          onClick={() =>
            navigate(
              `/user/${props.postData.user._id}/post/${props.postData._id}/comments`
            )
          }
        >
          View all comments...
        </button>
      </div>
    </div>
  );
};
