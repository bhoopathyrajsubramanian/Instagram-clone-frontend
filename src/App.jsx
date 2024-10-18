import React from 'react';
import './App.scss';
import { FeedPage } from './pages/feedPage/feedPage';


const App = () => {
  return (
    <div className="instagram">
      <FeedPage/>
    </div>
  );
};

export default App;


//  <>
//    <img src={`data:image/jpeg;base64,${data}`} />
//  </>;