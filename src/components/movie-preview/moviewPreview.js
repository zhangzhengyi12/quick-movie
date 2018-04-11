import React, { Component } from 'react'
import './movie-preview.css'

class MoviewPreview extends Component {
  render() {
    let {movieCover,name,type,rating} = this.props.data
    let normalzedType = type.join('/')
    return <div className="moview-preview">
    <div className="cover" style={{backgroundImage:`url(${movieCover})`}}><div className="rating">{rating}</div></div>
    <h3 className="name">{name}</h3>
    <h4 className="type">{normalzedType}</h4>
    </div>
  }
}

export default MoviewPreview