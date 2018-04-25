import React, { Component } from 'react'
import './new-resource-big-view.css'
import { Scrollbars } from 'react-custom-scrollbars'
import DownloadBar from '../../base/downloadBar/downloadBar'

const MAX_DESC_LENGTH = 160

class InTheaterBigView extends Component {
  render() {
    let data = this.props.data
    let typeGroup = data.types.map((item, i) => {
      return (
        <span className="item" key={i}>
          {item}
        </span>
      )
    })
    let donwloadBars = data.downloadLinks.map((item, i) => {
      return <DownloadBar name={item.name} key={i} url={item.url} />
    })
    return (
      <div className="new-resource-big-view">
        <div className="content">
          <span
            className="close"
            onClick={() => {
              this.props.onClose()
            }}
            style={{ backgroundImage: `url(${require('./close.svg')})` }}
          />
          <div className="header-show">
            <img className="b-cover" src={data.coverIamgeLarge} alt="" />
            <div className="detail">
              <h3 className="title">{data.name}</h3>
              <h4 className="o-title">{data.location}</h4>
              <div className="rating-group">
                <span className="rat">
                  <span className="key">豆瓣：</span>
                  <span className="val" style={{ backgroundColor: this.calcRatingColor(data.rating.douban.rating) }}>
                    {data.rating.douban.rating}
                  </span>
                </span>
                <span className="rat imdb">
                  <span className="key">IMDB：</span>
                  <span className="val" style={{ backgroundColor: this.calcRatingColor(data.rating.imdb.rating) }}>
                    {data.rating.imdb.rating}
                  </span>
                </span>
              </div>
              <div className="types">{typeGroup}</div>
              <div className="go-detail">
                <a href={data.uri} target="__blank">
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="body-show">
            <div className="download">
              <h4 className="title">资源下载</h4>
              <Scrollbars style={{ width: 294, height: 120 }}>{donwloadBars}</Scrollbars>
            </div>
            {data.desc.length >= 5 && (
              <div className="movie-desc">
                <h4 className="title">简介</h4>
                <p className="desc">{data.desc.length > MAX_DESC_LENGTH ? data.desc.slice(0, MAX_DESC_LENGTH) + '...' : data.desc}</p>
              </div>
            )}
          </div>
        </div>
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
}

export default InTheaterBigView
