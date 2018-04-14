import React, { Component } from 'react'
import './movie-preview.css'

class MoviewPreview extends Component {
  render() {
    let {movieCover,name,type,rating} = this.props.data
    let normalzedType = type.join('/')
    return <div className="moview-preview">
    <div className="cover" onClick={()=>{this.props.press()}} style={{backgroundImage:`url(${movieCover})`}}><div className="rating" style={{background:this.calcRatingColor(rating)}}>{rating}</div></div>
    <h3 className="name">{name}</h3>
    <h4 className="type">{normalzedType}</h4>
    </div>
  }
  calcRatingColor(rating){
    rating = Number(rating)
    if(rating > 8){
      return '#09913d'
    }
    if(rating < 8 && rating > 6){
      return "#d67c05"
    }
    return "#d9534f"
  }
}

export default MoviewPreview