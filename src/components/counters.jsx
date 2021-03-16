import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    //Passing <h4> element as child for rendering possibly different title on each Counter on page, useful for dialogue boxes
    //Easier way is to add another property to Counter eg id={counter.id} and wrap that in <h4> on counter.jsx render()

    //Counter onDelete=this.handleDelete --- added onDelete method in Counter and it recognises it as prop here
    //key and id both passed as key is used internally by React and we cannot access it, but we can just pass counter object itself
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            onDelete={this.handleDelete}
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
