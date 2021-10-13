import React from 'react';
import { useState } from 'react';

class Task2 extends React.Component {
  constructor() {
    super();
    this.state = {
      st1: 0,
    };
  }
  f1 = () => {
    let pageIn = this.state.st1;
    pageIn++;
    this.setState({ st1: pageIn });
  };

  render() {
    return (
      <>
        <input type="text" className="in" onMouseEnter={this.f1} />
        <br />
        <div className="out">{this.state.st1}</div>
      </>
    );
  }
}

export default Task2;
