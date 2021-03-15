import React, { Component } from "react";

//imrc enter -- import react, cc enter --- create class

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    console.log("Increment +1", this);
  };

  constructor() {
    super();
    this.handleIncrement.bind(this);
  }

  render() {
    let classes = this.getBadgeClasses();

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count; //if count === 0 then return 'Zero' ELSE return count
  }
}

export default Counter;

/*JSX EXPRESSIONS ARE JUST LIKE NORMAL JAVASCRIPT OBJECTS - RETURN FROM FUNC, PASS TO FUNC, USE THEM AS VALUE OF CONST/VARIABLE
JSX EXPRESSIONS <button style={{ width: "500px" }}> etc*/
