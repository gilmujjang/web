import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Contents from './components/Contents'
import './App.css';


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      contents: [
        {id:100, name:"test"},
      ]
    }
  }
  render(){

    let list = [];
    let url = 'https://api.github.com/repos/gilmujjang/web/contents/small';
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.onreadystatechange = function (evt) {
      if (request.readyState !== 4) {
        return;
      }
      console.log(request.response)
    };
    request.send();
    request.responseType = 'json';
    console.log(request.response)

    return (
      <div className="App">
        <Header></Header>
        <Sidebar></Sidebar>
        <Contents data={this.state.contents}></Contents>
      </div>
    );
  }
}

export default App;