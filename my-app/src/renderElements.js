import React, { Component } from 'react';

// A react element is what we want to see on the screen
let name = 'Bonjor!';

const element = <h1>Hello {name}</h1>

function Welcome(props) {
  return <h1>Hello {props.name}</h1>
}

const element1 = <div>
  <Welcome name="Simba" />
  <Welcome name="Nigra" />
  <Welcome name="Timber" />
  </div>

class RenderComponent extends Component {

  render() {
    return(
      <div>
        {element}
        {/* {Welcome("This is great")} */}
        {/* <h1>Hello, {this.props.name}</h1> */}

        {element1}


      </div>
    );
  }
}

export default RenderComponent;
