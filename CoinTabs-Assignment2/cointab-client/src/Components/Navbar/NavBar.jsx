import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
 
      <nav className="navbar">
    <div className="logo"><h1 className="logoImg">CoinTab</h1> </div>
     
        <ul className="nav-links">
    
          <input type="checkbox" id="checkbox_toggle" />

          <label for="checkbox_toggle" className="hamburger">
            &#9776;
          </label>



          <div className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/user/details">Details</Link>
            </li>

            <li>
              <Link to="#">Login</Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
