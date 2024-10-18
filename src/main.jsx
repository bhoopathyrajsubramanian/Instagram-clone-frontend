import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '../Router/index.jsx';
import { store } from './store/store.js';
import { Provider } from 'react-redux';

import './index.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      {/* <App /> */}
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
