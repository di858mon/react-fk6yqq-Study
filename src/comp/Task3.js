import React from 'react';
import { useState } from 'react';

class Task3 extends React.Component {
  constructor() {
    super();
    this.state = {
      st1: '',
    };
  }
  f1 = (event) => {
    this.setState({ st1: event.target.value });
  };
  render() {
    return (
      <>
        <input type="text" className="in1" onInput={this.f1} />
        <br />
        <button onClick={this.f1}>TestButton</button>
        <div className="out1">{this.state.st1}</div>
      </>
    );
  }
}

export default Task3;
