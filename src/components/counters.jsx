import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props; //destructuring

    //Passing <h4> element as child for rendering possibly different title on each Counter on page, useful for dialogue boxes
    //Easier way is to add another property to Counter eg id={counter.id} and wrap that in <h4> on counter.jsx render()

    //Counter onDelete=this.handleDelete --- added onDelete method in Counter and it recognises it as prop here
    //key and id both passed as key is used internally by React and we cannot access it, but we can just pass counter object itself

    //lifted the state up to App.js
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            onDelete={onDelete}
            onIncrement={onIncrement}
            key={counter.id}
            counter={counter}
            selected={true}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
