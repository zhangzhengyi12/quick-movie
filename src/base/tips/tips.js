import React, { Component } from 'react'

class Tips extends Component {
  constructor() {
    super()
    this.state = {
      dis: false
    }
  }
  render() {
    return <div className="tips">{this.state.dis && <div className="content">{this.props.children}</div>}</div>
  }
  show() {
    console.log('show?')
    this.state({
      dis: true
    })
  }
  hide() {
    this.state({
      dis: false
    })
  }
}

export default Tips
