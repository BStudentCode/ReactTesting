import React, { Component } from "react";

//imrc enter -- import react, cc enter --- create class

/*this keyword when called from obj.method() will return obj but if called from standalone function() will refer undefined. fix w/ bindings*/

class Counter extends Component {
  state = {
    value: this.props.value, //get the value from the properties and set the count to this
  };

  //PROPERTIES = DATA THAT WE GIVE TO A COMPONENT
  //STATE = DATA THAT IS LOCAL/PRIVATE TO THAT COMPONENT

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

  handleDelete = (counterId) => {
    //this.setState and pass only the counters, as above will overwrite with new array minus removed counter
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
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
    //the props of this component are all within return ()
    return (
      <div>
        <div>
          {this.props.children}
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={() => this.handleIncrement()}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            onClick={this.props.onDelete}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;

/*JSX EXPRESSIONS ARE JUST LIKE NORMAL JAVASCRIPT OBJECTS - RETURN FROM FUNC, PASS TO FUNC, USE THEM AS VALUE OF CONST/VARIABLE
JSX EXPRESSIONS <button style={{ width: "500px" }}> etc*/

//THE COMPONENT THAT OWNS A PIECE OF THE STATE SHOULD BE THE ONE MODIFYING IT EG COUNTERS MODIFY COUNTERS STATE
//raise events instead from one component to the other, eg Counter raise onDelete() event to Counters handleDelete()
