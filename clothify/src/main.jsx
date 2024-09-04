
//DO NOT EDIT THIS FILE

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SignUp from "../src/components/SignUp.jsx"
import SignIn from "../src/components/SignIn.jsx"
import Home from './components/Home.jsx'
import Settings from './components/Settings.jsx'
import { IdeasProvider } from "./lib/ideas";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ClerkProvider } from '@clerk/clerk-react'
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import Cart from '../../clothify2/src/components/Cart.jsx'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

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
  {
    path: "/home",
    element: 
    <IdeasProvider>
      <Home/>
    </IdeasProvider>,
  },
  {
    path: "/settings",
    element: <Settings/>,
  },
  {
    path: "/cart",
    element: 
    <IdeasProvider>
      <Cart/>
    </IdeasProvider>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      
    </ClerkProvider>
  </StrictMode>,
)
