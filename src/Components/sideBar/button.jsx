import { useNavigate } from "react-router-dom";
import { ProfilePicture } from "../profilePicture.jsx/profilePicture";
import "./button.scss";

const SideBarButton = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      {props.name === "Profile" ? (
        <button className="content-button profile-picture">
          <ProfilePicture />
          <p className="content-button-name">{props.name}</p>
        </button>
      ) : (
        <button
          className="content-button"
          onClick={() => navigate(`/${props.route}`)}
        >
          <img
            src={props.image}
            alt={props.name}
            className="content-button-image"
          />
          <p className="cotent-button-name">{props.name}</p>
        </button>
      )}
    </div>
  );
};

export default SideBarButton;
