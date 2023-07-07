import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './Pages/Landing.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Signup from './Pages/Signup.jsx';
import Login from './Pages/Login.jsx';
<<<<<<< HEAD
=======
import Create from './Pages/Create.jsx';
import NotesPrev from './Pages/NotesPrev.jsx';
>>>>>>> 5608d44 (data bases added)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/landing",
        element: <Landing />
      },
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
<<<<<<< HEAD
=======
      },
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
