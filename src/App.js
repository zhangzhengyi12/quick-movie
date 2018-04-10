import React, { Component } from 'react'
import './App.css'
import InTheaters from './components/in-theaters/inTheaters'
import HeaderTab from './components/header-tab/headerTab'
import ComingSoon from './components/coming-soon/coming-soon'
import NewResource from './components/new-resource/newResource'

const HEAD_TABS = ['正在热映', '最新资源', '即将上映']

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeViewIndex: 0
    }
  }
  render() {
    return (
      <div className="App">
        <HeaderTab
          tabs={HEAD_TABS}
          activeIndex={this.state.activeViewIndex}
          onToggleTab={i => {
            this.onToggleViewTab(i)
          }}
        />
        <div className={this.state.activeViewIndex === 0 ? 'dis' : 'hide'}>
          <InTheaters />
        </div>
        <div className={this.state.activeViewIndex === 2 ? 'dis' : 'hide'}>
          <ComingSoon />
        </div>
        <div className={this.state.activeViewIndex === 1 ? 'dis' : 'hide'}>
          <NewResource />
        </div>
      </div>
    )
  }
  onToggleViewTab(i) {
    this.setState({
      activeViewIndex: i
    })
  }
}

export default App
