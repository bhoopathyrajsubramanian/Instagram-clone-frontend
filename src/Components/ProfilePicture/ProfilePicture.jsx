import { useSelector } from "react-redux";
import "./profilePicture.scss";

export const ProfilePicture = (props) => {
  const user = useSelector((state) => state.userProfile);
  console.log(user);
  return (
    <div className="profile-picture-section">
      <img
        src={`data:image/jpeg;base64,${
          props.avatar ? props.avatar : user?.avatar
        }`}
        height='40px'
        width='40px'

      />
    </div>
  );
};
