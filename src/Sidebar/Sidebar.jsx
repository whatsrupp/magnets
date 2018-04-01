import React, { Component } from 'react'
import logo from './magnet.svg'

class Sidebar extends Component {

  render(){
    return(
      <div className="Sidebar" >
      <img src={logo} className="Sidebar-logo" alt="logo" />
      </div>
    )
  }
}

export default Sidebar
