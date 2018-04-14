import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

class ScrollView extends Component {
  render() {
    return <Scrollbars style={{ width: 420, height: 560, background: '#344752' }}>{this.props.children}</Scrollbars>
  }
}

export default ScrollView
