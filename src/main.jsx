import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';

import Create from './pages/Create';
import NotesPrev from './pages/NotesPrev';
import Drawer from './components/Drawer';
import Edit from './pages/Edit';
import Preview from './pages/Preview'

const router = createBrowserRouter([
  {
    path: "/landing",
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
    path: "/preview/:id",
    element: <Preview />
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

      },
      {
        path: "edit/:id",
        element: <Edit/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
