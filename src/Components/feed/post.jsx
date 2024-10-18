import React from 'react';
import home from '../../assets/images/home.svg';
import { postData } from './postdata';
import saveIcon from '../../assets/images/save.svg';
import userOptionIcon from '../../assets/images/userOption.svg';

import './post.scss';

export const Post = () => {
  return (
    <div className="post">
      <div className="post-header">
        <img
          src={home}
          className="user-profile-photo"
          alt="user-profile-photo"
        ></img>
        <p className="user-name">mokkapost</p>
        <img src={userOptionIcon} className="user-option" alt="user-option" />
      </div>
      <img src={home} className="post-image" alt="post-image" />
      <div className="post-footer">
        <div className="post-response-field">
          <div className="post-response">
            {postData.map((responseContent, key) => {
              return <div className="response-image-field" key={key}  > <img src={responseContent} alt="response" className="response-image" /></div>;
            })}
          </div>
          <div className="post-save">
            <img src={saveIcon} alt="save-post-button"className="save-post-button" />
          </div>
        </div>
        <div className="post-caption-field">
          <p className="user-name-caption">Mokkapost</p>
          <p className="post-caption">King in the rome</p>
        </div>
        <button className="post-comments">View all comments...</button>
      </div>
    </div>
  );
};
