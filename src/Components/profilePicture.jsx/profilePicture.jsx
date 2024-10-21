import React from "react";
import "./profilePicture.scss";

export const ProfilePicture = ({name}) => {
  return (
    <div className="profile-picture-section">
      <p className="profile-picture">{name}</p>
    </div>
  );
};
