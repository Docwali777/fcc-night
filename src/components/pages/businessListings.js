import React, { Component } from 'react'
import { connect } from 'react-redux'

import Listing from './Individual-Listing'

class Business_Listings extends Component{


empty = () =>{
  return(
    <div>Search</div>
  )
}

viewListings = () =>{
  return (
    <div>
      {this.props.searchReturn.map(i =>{
        return (
        <div key={i.id}>
          <Listing  {...i} />
        </div>
        )
      })}
    </div>
  )
}

  render(){
if(this.props.searchReturn === null){
return  this.empty()
} else {
return this.viewListings()
}

  }
}

function mapStateToProps(state){
  return{
    searchReturn: state.business
  }
}
export default connect(mapStateToProps)(Business_Listings)
