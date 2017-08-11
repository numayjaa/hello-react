import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  counterClickMinus() {

  }

  render() {
    let {count} = this.state
    return (
      <div className="box-counter">
        <p className="btn-counter">-</p>
        <p>{count}</p>
        <p className="btn-counter">+</p>
      </div>
    );
  }
}

export default Counter;
