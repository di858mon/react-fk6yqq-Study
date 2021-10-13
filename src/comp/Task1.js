import React from 'react';
import { useState } from 'react';

class Task1 extends React.Component {
  constructor() {
    super();
    this.state = {
      st1: '',
    };
  }
  f1 = () => {
    let pageIn = document.querySelector('.in1').value;
    this.setState({ st1: pageIn });
  };
  render() {
    return (
      <>
        <input type="text" className="in1" />
        <br />
        <button onClick={this.f1}>TestButton</button>
        <div className="out1">{this.state.st1}</div>
      </>
    );
  }
}

export default Task1;
