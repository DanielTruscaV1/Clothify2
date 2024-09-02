
//DO NOT EDIT THIS FILE

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SignUp from "../src/components/SignUp.jsx"
import SignIn from "../src/components/SignIn.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/sign-up",
    element: <SignUp/>,
  },
  {
    path: "/sign-in",
    element: <SignIn/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
