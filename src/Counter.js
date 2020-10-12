import React, { useState } from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ 
      ...this.state,
      count: this.state.count + 1,
    });
  }

  // special React lifecycle method
  componentDidUpdate(prevProps, prevState) {
    document.title = `count: ${this.state.count}`;
  }

  // special React lifecycle method
  componentWillUnmount() {
    document.title = 'no counter';
  }

  render() {
    return (
      <div>
        <div>count: {count}</div>
        <div>
          <button onClick={this.increment}>increment</button>
        </div>
      </div>
    );
  }
}