import React, { Component } from "react";

//imrc enter -- import react, cc enter --- create class

class Counter extends Component {
  state = {
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>tag</li>
        ))}
      </ul>
    );
  }

  render() {
    //render method controls what is displayed on page
    //conditional statement {this.state.tags.length === 0 && "Please create a new tag!"}
    //javascript analyses boolean on left side of && to decide whether to continue on right side, if true then returns second operand
    /*If expr1 can be converted to true, returns expr2; else, returns expr1.
      If a value can be converted to true, the value is so-called truthy. If a value can be converted to false, the value is so-called falsy.*/
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;

/*JSX EXPRESSIONS ARE JUST LIKE NORMAL JAVASCRIPT OBJECTS - RETURN FROM FUNC, PASS TO FUNC, USE THEM AS VALUE OF CONST/VARIABLE
JSX EXPRESSIONS <button style={{ width: "500px" }}> etc*/
