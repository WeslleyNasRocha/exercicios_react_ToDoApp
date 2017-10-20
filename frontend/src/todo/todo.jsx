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
    this.refresh();
  }

  binder() {
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarAsPending = this.handleMarAsPending.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleAdd() {
    const { description } = this.state;
    axios.post(URL, { description }).then(() => this.refresh());
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/i` : '';
    axios
      .get(`${URL}?sort=-createdAt${search}`)
      .then(resp => this.setState({ description, list: resp.data }));
  }

  handleSearch() {
    this.refresh(this.state.description);
  }

  handleChange(event) {
    this.setState({ description: event.target.value });
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`).then(() => this.refresh(this.state.description));
  }

  handleMarkAsDone(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(() => this.refresh(this.state.description));
  }

  handleMarAsPending(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(() => this.refresh(this.state.description));
  }

  handleClear() {
    this.refresh();
  }

  render() {
    return (
      <div>
        <PageHeader name="Todo" small="small" />
        <TodoForm
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        />
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarAsPending={this.handleMarAsPending}
        />
      </div>
    );
  }
}
