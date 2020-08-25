import React, { Component } from 'react';
import '../App.css';

class Contents extends Component{
  render(){
    let list = [];
    let data = this.props.data;
    console.log(data)
    return(
      <div className="contents">
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default Contents;