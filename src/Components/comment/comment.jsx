import React from "react";
import likeIcon from "../../assets/images/notification.svg";
import "./comment.scss";

export const Comment = (props) => {
  return (
    <div className="comment" key={props?.key}>
      <div className="profile-picture-section">
        <p className="profile-picture">p</p>
      </div>
      <p className="username">{props?.userName}</p>
      <p className="user-comment">{props?.comment}</p>
      <img src={likeIcon} alt="username" className="user-option" />
    </div>
  );
};
