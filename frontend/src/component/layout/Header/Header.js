import React,{useState} from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    
     <>
      <nav className="navbar">
        <div className="nav-container">

          <NavLink exact to="/" className="nav-logo">
          
                         <span className="navlogoSpan">BD </span> Shop
                   
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/products"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          <div className="nav-container2">
          
           <NavLink exact={true} activeStyle={{color:"deeppink"}} className="nav-links2"  to="/search"> <FontAwesomeIcon icon={faSearch}  />    </NavLink>

           <NavLink exact={true} activeStyle={{color:"deeppink"}} className="nav-links2"  to="/Cart"> <FontAwesomeIcon icon={faShoppingBag}  />       </NavLink>   
          
          <NavLink exact={true} activeStyle={{color:"deeppink"}} className="nav-links2"  to="/login">   <span><i class="fas fa-user"></i></span>      </NavLink>   

          </div>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>


        </div>
      </nav>
    </>


  )
}

export default Header