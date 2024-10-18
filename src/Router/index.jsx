import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
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
]);
