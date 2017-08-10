import React, {Component} from 'react'
import {Grid, Col, Row, Button, Well, Panel} from 'react-bootstrap'

class Listing extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (

      <Grid>
          <Well>
        <Row className="show-grid">
          <Panel>
          <Col xs={6} md={8}>
              How May People Are Going?  &nbsp;
          </Col>

          <Col xs={6} md={4}>
            <Button bsStyle='danger' bsSize='xsmall'> - </Button>
            <Button bsStyle='default' bsSize='small'>0</Button>
            <Button bsStyle='success' bsSize='xsmall'> + </Button>
          </Col>

            </Panel>
          <Col xs={6} md={3}>

            <img style={{
              height: 100,
              width: 100
            }} src={this.props.image_url}/>


          </Col>

          <Col xs={6} md={9}>
          <strong>  {this.props.name}</strong> &nbsp; {this.props.location.address1} &nbsp; {this.props.location.city},{this.props.location.state} &nbsp; {this.props.location.zip_code}

          </Col>

        </Row>
          </Well>
      </Grid>
    )
  }
}
export default Listing
