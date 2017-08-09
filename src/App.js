import React, { Component } from 'react'

import axios from 'axios'



class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      places: []
    }
  }
  componentWillMount(){
this.search()
  }
  componentDidMount(){
this.search()
  }


  search = ()=>{
    axios.get('/api/yelp/search')
      .then(b =>{
        this.setState({places: b.data.businesses})
      })
}
  render(){
    return(
      <div>
        {this.state.places.map(i =>{
          return(<p key={i.id}>
            {i.id}
          </p>)
        })}

      </div>
    )
  }
}
export default App
