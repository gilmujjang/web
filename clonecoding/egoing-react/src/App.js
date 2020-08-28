import React, { Component } from 'react';
import Header from './components/Header'
import Contents from './components/Contents'
import './App.css';


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      contents: [
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <Header></Header>
        <div className="content">
          <Contents></Contents>
        </div>
      </div>
    );
  }
}

export default App;