import { useState, useEffect } from "react";
import axios from 'axios'
import React from "react";

import MealOptions from './MealOptions';
import Bmenu from './Breakfast';
import MenuBase from './MenuBase';
import AboutUs from './Aboutus';
import Nav2 from "./Nav2";
import Lmenu from "./Lunch";
import Dmenu from "./Dinner";
import Desmenu from "./Dessert";

function Nav() {
let facts = []

 const baseURL = "https://astute-baton-362318.ue.r.appspot.com/api/json/";
 const [data, setData] = useState([]);

 useEffect(() => {
   axios.get(baseURL).then((response) => {
     setData(response.data);
     console.log(response)
   })
   .catch(function (error){
    console.log(error)
   })
   ;
 }, []);


if (data.length > 0) {
  console.log('AppData', data);

  return (
        

<div>
  <Nav2 />
  <AboutUs />
  <MealOptions />
  <MenuBase />
  <Bmenu data={data}/>
  <Lmenu data={data}/>
  <Dmenu data={data}/>
  <Desmenu data={data}/>
  
  </div>

    );
  }
}

export default Nav