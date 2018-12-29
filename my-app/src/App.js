import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RenderComponent from './renderElements';
// import Person from './testing';
// import JsxExample from './jsxExample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <h3>Hello {this.props.message}</h3> */}
        {/* <Person tesla="Pops out"/> */}
        {/* <JsxExample /> */}
        <RenderComponent />
      </div>
    );
  }
}

export default App;
