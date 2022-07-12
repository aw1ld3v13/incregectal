import React, { Component } from 'react';

let valueStore = [];

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

  handleClick(button) {
    let { gecs } = this.state;
    let { clickValue } = this.state;

    gecs = gecs += clickValue;

    this.setState({
      gecs
    });
  }

  

  
}

export default App;