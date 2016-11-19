import React from 'react'
import { Pager } from 'react-bootstrap'
import { Link } from 'react-router'

class PhotoPager extends React.PureComponent {
  render () {
    return (
      <Pager>
        {this.props.page > 1 &&
          <li className="previous">
            <Link to={`/photos/${this.props.page - 1}`}>&larr; Previous</Link>
          </li>
        }
        <li className="next">
          <Link to={`/photos/${this.props.page + 1}`}>Next &rarr;</Link>
        </li>
      </Pager>
    )
  }
}

export default PhotoPager
