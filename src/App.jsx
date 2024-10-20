import { Outlet } from 'react-router-dom';

import './App.scss';
import SideBar from './Components/sideBar/sideBar';

const App = () => {
  return (
    <div className='instagram'>
      <div className='sidebar'>
        <SideBar />
      </div>
      <div className='feed-content'>
        <Outlet />
      </div>
    </div>
  );
};

export default App;

//  <>
//    <img src={`data:image/jpeg;base64,${data}`} />
//  </>;
