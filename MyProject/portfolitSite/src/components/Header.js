import React, { Component } from 'react';
import '../App.css';

class Header extends Component{
  render(){
    return(
      <div className="header">
        <h2>길무짱의 포트폴리오</h2>
        <p>작동을 안하면 새로고침후 다시 해보세요</p>
      </div>
    )
  }
}

export default Header;