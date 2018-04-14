import React, { Component } from 'react'
import './avatar-show.css'
class AvatarShow extends Component {
  render() {
    return (
      <div className="avatar-show">
        <span className="avatar">
         <img src={this.props.avatarSrc} alt=""/>
        </span>
        <span className="name">{this.props.name}</span>
      </div>
    )
  }
}

export default AvatarShow