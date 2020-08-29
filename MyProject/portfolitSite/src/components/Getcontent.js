import React, { Component, useEffect, useState } from 'react';
import '../App.css';

class Getcontent extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: props
    }
  }
  
  render(){
    function createMarkup(t){
      return {__html:t};
    }
    
    return(
      <div className="githtml">
        <div dangerouslySetInnerHTML={createMarkup(text)}></div>
      </div>
    )
  }
}

export default Getcontent;