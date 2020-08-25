import React, { Component } from 'react';
import '../App.css';

class Contents extends Component{
  render(){
    let list = [];
    let data = this.props.data;
    let i = 0;
    console.log(data)
    while(i<data.length){
      list.push(<li>{data[i].name}</li>);
      i = i+1;
    }
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