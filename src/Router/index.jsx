import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import { CommentPage } from '../pages/commentPage/commentPage.jsx';
import Login from '../pages/LoginPage/login.jsx';
import Register from '../pages/RegisterPage/register.jsx';
import { UserProfile } from '../pages/UserProfile/Index.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // import { Outlet } from "react-router-dom";
    // children: [
    //   {
    //      path: "user/:userid",
    //     element: <UserProfile />,
    //   },
    // ],
  },
  {
    path: 'user/:userid',
    element: <UserProfile />,
  },
  {
    path: 'login',
    element: <Login/>
  },{
    path:'register',
    element:<Register/>
  },{
    path:'comment',
    element:<CommentPage/>
  }
]);
