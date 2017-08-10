import React, { Component } from 'react'

import { connect } from 'react-redux'
import * as actions from '../../redux_actions/yelpSearches'

class Form_For_Location extends Component{
constructor(props){
  super(props)
  this.state = {
    city_state: '',
    term: ''
  }
}

  search =(e) =>{
      this.setState({[e.target.name]: e.target.value})
  }
  formData = (e) =>{
    e.preventDefault()
    this.props.search(this.state)
  }
  render(){
    return(
      <div>
        <form onSubmit={this.formData}>
          <div className='form-group'>
            <input
              className='form-control'
              placeholder= 'search by city,state'
              onChange={this.search}
              name='city_state'
            />
          </div>

          <div className='form-group'>
            <input
              className='form-control'
              placeholder= 'Search Term'
              onChange={this.search}
              name='term'
            />
          </div>

          <button className='btn btn-success'>Sumit</button>
        </form>
        {this.state.city_state !== '' ? <p>Searches in {this.state.city_state} for {this.state.term}</p> : false}
      </div>
    )
  }
}
export default connect(null, actions)(Form_For_Location)
