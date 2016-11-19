import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

class Layout extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h1 className="text-center">Trending Photos on Unsplash.com</h1>
          </Col>
        </Row>
        {this.props.children}
      </Grid>
    )
  }
}

export default Layout
