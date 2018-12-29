import React, { Component } from 'react';

class Person extends Component {

  // a state with in comopnent
  constructor(){
      super();
      this.state = {
          message: "my friend (from state)!"
      };
      this.updateMessage = this.updateMessage.bind(this);
  }

  updateMessage(){
    this.setState({
      message: "my friend (from changed state)!"
    });
  }

// state are within component and can be changed
// props are external or outside the component and can not be changed


  render(){
      return(
          <div>
              <h1>Hello World {this.props.tesla}</h1>
              <h2>this is amazing {this.state.message}</h2>
              <button onClick={this.updateMessage}>Click Me!</button>
          </div>
      );
  }
}

export default Person;