import React, { Component } from 'react';
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    }

    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleRemove() {
    this.props.removeToDo(this.props.id);
  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateToDo(this.props.id, this.state.task);

    this.setState({
      isEditing: false,
    });
  }

  handleToggle(evt) {
    this.props.toggleToDo(this.props.id);
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
        <li>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <p className={this.props.completed ? 'completed' : ''} onClick={this.handleToggle}>
            {this.props.task}
          </p>
        </li>
      )
    };


    return result;
  }
}

export default Todo;