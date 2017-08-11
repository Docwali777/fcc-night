import React, { Component } from 'react'
import { Nav, NavItem, Navbar } from 'react-bootstrap'

import {Link} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
console.log(LinkContainer);
class Menu extends Component{
  render(){
    return (
      <Navbar inverse collapseOnSelect>
   <Navbar.Header>
     <Navbar.Brand>
       <Link to="/">React-Bootstrap</Link>
     </Navbar.Brand>
     <Navbar.Toggle />
   </Navbar.Header>
   <Navbar.Collapse>
     <Nav>
       <NavItem eventKey={1} href="/about">About</NavItem>
       <NavItem eventKey={2} href="/contact">Contact</NavItem>
     </Nav>
     <Nav pullRight>
       <NavItem eventKey={1} href="/login">Login</NavItem>
       <NavItem eventKey={2} href="/register">Register</NavItem>
       <NavItem eventKey={1} href="/logout">Login</NavItem>

     </Nav>
   </Navbar.Collapse>
 </Navbar>
    )
  }
}
export default Menu
