import React from "react";
import likeIcon from "../../assets/svgs/notification";

export const userProfile = () => {
  return (
    <div className="user-profile">
      <div className="user">
        <img src={likeIcon} alt="user profile" className="user-image" />
        <p className="user-name">rome</p>
        <button className="user-switch-button">Switch</button>
      </div>
      <div className="user-suggestion">
        <p className="suggestion">Suggested for you</p>
        <button className="see-all-user">See All</button>
      </div>
      {followerData.map((content, key) => {
        return (
          <div className="user" key={key}>
            <img src={content.image} alt="user profile" className="user-image" />
            <p className="user-name">{content.name}</p>
            <button className="user-switch-button">Switch</button>
          </div>
        );
      })}
    </div>
  );
};
