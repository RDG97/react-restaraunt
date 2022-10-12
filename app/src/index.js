import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './App';
import AboutUs from './Aboutus';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
//import 'axios/dist/axios'
import './css/style.css'
import MealOptions from './MealOptions';
import Bmenu from './Breakfast';
import MenuBase from './MenuBase';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Nav />
  <AboutUs />
  <MealOptions />
  <MenuBase />
  <Bmenu />
  </React.StrictMode>
);
