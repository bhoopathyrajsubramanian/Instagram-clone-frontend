import { postData } from "./postdata";
import saveIcon from "../../assets/images/save.svg";
import userOptionIcon from "../../assets/images/userOption.svg";

import "./post.scss";

export const Post = (props) => {
  return (
    <div className="post">
      <div className="post-header">
        {/* Need to add User Signature instead of image */}
        <div className="user-profile-photo">
          <p className="profile-name">{props.postData.user.userName[0]}</p>
        </div>
        <p className="user-name">{props.postData.user.userName}</p>
        <img src={userOptionIcon} className="user-option" alt="user-option" />
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
        <div className="post-caption-field">
          <p className="user-name-caption">{props.postData.user.userName}</p>
          <p className="post-caption">{props.postData.caption}</p>
        </div>
        <button className="post-comments">View all comments...</button>
      </div>
    </div>
  );
};
