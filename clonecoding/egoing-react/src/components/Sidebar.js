import React, { Component } from 'react';
import '../App.css';

class Sidebar extends Component{
  render(){
    return(
      <div className="sidebar">
        <ul>
          <li>html</li>
          <li>css</li>
          <li>javascript</li>
        </ul>
      </div>
    )
  }
}

export default Sidebar;