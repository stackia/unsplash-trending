import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import PhotoPager from './PhotoPager'
import fetchPage from '../actions/fetchPage'
import './PhotoList.css'

class PhotoList extends React.Component {
  componentWillMount () {
    this.props.fetchPage(+this.props.params.page || 1)
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.params.page !== this.props.params.page) {
      this.props.fetchPage(+nextProps.params.page || 1)
    }
  }
  render () {
    return (
      <div>
       {this.props.loading &&
         <div className="loading-overlay" />
       }
        <Grid>
          <Row>
            <Col xs={12}>
              <PhotoPager page={this.props.page} />
            </Col>
            {this.props.photos.map(photo => (
              <Col xs={4} key={photo.id}>
                <div className="photo" style={{backgroundImage: `url(${photo.urls.small})`}} />
              </Col>
            ))}
            <Col xs={12}>
              <PhotoPager page={this.props.page} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { ...state }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    fetchPage (page) {
      if (page >= 1) {
        dispatch(fetchPage(page))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList)
