import React, { Component } from 'react'
import { Nav, NavItem, Navbar } from 'react-bootstrap'

import {Link, browserHistory} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import {connect} from 'react-redux'

import * as actions from '../../redux_actions/yelpSearches'

class Menu extends Component{

componentDidMount(){
  this.props.userSignedIn()
}
login = () =>{
  browserHistory.push('/login')
}

  render(){
    return (
      <Navbar inverse collapseOnSelect >
   <Navbar.Header>
     <Navbar.Brand>
       <Link to="/">Let's Go Out</Link>
     </Navbar.Brand>
     <Navbar.Brand>
       {this.props.user === "" ?
         <a  href="/auth/google">Login</a> :
        <a href="/logout">Logout</a> }
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
       {this.props.user === "" ?
         <NavItem onClick={()=> this.login()} href="/auth/google">Login</NavItem> :

        <NavItem eventKey={1} href="/logout">Logout</NavItem> }


     </Nav>
   </Navbar.Collapse>
 </Navbar>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, actions)(Menu)
