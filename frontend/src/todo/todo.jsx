import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/pageheader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: '', list: [] };

    this.binder();
  }

  binder() {
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAdd() {
    const { description } = this.state;
    axios.post(URL, { description }).then(resp => console.log('funcionou'));
  }

  handleChange(event) {
    this.setState({ description: event.target.value });
  }

  render() {
    return (
      <div>
        <PageHeader name="Todo" small="small" />
        <TodoForm
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
        />
        <TodoList />
      </div>
    );
  }
}
