import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
<<<<<<< HEAD
import Landing from './Pages/Landing.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Signup from './Pages/Signup.jsx';
import Login from './Pages/Login.jsx';
<<<<<<< HEAD
=======
import Create from './Pages/Create.jsx';
import NotesPrev from './Pages/NotesPrev.jsx';
>>>>>>> 5608d44 (data bases added)
=======
import Landing from './pages/Landing.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Create from './pages/Create.jsx';
import NotesPrev from './pages/NotesPrev.jsx';
import Drawer from './components/Drawer.jsx';
>>>>>>> 2b2d96a (added loader)

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
<<<<<<< HEAD
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/login",
      element: <Login />
<<<<<<< HEAD
=======
      },
=======
      
>>>>>>> 2b2d96a (added loader)
      {
        path: "/create",
        element: <Create />
      },
      {
        path: ":id",
        element: <NotesPrev />
>>>>>>> 5608d44 (data bases added)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
