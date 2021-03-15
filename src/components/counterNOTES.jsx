import React, { Component } from "react";

//imrc enter -- import react, cc enter --- create class

/*this keyword when called from obj.method() will return obj but if called from standalone function() will refer undefined. fix w/ bindings*/

class Counter extends Component {
  state = {
    tags: [],
  };

  //bind so that when calling this in handleIncrement() it refers to object (Counter) and not undefined
  /*constructor() {
    super();
    this.handleIncrement.bind(this);
  }*/

  //transform to "arrow function", inherits "this" keyword from parent class
  //setState is method inherited from Component
  handleIncrement = () => {
    console.log("Increment +1", this);
    this.setState({ count: this.state.count + 1 }); //pass to state, will merge or overwrite if exists
  };

  /*
  cheat way of passing parameter
  doHandleIncrement = () => {
  this.handleIncrement({ id: 1});
  }
   */

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

    //passing arguments: you can pass arguments by creating arrow method in onClick event in button or whatever event you are tying to
    return (
      <div>
        <button onClick={() => this.handleIncrement(argument)}></button>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;

/*JSX EXPRESSIONS ARE JUST LIKE NORMAL JAVASCRIPT OBJECTS - RETURN FROM FUNC, PASS TO FUNC, USE THEM AS VALUE OF CONST/VARIABLE
JSX EXPRESSIONS <button style={{ width: "500px" }}> etc*/
