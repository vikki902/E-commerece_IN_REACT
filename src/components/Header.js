import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom';


import {login_context} from '../App';




const Header = () => {

  const { loggedin , login_update} = useContext(login_context);



  const { totalItems } = useCart();



 


  return (
    <>
      <Navbar   bg="light" expand="lg" className='sticky-top'>
      <Container  className="navbar-header ">
        <Navbar.Brand className='navbar-brand mx-auto  me-5 ms-5' href="/"><b>STORELY</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto text-center">
            <Link to="/" class="nav-link">Home</Link>
            <Link to="product" class="nav-link">Products</Link>
            <Link to="/about" class="nav-link">About</Link>
            <Link to="/contact" class="nav-link">Contact</Link>
          
          </Nav>
     
            <NavLink to='/login'><Button  variant="outline-dark m-2 btn-change"><i className="fa fa-sign-in-alt mr-1"></i> Login</Button></NavLink>
            <NavLink to='/register'><Button variant="outline-dark m-2 btn-change"><i className="fa fa-user-plus mr-1"></i> Register</Button></NavLink>
            <NavLink to='/cart'><Button variant="outline-dark m-2 btn-change"><i className="fa fa-cart-shopping mr-1"></i> ({totalItems})</Button></NavLink>
            <Button variant="outline-dark m-2 btn-change"><i class="fa-solid fa-user mr-1"></i>({loggedin})</Button> 
        </Navbar.Collapse>
      </Container>
   
    </Navbar>

 
   
    </>
  )
}

export default Header
