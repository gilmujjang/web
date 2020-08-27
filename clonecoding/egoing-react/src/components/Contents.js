import React, { Component, useEffect, useState } from 'react';
import Getlist from "./Getlist"
import Gettext from "./Gettext"
import '../App.css';

class Contents extends Component{

  render(){
    
    return(
      <div className="contents">
        <Getlist></Getlist>
        <Gettext></Gettext>
      </div>
    )
  }
}

export default Contents;