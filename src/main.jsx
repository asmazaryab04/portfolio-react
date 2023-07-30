import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from './components/About/about.jsx';
import Experience from './components/experience/experience.jsx';
import Contacts from './components/contacts/contacts.jsx';
import Nav from './components/nav/nav.jsx';
import Home from './components/home/home';

const routes = createBrowserRouter([
  {
    path: 'Navbar',
    element: <Nav/>
  },

  {
    path: 'Home',
    element: <Home/>
  },

  {
    path: 'About me',
    element: <About/>
  },
{
     path: 'My Experience',
     element: <Experience/>
},

 {
    path: 'Contact Me',
    element: <Contacts/>
 },


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {routes}/>
  </React.StrictMode>,
);
