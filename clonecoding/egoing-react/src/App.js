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
      ]
    }
  }
  render(){
    let url = 'https://api.github.com/repos/gilmujjang/web/contents/small';
    let list = [];
    fetch(url, {method:'GET'})
    .then(res => res.json())
    .then((out) => {
      for(let i=0; i<out.length; i++){
        list.push(out[i].name)
      }
      return list
      // list.forEach(name => this.state.contents.push(name))
      // this.setState({contents:this.state.contents})

    })
    .then(list =>
       list.forEach(name =>
         this.state.contents.push(name)),
         this.setState({contents:this.state.contents})
       )
    .catch(err => { throw err });
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