import React, { Component } from 'react'

import Form_For_Location from './components/forms/From_For_Location'
import Business_Listings from './components/pages/businessListings'

class App extends Component{

  render(){
    return(
      <div className='container'>
          <Form_For_Location />
          <hr />
          <Business_Listings />
      </div>
    )
  }
}
export default App
