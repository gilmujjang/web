import React, { Component } from 'react';
import '../App.css';

class Contents extends Component{
  render(){
    let lists = [];
    let data = this.props.data;
    for(let i=0; i<data.length; i++){
      lists.push(<li>{data[i].name}</li>)
    }
    return(
      <div className="contents">
        <ul>
          <li>{lists}</li>
        </ul>
      </div>
    )
  }
}

export default Contents;