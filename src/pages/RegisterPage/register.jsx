import keyIcon from "../../assets/images/key.png";
import userIcon from "../../assets/images/user.png";
import instagramIcon from "../../assets/images/logo.svg";
import "./register.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/login");
  };
  const registerUser = () => {
    const user = {
      userName,
      fullName,
      password,
      email,
    };

    axios.post("http://localhost:3030/users", user).then((response) => {
      const userId = response.data._id;

      document.cookie = `user_id = ${userId}`;
      if (user.email && user.fullName && user.password && user.userName) {
        navigate("/");
      }
    });

    setEmail("");
    setFullName("");
    setPassword("");
    setUserName("");
  };

  return (
    <div className="login">
      <div className="login-page">
        <div className="login-page-border">
          <div className="inputbox">
            <img src={userIcon} className="img-users" />
            <input
              type="text"
              required="true"
              id="input"
              value={email}
              placeholder="email"
              className="input-user"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputbox">
            <img src={keyIcon} className="img-users" />
            <input
              type="text"
              required="true"
              value={password}
              id="password"
              placeholder="password"
              className="input-user"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="inputbox">
            <img src={keyIcon} className="img-users" />
            <input
              type="text"
              required="true"
              value={fullName}
              id="password"
              placeholder="FullName"
              className="input-user"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="inputbox">
            <img src={keyIcon} className="img-users" />
            <input
              type="text"
              required="true"
              id="password"
              value={userName}
              placeholder="UserName"
              className="input-user"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="login-overlay2">
            <input type="checkbox" />
            <span id="span1">Remember me</span>
            <button onClick={registerUser} className="login-button">
              Register
            </button>
          </div>
          <div className="reg-forgot-pass">
            <a href="#" className="register-now" onClick={redirect}>
              Login
            </a>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
      <div className="login-image">
        <img src={instagramIcon} />
      </div>
    </div>
  );
};

export default Register;
