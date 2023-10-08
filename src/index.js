
import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './HomePage';
import About from './components/AboutUs/about';
import TermsAndConditions from './components/Footer/TNC';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Privacy from './components/Footer/Privacy';
import DiscoverMain from './components/servicesPages/DiscoverMain';

import LoginSignupMain from './components/LoginFile/LoginFile';
import HelpFinal from './components/Help/HelpFinal';
import Services from './components/servicesPages/Services';







const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "about",
    element: <About/>
  },

  {
    path: "signin",
    element: <LoginSignupMain/>
  },
  

  {
    path: "tnc",
    element: <TermsAndConditions/>
  },

  {
    path: "privacy",
    element: <Privacy/>
  },

  {
    path: "help",
    element: <HelpFinal/>
  },

  {
    path: "discover",
    element: <DiscoverMain/>
  },

  {
    path: "services",
    element: <Services/>
  },


 

  
  
  

  
]); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
    
  
);




