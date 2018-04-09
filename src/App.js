import React, { Component } from 'react'
import './App.css'
import InTheaters from  './components/in-theaters/inTheaters'
import HeaderTab from './components/header-tab/headerTab'

const HEAD_TABS = [
  '正在热映',
  '最新资源',
  '即将上映'
]

class App extends Component {
  constructor(){
    super()
    this.state = {
      activeViewIndex:0
    }
  }
  render() {
    return (
      <div className="App">
        <HeaderTab tabs={HEAD_TABS} activeIndex={this.state.activeViewIndex} onToggleTab={(i)=>{this.onToggleViewTab(i)}} />
      </div>
    );
  }
  onToggleViewTab(i){
    this.setState({
      activeViewIndex:i
    })
  }
}

export default App;
