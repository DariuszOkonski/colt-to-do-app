import React, { Component } from 'react';
import Todo from './ToDo';
import NewToDoForm from './NewToDoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { task: "Walk The Fish" },
        { task: "Groom Chickens" }
      ]
    }
    this.create = this.create.bind(this);
  }

  create(NewTodo) {
    this.setState({
      todos: [...this.state.todos, NewTodo]
    })
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.task} />
    })

    return (
      <div>
        <h1>Todo List!</h1>
        <NewToDoForm createToDo={this.create} />
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}

export default TodoList;