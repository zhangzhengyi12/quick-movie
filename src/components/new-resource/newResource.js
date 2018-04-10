import React, { Component } from 'react'

class NewResource extends Component {
  render() {
    return <div className="in-theaters">i m 最新电影</div>
  }
  componentWillMount(){
    console.log('will-new');
  }
}

export default NewResource
