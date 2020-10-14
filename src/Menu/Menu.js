import React from 'react';

import {
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <nav role="navigation">
        <header>
        
        <ul>
            <li><Link to ="" rel="nofollow" title="visit my home page" >Home</Link></li>
            <li><Link to ="./about"  title="visit my about page">About</Link></li>
            <li ><Link to ="./login" title="visit my login page" >Login</Link></li>
        </ul>
         
        </header>
    </nav>
  );
}

export default Menu;
