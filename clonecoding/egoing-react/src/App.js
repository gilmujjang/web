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