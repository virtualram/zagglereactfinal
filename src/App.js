import logo from './logo.svg';
import './App.css';
import React from 'react';
import App1 from './App1';
//version 2 changes added

//version 3 changes added
//version 4 changes added
//version 5 changes added ver
class App extends React.Component {
  constructor(props){
    super();
     this.state = {Frequency:100,Name:'default'};
     this.setval = this.setval.bind(this);
     this.handle1 = this.handle1.bind(this);
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
 }

  handle1(e){
  this.shouldComponentUpdate()
   this.setState({Name:e.target.value});
    
  }
  setval(){

    this.setState({Frequency:500});

  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload,Jenkins build  from server 100
          Welcome to React JS 1   mr {this.props.name}
          Frequency {this.state.Frequency}
          Name state{this.state.Name}
        </p>
      <input value ={this.state.Name} type="text" placeholder ="Enter name" onChange ={this.handle1}></input>
        <button onClick ={this.setval}>Click me</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React new deploy
        </a>
        <App1 param1 ="This is an nested component"/>
      </header>
    </div>
  )};
}

export default App;
