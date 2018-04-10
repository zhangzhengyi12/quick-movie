import React, { Component } from 'react'
import { getDoubanInTheatersData } from '../../api/in-theaters'
import MoviewPreview from '../movie-preview/moviewPreview'
import './in-theaters.css'

class InTheaters extends Component {
  constructor() {
    super()
    this.state = {
      inTheaters: []
    }
  }
  render() {
    const inTheaters = this.state.inTheaters
    let moviewPreviews = null
    if (inTheaters.subjects && inTheaters.subjects.length !== 0) {
      moviewPreviews = inTheaters.subjects.map((item, i) => (
        <div className="preview-wrapper" key={i}>
          <MoviewPreview data={{
            movieCover:item.images.large,
            name:item.title,
            type:item.genres,
            rating:item.rating.average
          }} />
        </div>
      ))
    }
    return <div className="in-theaters">
    <div className="previews">{moviewPreviews}</div>
    </div>
  }
  componentWillMount() {
    this.getDoubanInTheaters()
  }
  getDoubanInTheaters() {
    getDoubanInTheatersData().then(res => {
      this.setState({
        inTheaters: res
      })
    })
  }
}

export default InTheaters
