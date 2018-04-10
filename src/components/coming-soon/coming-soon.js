import React, { Component } from 'react'

class ComingSoon extends Component {
  render() {
    return <div className="coming-soon">i m coming-soon</div>
  }
  componentWillMount(){
    console.log('will-coming');
  }
}

export default ComingSoon
