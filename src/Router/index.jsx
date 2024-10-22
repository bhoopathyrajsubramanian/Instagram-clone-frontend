import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import { CommentPage } from '../Pages/commentPage/commentPage.jsx';
import Login from '../Pages/LoginPage/login.jsx';
import Register from '../Pages/RegisterPage/register.jsx';
import { UserProfile } from '../Pages/UserProfile/Index.jsx';
import { Feed } from '../Components/Feed/Feed.jsx';
import NewPost from '../Pages/NewPost/Index.jsx';
import { EditProfile } from '../Pages/EditProfile/EditProfile.jsx';

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
        path: 'user/:userid/post/:postid/comments',
        element: <CommentPage />,
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
]);
