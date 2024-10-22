import React from 'react';
import { useState } from 'react';
import likeIcon from '../../assets/images/notification.svg';
import likedIcon from '../../assets/images/liked.svg';
import './comment.scss';

export const Comment = (props) => {
  const [toggle, setToggle] = useState(true);

  const updateLike = () => {
    setToggle(!toggle);
  };

  return (
    <div className="comment" key={props?.key}>
      <div className="profile-picture-section">
        <img
          src={`data:image/jpeg;base64,${props?.image}`}
          height="40px"
          width="40px"
        />
      </div>
      <span className="username">{props?.userName}:</span>
      <span className="user-comment">{props?.comment}</span>
      <img
        src={toggle ? likeIcon : likedIcon}
        alt="username"
        className="user-option"
        onClick={updateLike}
      />
    </div>
  );
};
