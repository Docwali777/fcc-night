import React, { Component } from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'

import Menu from './components/Navigation/Menu'
import Form_For_Location from './components/forms/From_For_Location'
import Business_Listings from './components/pages/businessListings'

class App extends Component{

  render(){
    return(
      <div className='container'>
      <Router>
        <div>
          <Menu />
            <Route exact path='/' component={Form_For_Location} />
            <hr />
            <Business_Listings />
        </div>
      </Router>
      </div>
    )
  }
}
export default App
