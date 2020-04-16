import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <li>
        <button>Edit</button>
        <button>X</button>
        <li>{this.props.task}</li>
      </li>
    );
  }
}

export default Todo;