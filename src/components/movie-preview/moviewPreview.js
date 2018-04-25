import React, { Component } from 'react'
import './movie-preview.css'

class MoviewPreview extends Component {
  constructor() {
    super()
    this.state = {
      currentCover: ''
    }
  }
  render() {
    let { name, type, rating } = this.props.data
    let normalzedType = type.join('/')
    return (
      <div className="moview-preview">
        <div
          className="cover"
          onClick={() => {
            this.props.press()
          }}
          onError={() => {
            this.setState({ currentCover: this.props.data.backCover })
          }}
          style={{ backgroundImage: `url(${this.state.currentCover})` }}
        >
          {rating !== 0 &&
            rating !== '0' && (
              <div className="rating" style={{ background: this.calcRatingColor(rating) }}>
                {rating}
              </div>
            )}
        </div>
        <h3 className="name">{name}</h3>
        <h4 className="type">{normalzedType}</h4>
      </div>
    )
  }
  calcRatingColor(rating) {
    rating = Number(rating)
    if (rating >= 8) {
      return '#09913d'
    }
    if (rating < 8 && rating >= 6) {
      return '#d67c05'
    }
    if (rating > 0) {
      return '#d9534f'
    }
    return '#ccc'
  }
  componentWillMount() {
    this.setState({
      currentCover: this.props.data.movieCover
    })
  }
}

export default MoviewPreview
