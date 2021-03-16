import React, { Component } from "react";

//imrc enter -- import react, cc enter --- create class

class Counter extends Component {
  state = {
    value: this.props.value, //get the value from the properties and set the count to this
  };

  handleIncrement = () => {
    console.log();
    console.log("Increment +1", this);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? <h1>Zero</h1> : <h1>{count}</h1>; //if count === 0 then return 'Zero' ELSE return count
  }
}

export default Counter;

/*JSX EXPRESSIONS ARE JUST LIKE NORMAL JAVASCRIPT OBJECTS - RETURN FROM FUNC, PASS TO FUNC, USE THEM AS VALUE OF CONST/VARIABLE
JSX EXPRESSIONS <button style={{ width: "500px" }}> etc*/
