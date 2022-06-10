
import React, { Fragment } from 'react';
import "../Header/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <Fragment>

        <Navbar bg="dark" fixed="top" variant="dark" expand="lg" className='myheader'>
          <Container fluid >
            <Navbar.Brand href="#" className='navTitle'>BD Express</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >

                <Nav.Link><NavLink exact={true}  activeStyle={{color:"deeppink"}} className="fontcolor" to="/">HOME</NavLink> </Nav.Link>
                <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}}  className="fontcolor" to="/products">PRODUCTS</NavLink> </Nav.Link>
                <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}}  className="fontcolor"  to="/Contact">CONTACT</NavLink>  </Nav.Link>
                <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}}  className="fontcolor"  to="/About">ABOUT</NavLink></Nav.Link>
              
                          
              </Nav>
              


              <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}} className="fontcolorIcon"  to="/search"> <FontAwesomeIcon icon={faSearch}  />    </NavLink></Nav.Link>


            </Navbar.Collapse>
          </Container>
         </Navbar>
    
    </Fragment>
  );
};

export default Header