import { useState } from 'react';
import axios from 'axios';
import faceBookIcon from '../../assets/images/facebook.png';
import keyIcon from '../../assets/images/key.png';
import socialIcon from '../../assets/images/social.png';
import twitterIcon from '../../assets/images/twitter.png';
import userIcon from '../../assets/images/user.png';
import instagramIcon from '../../assets/images/logo.svg';
import './login.scss';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/register');
  };

  const loginUser = () => {
    const user = {
      email,
      password,
    };

    axios.get('http://localhost:3030/users').then((response) => {
      const users = response.data.data;
      const profileUser = users.filter((users) => users.email === user.email);
      document.cookie = `user_id = ${profileUser[0]?._id}`;
      if (profileUser.length) {
        navigate('/');
      } else {
        alert('enter a valid user');
      }
    });
  };
  return (
    <div className='login'>
      <div className='login-page'>
        <div className='login-page-border'>
          <div className='inputbox'>
            <img src={userIcon} className='img-users' />
            <input
              type='text'
              required='true'
              id='input'
              placeholder='email'
              className='input-user'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='inputbox'>
            <img src={keyIcon} className='img-users' />
            <input
              type='text'
              required='true'
              id='password'
              placeholder='password'
              className='input-user'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='login-overlay2'>
            <input type='checkbox' />
            <span id='span1'>Remember me</span>
            <button onClick={loginUser} className='login-button'>
              Login
            </button>
          </div>
          <div className='reg-forgot-pass'>
            <a href='#' className='register-now' onClick={redirect}>
              Register now
            </a>
            <a href='#' className='forgot-password'>
              Forgot password?
            </a>
          </div>
          <div className='OR-container'>
            <div className='border'></div>
            <p className='or'>OR</p>
            <div className='border'></div>
          </div>
          <div className='social facebook'>
            <div className='icon6'>
              <img src={faceBookIcon} className='img-users-connect' />
            </div>
            <div>
              <p className='socialp'> LOGIN WITH FACEBOOK</p>
            </div>
          </div>
          <div className='social twitter'>
            <img src={twitterIcon} className='img-users-connect twitter' />
            <p className='socialp'> LOGIN WITH TWITTER</p>
          </div>
          <div className='social mail'>
            <img src={socialIcon} className='img-users-connect' />
            <p className='socialp'> LOGIN WITH MAIL</p>
          </div>
        </div>
      </div>
      <div className='login-image'>
        <img src={instagramIcon} />
      </div>
    </div>
  );
};

export default Login;
