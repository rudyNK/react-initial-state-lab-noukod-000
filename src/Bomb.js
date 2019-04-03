// your Bomb code here!

import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    const seconds = this.state.secondsLeft;
    let msg = seconds + ' seconds left before I go boom!';
    if (seconds === 0) {
      msg = 'Boom!';
    }
    return (
      msg
    )
  }
}