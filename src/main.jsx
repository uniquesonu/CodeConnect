import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Landing from './Pages/Landing.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Signup from './Pages/Signup.jsx';
import Login from './Pages/Login.jsx';

import Create from './Pages/Create.jsx';
import NotesPrev from './Pages/NotesPrev.jsx';
import Drawer from './components/Drawer.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
  element: <Login />
  },
  {
    path: "/",
    element: <Drawer />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/login",
      element: <Login />
      },
      
      {
        path: "/create",
        element: <Create />
      },
      {
        path: ":id",
        element: <NotesPrev />

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
