import React, { Component } from 'react'
import './loading-big.css'

class LoadingBig extends Component {
  render() {
    return (
      <div className="loading-wrapper">
         <img src={require('./loading.svg')} alt=""/>
      </div>
    )
  }
}

export default LoadingBig
