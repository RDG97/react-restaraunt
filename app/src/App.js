import { useState, useEffect } from "react";
import axios from 'axios'
import React from "react";
import Bmenu from './Breakfast';
import AboutUs from './Aboutus';
import Nav2 from "./Nav2";
import Lmenu from "./Lunch";
import Dmenu from "./Dinner";
import Desmenu from "./Dessert";
import Clicker from './Button'
import Cajmenu from "./Cajun";
import Amermenu from "./American";

function Nav() {


  const baseURL = "https://8000-rdg97-backendbistro-jrck2wrj4ta.ws-us75.gitpod.io/allmenu/";
  const [data, setData] = useState([]);
  const [page, setPage] = useState('Breakfast');

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const dataObj = response.data
      setData(dataObj);
    })
    .catch(function (error){
    console.log(error)
    })
    ;
  }, []);

  if (data.length === 0) {return <div id="spinny"><div class="spinner-grow text-warning" role="status" id="spinny">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status" id="spinny">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status" id="spinny">
  <span class="visually-hidden">Loading...</span>
</div>
</div>} else if (data.length > 0) {console.log('data', data)}


 function handleClick(text) {
  setPage(text)
 }


  return (
        
//refactor clickers and page == to be one line. more generic
<div>
  <Nav2 />
  <AboutUs />
  
  <Clicker text='Breakfast' handleClick={handleClick} />
  <Clicker text='Lunch' handleClick={handleClick}/>
  <Clicker text='Dinner' handleClick={handleClick}/>
  <Clicker text='Dessert' handleClick={handleClick}/>
  <Clicker text='Cajun' handleClick={handleClick}/>
  <Clicker text='American' handleClick={handleClick}/>


  
  
  {page == 'Breakfast' && <Bmenu data={data}/>}
  {page == 'Lunch' && <Lmenu data={data}/>}
  {page == 'Dinner' && <Dmenu data={data}/>}
  {page == 'Dessert' && <Desmenu data={data}/>}
  {page == 'Cajun' && <Cajmenu data={data}/>}
  {page == 'American' && <Amermenu data={data}/>}
  
  </div>

    );
  }


export default Nav