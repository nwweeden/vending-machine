import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

/** 
 * App --> {NavBar, VendingMachine}
 */
function NavBar(){
  return(
    <nav className="NavBar">
      <NavLink exact to="/">
        VendingMachine
      </NavLink>
      <NavLink exact to="/pies">
        Pies
      </NavLink>

      <NavLink exact to="/steaks">
        Steaks
      </NavLink>

      <NavLink exact to="/chips">
        Chips
      </NavLink>
    </nav>
  )
}

export default NavBar;