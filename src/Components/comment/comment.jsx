import React from "react";
import exploreIcon from "../../assets/images/explore.svg";
import "./comment.scss";

export const Comment = (key) => {
  return (
    <div className="comment" key={key}>
      <div className="profile-picture-section">
        <p className="profile-picture">p</p>
      </div>
      <p className="username">name</p>
      <p className="user-comment">Oo</p>
      <img src={exploreIcon} alt="username" className="user-option" />
    </div>
  );
};
