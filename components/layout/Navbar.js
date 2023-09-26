import React,{useState,createContext}from "react";
import {Link,NavLink} from 'react-router-dom'
import icon from './boxes.svg'

const Navbar=()=>{


  
  
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container">
  
     <NavLink className="navbar-brand" to="/about"><img src={icon} width="30" height="30" className="d-inline-block align-top bg-white" alt="img"></img> Product Inventry</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        
        <li className="nav-item">
          <NavLink className="nav-link"  exact to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  exact to="/">Product</NavLink>
        </li>
       
        
        
        
      </ul>
      
      
    </div>
    
    <Link className="btn btn-outline-light " exact to="/products/add">Add Product</Link>
  </div>
</nav>
    )
}


export default Navbar;






