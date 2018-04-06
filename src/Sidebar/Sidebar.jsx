import React, { Component } from 'react'
import logo from './magnet.svg'
import './Sidebar.css';

class Sidebar extends Component {

  render(){
    return(
      <div className="Sidebar" >
      <img src={logo} className="Sidebar__Logo" alt="logo" />
          <img src={logo} className="Sidebar__Logo" alt="logo" />
      </div>
    )
  }
}

export default Sidebar
