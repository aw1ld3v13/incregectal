import React, { Component } from 'react';
import Generators from './components/Generators';
// import Generators from './Generators';

function getInitialState() {
  return {
    gecs: 0,
    clickValue: 1
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = getInitialState();
  }

  // handle every click
  handleClick(button) {
    // pull total gecs and the value of each click from the state
    let { gecs, clickValue } = this.state;

    // add the value of a click to the current gec total
    gecs = gecs += clickValue;

    // update total gecs in the state
    this.setState({
      gecs
    });
  }

  render() {
    // pull total gecs and click value from state
    const { gecs, clickValue } = this.state;
    const handleClick = this.handleClick;

    // add passive gec generator elements in a block here
    // const generatorDiv = <div>insert generators here</div>

    // total gec display
    let gecCounterDiv = (
      <div id="gecsBox"> 
        <h2> { gecs } gecs </h2>
        <button id="increment" onClick={handleClick}> + {`${clickValue}`} gecs </button>
      </div>
    );

    return (
      // renders gec counter display, button to add gecs, and the main section 
      <div> 
        {gecCounterDiv}
        <div id = "main">
          {/* { generatorDiv } */}
        </div>
      </div>
    );
  }
}

export default App;