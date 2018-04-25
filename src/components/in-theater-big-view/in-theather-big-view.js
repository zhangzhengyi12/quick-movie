import React, { Component } from 'react'
import './in-theather-big-view.css'
import Avatar from '../../base/avatar-show/avatar-show.js'
import { getMoviewDeatilData } from '../../api/in-theaters'

const MAX_DESC_LENGTH = 160
const MAX_DESC_TIME_OUT = 6000

class InTheaterBigView extends Component {
  constructor() {
    super()
    this.state = {
      desc: ''
    }
    this.getDescTime = ''
  }
  componentWillMount() {
    this.getMoviewDeatil()
  }
  getMoviewDeatil() {
    let id = this.props.data.id
    this.getDescTime = setTimeout(() => {
      // 如果依旧获取不到，默认为错误
      if (!this.state.desc) {
        this.setState({
          desc: '抱歉，获取简介失败了，请稍后再试！'
        })
      }
    }, MAX_DESC_TIME_OUT)
    getMoviewDeatilData(id).then(res => {
      let desc = ''
      if (res.summary.length > MAX_DESC_LENGTH) {
        desc = res.summary.slice(0, MAX_DESC_LENGTH) + '...'
      } else {
        desc = res.summary
      }
      this.setState({
        desc
      })
    })
  }
  render() {
    let data = this.props.data
    let typeGroup = data.genres.map((item, i) => {
      return (
        <span className="item" key={i}>
          {item}
        </span>
      )
    })
    let stars = this.getStars(data.rating.stars)

    let directorAvatars = data.directors.map((item, i) => {
      let src = item.avatars.large
      return (
        <div
          key={item.name}
          className="avatar-wrapper"
          onClick={() => {
            window.open(item.alt)
          }}
        >
          <Avatar avatarSrc={src} name={'(导演) ' + item.name} />
        </div>
      )
    })
    if (directorAvatars.length > 2) {
      directorAvatars = directorAvatars.slice(0, 2)
    }
    let casts = data.casts.map((item, i) => {
      let src = item.avatars.large
      return (
        <div
          key={item.name}
          className="avatar-wrapper"
          onClick={() => {
            window.open(item.alt)
          }}
        >
          <Avatar avatarSrc={src} name={item.name} />
        </div>
      )
    })
    if (casts.length > 3) {
      casts = casts.slice(0, 3)
    }
    return (
      <div className="in-theater-big-view">
        <div className="content">
          <span
            className="close"
            onClick={() => {
              this.props.onClose()
            }}
            style={{ backgroundImage: `url(${require('./close.svg')})` }}
          />
          <div className="header-show">
            <img className="b-cover" src={data.images.large} alt="" />
            <div className="detail">
              <h3 className="title">{data.title}</h3>
              <h4 className="o-title">{data.original_title}</h4>
              <div className="rating-group">
                <span className="star">{stars}</span>
                <span className="rat">{data.rating.average}</span>
              </div>
              <div className="types">{typeGroup}</div>
              <div className="go-detail">
                <a href={data.alt} target="__blank">
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="body-show">
            <div className="director">
              <h4 className="title">影人</h4>
              <div className="director-group">
                {directorAvatars}
                {casts}
              </div>
            </div>
            <div className="movie-desc">
              <h4 className="title">简介</h4>
              {this.state.desc ? (
                <p className="desc">{this.state.desc}</p>
              ) : (
                <div className="loadingBox">
                  <img className="loading" src={require('./loading.svg')} alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
  getStars(starNumber) {
    let cc_star = require('./cc-star.svg')
    let cc_star_o = require('./cc-star-o.svg')
    let cc_star_half = require('./cc-star-half.svg')
    starNumber = Number(starNumber) / 10
    let stars = Array(5)
      .fill(1)
      .map((item, index) => {
        let diff = starNumber - (index + 1)
        let img_src = cc_star_o
        if (diff < 0) {
          img_src = cc_star_o
        }
        if (diff >= 0.5) {
          img_src = cc_star_half
        }
        if (diff >= 1) {
          img_src = cc_star
        }
        return <img key={index} src={img_src} alt="" />
      })
    return stars
  }
}

export default InTheaterBigView
