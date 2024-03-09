import React from 'react'
import {Navbar,Nav,Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'


function NavbarE() {

const navigate = useNavigate()

const handlenavigate =()=>{
  navigate('/')
}


  return (
    <Navbar style={{zIndex:'10'}} collapseOnSelect expand="lg" className="bg-body-tertiary position-fixed w-100">
      <Container>
        <Navbar.Brand onClick={handlenavigate}> <i className="fa-solid fa-industry"></i>Industrial World</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className='ms-auto'>
            <Link className='me-3' style={{textDecoration:'none'}} to = {'/Gallery'} >Gallery</Link>
            <Link to = {'/ContactUs'} style={{textDecoration:'none'}}>Contact Us</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarE

