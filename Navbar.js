import React from 'react'
import "./Navbar.css"
import logo from "./logo.jpeg"

function Navbar() {
    return (
        <div class="navbar">
  <div class="navbar_wrapper">
  <div class="icon">
    <img src={logo} />
  </div>
    
  <button class="navbar_buttons">
  Home
   </button>
    
   <button class="navbar_buttons"> 
 About
      </button>
    
    <button class="navbar_buttons">
  Contact
      </button>
      
      <button class="navbar_buttons">
  Med News
        </button>
        
        <button class="navbar_buttons">
  Help
          </button>
</div>
  
  
  
</div>
    )
}

export default Navbar
