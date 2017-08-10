import React, { Component } from 'react'
import { Nav, NavItem, Navbar } from 'react-bootstrap'

import {Link} from 'react-router-dom'

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
       <NavItem eventKey={1} href="#">Link</NavItem>
       <NavItem eventKey={2} href="#">Link</NavItem>
     </Nav>
     <Nav pullRight>
       <NavItem eventKey={1} href="#">Link Right</NavItem>
       <NavItem eventKey={2} href="#">Link Right</NavItem>
     </Nav>
   </Navbar.Collapse>
 </Navbar>
    )
  }
}
export default Menu
