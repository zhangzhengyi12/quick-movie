import React, { Component } from 'react'
import ScrollView from '../scroll-view/scroll-view'
import LoadingBig from '../../base/loading-big/loading-big'
import MoviewPreview from '../movie-preview/moviewPreview'
import { getLasetMovieResouceList } from '../../api/new-resource'
import NewResourceBigView from '../new-resource-big-view/new-resource-big-view'
import { CSSTransition } from 'react-transition-group'
import './newResource.css'
class NewResource extends Component {
  constructor() {
    super()
    this.state = {
      lasetMovies: [],
      currentBigViewData: null,
      disNewResourceBigView: false
    }
  }
  render() {
    const lasetMovies = this.state.lasetMovies
    let moviewPreview = null

    if (lasetMovies && lasetMovies.length !== 0) {
      moviewPreview = lasetMovies.map((item, i) => (
        <div className="preview-wrapper" key={i}>
          <MoviewPreview
            className="test"
            data={{
              movieCover: item.coverIamgeLarge,
              backCover: item.coverImageSmall,
              name: item.name,
              type: item.types,
              rating: this.polyFillRating(item.rating)
            }}
            press={() => {
              this.onPressMovie(i)
            }}
          />
        </div>
      ))
    }
    return (
      <div className="new-resource">
        <ScrollView style={{ width: 420, height: 560, background: '#344752' }}>
          {this.state.lasetMovies.length <= 0 ? <LoadingBig /> : null}
          <div className="previews">{moviewPreview}</div>
        </ScrollView>
        <CSSTransition in={this.state.disNewResourceBigView} timeout={300} classNames="big-view" unmountOnExit>
          <NewResourceBigView
            data={this.state.currentBigViewData}
            onClose={() => {
              this.closeBigView()
            }}
          />
        </CSSTransition>
      </div>
    )
  }
  polyFillRating(rating) {
    if (rating.douban && rating.douban.rating !== '0') {
      return rating.douban.rating
    }
    if (rating.imdb && rating.imdb.rating !== '0') {
      return rating.imdb.rating
    }
    return '0'
  }
  componentWillMount() {
    this.getLasetMovieResourceListData()
  }
  getLasetMovieResourceListData() {
    getLasetMovieResouceList().then(res => {
      this.setState({
        lasetMovies: res
      })
    })
  }
  onPressMovie(i) {
    let disNewResourceBigView = true
    let currentBigViewData = this.state.lasetMovies[i]
    this.setState({
      disNewResourceBigView,
      currentBigViewData
    })
  }
  closeBigView() {
    this.setState({
      disNewResourceBigView: false
    })
  }
}

export default NewResource
