import React, { Component } from 'react'
import {Grid, Col, Row} from 'react-bootstrap'

class Listing extends Component{
  constructor(props){
    super(props)
    console.log(this.props);
  }
  render(){
    return (

      <Grid>
    <Row>
      <Col xs={4} md={4}>
        <img style={{height: 100, width: 100}} src={this.props.image_url} />

      </Col>

      <Col xs={8} md={8}>
          {this.props.name}
          <hr />
        {this.props.location.address1}
      </Col>
    </Row>
    </Grid>
    )
  }
}
export default Listing
