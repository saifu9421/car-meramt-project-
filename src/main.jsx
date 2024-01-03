import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Order from './components/Order';
import Music from './components/Music';
import AuthProvider from './provider/AuthProvider';
import PrivetRoutes from './components/PrivetRoutes';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
      },
      {
        path:"/about",
        element:  <PrivetRoutes><About></About></PrivetRoutes>
      },{
           path:"/services",
           element: <PrivetRoutes><Services></Services></PrivetRoutes>
      },
      {
        path:"/signUp",
        element:<SignUp></SignUp>,
      },{
      path:"/login",
      element:<Login></Login>,
      },{
        path:"/order",
        element:<PrivetRoutes><Order></Order></PrivetRoutes>,
      },{
            path:"/music",
            element:<Music></Music>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
   <div className='lg:w-10/12 lg:mx-auto md:w-10/12 w-10/12  mx-auto md:mx-auto'>
     <React.StrictMode>
      <AuthProvider>   <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
   </div>
)
