import React, { Component } from 'react'
import { Nav, NavItem, Navbar } from 'react-bootstrap'

import {Link} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

class Menu extends Component{
  render(){
    return (
      <Navbar inverse collapseOnSelect>
   <Navbar.Header>
     <Navbar.Brand>
       <Link to="/">Let's Go Out</Link>
     </Navbar.Brand>
     <Navbar.Toggle />
   </Navbar.Header>
   <Navbar.Collapse>
     <Nav>
       <LinkContainer to='/about'>
         <NavItem eventKey={1} href="/about">About</NavItem>
       </LinkContainer>

      <LinkContainer to='/contact'>
         <NavItem eventKey={2} href="/contact">Contact</NavItem>
      </LinkContainer>
     </Nav>
     <Nav pullRight>
       <NavItem eventKey={1} href="/login">Login</NavItem>
       <NavItem eventKey={2} href="/register">Register</NavItem>
       <NavItem eventKey={1} href="/logout">Logout</NavItem>

     </Nav>
   </Navbar.Collapse>
 </Navbar>
    )
  }
}
export default Menu
