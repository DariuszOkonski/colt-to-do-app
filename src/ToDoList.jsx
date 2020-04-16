import React, { Component } from 'react';
import Todo from './ToDo';
import NewToDoForm from './NewToDoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }

  create(NewTodo) {
    this.setState({
      todos: [...this.state.todos, NewTodo]
    })
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo
        key={todo.id}
        task={todo.task}
        id={todo.id}
        removeToDo={this.remove}
      />
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