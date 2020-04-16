import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.removeToDo(this.props.id);
  }

  render() {
    return (
      <li>
        <button>Edit</button>
        <button onClick={this.handleRemove}>X</button>
        <div>{this.props.task}</div>
      </li>
    );
  }
}

export default Todo;