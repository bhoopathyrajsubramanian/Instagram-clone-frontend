import { ProfilePicture } from "../profilePicture.jsx/profilePicture";
import './button.scss'

const SideBarButton = (props) => {
  return (
   
    <div className="content-button">
       {props.name === 'Profile'?<div className="content-button profile-picture"><ProfilePicture/><p className="content-button-name">{props.name}</p></div> :<button className="content-button">
        <img
          src={props.image}
          alt={props.name}
          className="content-button-image"
        />
        <p className="content-button-name">{props.name}</p>
      </button>}
      {/* <button className="content-button">
        <img
          src={props.image}
          alt={props.name}
          className="content-button-image"
        />
        <p className="cotent-button-name">{props.name}</p>
      </button> */}
    </div>
  );
};

export default SideBarButton;
