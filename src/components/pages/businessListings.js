import React, { Component } from 'react'
import { connect } from 'react-redux'

class Business_Listings extends Component{
constructor(props){
  super(props)
  this.state = {
    places: []
  }
}

empty = () =>{
  return(
    <div>Search</div>
  )
}

  render(){

if(this.props.searchReturn === null){
return  this.empty()
} else {
  return (
    <div>
      {this.props.searchReturn.map(i =>{
        return (
          <div key={i.id}>
            <img style={{height: 100, width: 100}} src={i.image_url} />
          </div>
        )
      })}
    </div>
  )
}

  }
}

function mapStateToProps(state){
  return{
    searchReturn: state.business
  }
}
export default connect(mapStateToProps)(Business_Listings)
