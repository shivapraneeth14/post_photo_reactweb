import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Savedphoto from './Components/Savedphoto.jsx';
import Savedpost from './Components/Savedpost.jsx';
import Posts from './Components/Posts.jsx';
import Photos from './Components/Photos.jsx';
import { Provider } from 'react-redux';
import { store } from './Redux/Store.js';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/Posts",
    element:<Posts/>
  },
  {
    path:"/Photos",
    element:<Photos/>
  },
  {
    path:"/savedPost",
    element:<Savedpost/>
  },
  {
    path:"/savedPhoto",
    element:<Savedphoto/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
