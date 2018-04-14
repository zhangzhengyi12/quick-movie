import React, { Component } from 'react'

class ErrorTips extends Component {
  render() {
    return (
      <div className="error-tips">
         <h3>哎呀！数据获取出错了</h3>
         <span>重试</span>
      </div>
    )
  }
}

export default ErrorTips
