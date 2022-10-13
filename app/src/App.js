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
import Clicker from './Button'

function Nav() {
let facts = []

 const baseURL = "https://astute-baton-362318.ue.r.appspot.com/api/json/";
 const [data, setData] = useState([]);
 const [page, setPage] = useState('Breakfast');

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

 if (data.length === 0) return <div className="loading">please...</div>;
 function handleClick(text) {
  setPage(text)
 }


  return (
        
//refactor clickers and pagge == to be one lines. mine generic
<div>
  <Nav2 />
  <AboutUs />
  
  <Clicker text='Breakfast' handleClick={handleClick} />
  <Clicker text='Lunch' handleClick={handleClick}/>
  <Clicker text='Dinner' handleClick={handleClick}/>
  <Clicker text='Dessert' handleClick={handleClick}/>

  
  
  {page == 'Breakfast' && <Bmenu data={data}/>}
  {page == 'Lunch' && <Lmenu data={data}/>}
  {page == 'Dinner' && <Dmenu data={data}/>}
  {page == 'Dessert' && <Desmenu data={data}/>}
  
  </div>

    );
  }


export default Nav