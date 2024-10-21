import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import { CommentPage } from '../pages/commentPage/commentPage.jsx';
import Login from '../pages/LoginPage/login.jsx';
import Register from '../pages/RegisterPage/register.jsx';
import { UserProfile } from '../pages/UserProfile/Index.jsx';
import { Feed } from '../Components/feed/feed.jsx';
import NewPost from '../pages/NewPost/Index.jsx';
import { EditProfile } from '../pages/EditProfile/EditProfile.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'user/:userid',
        element: <UserProfile />,
      },
      {
        path: 'home',
        element: <Feed />,
      },
      {
        path: 'create',
        element: <NewPost />,
      },
      {
        path: 'editprofile',
        element: <EditProfile />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'comment',
    element: <CommentPage />,
  },
]);
