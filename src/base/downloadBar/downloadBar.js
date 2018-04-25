import React, { Component } from 'react'
import clipboard from 'clipboard'
import Tips from '../tips/tips'
import notice from 'react-notice-message'

import './donwloadBar.css'
import '../../assets/fonts/iconfont.css'
class DownloadBar extends Component {
  componentDidMount() {
    let myClipboard = new clipboard('.copy')
    myClipboard.on('error', function(e) {
      notice.show(<p className="tips">复制失败</p>,{
        closeTime:"800"
      })
    })
    myClipboard.on('success', function(e) {
      notice.show(<p className="tips">复制成功</p>,{
        closeTime:"800"
      })
    })
  }
  render() {
    return (
      <div className="download-bar">
        <h4 className="title">{this.props.name}</h4>
        <div className="btn-wrapper">
          <i className="iconfont copy" data-clipboard-text={this.props.url} title="复制链接" />
          <i className="iconfont down" title="立即下载" onClick={()=>{window.open(this.props.url,'__blank')}} />
        </div>
        <Tips/>
      </div>
    )
  }
  tryCopy() {}
}

export default DownloadBar
