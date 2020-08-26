import React, { Component, useEffect, useState } from 'react';
import Getlist from "./Getlist"
import '../App.css';

class Contents extends Component{

  render(){
    let list = [];
    let url = 'https://api.github.com/repos/gilmujjang/web/contents/small';
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.onreadystatechange = function (evt) {
      if (request.readyState !== 4) {
        return;
      }
    };
    request.send();
    request.responseType = 'json';

    // let lists = [];
    // let data = this.props.data;
    // for(let i=0; i<data.length; i++){
    //   lists.push(<li>{data[i].name}</li>)
    // }
    return(
      <div className="contents">
        <Getlist></Getlist>
      </div>
    )
  }
}

export default Contents;