import React, { Component } from 'react'
import './tab.css'

class HeaderTab extends Component {
  render() {
    const tabs = this.props.tabs.map((item, i) => (
      <li 
        onClick={() => {
          this.props.onToggleTab(i)
        }}
        key={i}
        className ={ this.props.activeIndex === i ? 'active item' : 'item' }
      >
        {item}
      </li>
    ))
    return <div className="header-tab">{tabs}</div>
  }
}

export default HeaderTab
