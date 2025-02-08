import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './component/Home';
import Aboutus from './component/Aboutus';
import Contact from './component/Contact';
import Layout from './Layout';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
const appRoute = createBrowserRouter([
  {
    path:'',
    element: <Layout/>,
    children:[
      {
        path:'/',
        element: <App/>
      },
      {
        path:'/about',
        element: <Aboutus/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
    ]
  }
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={appRoute}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
