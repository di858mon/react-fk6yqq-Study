import React from 'react';

class Task1 extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      s1: props.p1,
    };
    this.s2 = 201;
  }

  componentDidMount() {
    this.s2 += 5;
    this.setState({ s1: +this.state.s1 + 5 });
  }
  buttonHandler = ()=> {
    this.s2 += 50;
    this.setState({ s1: +this.state.s1 + 50 });
  }
  render() {
    return (
      <>
        <div>
          {this.state.s1}, {this.s2}
        </div>
        <button onClick={this.buttonHandler}>ClickMe</button>
      </>
    );
  }
}

export default Task1;
