import React, { Component } from "react";

import PageHeader from "../template/pageheader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

export default class Todo extends Component {
  handleAdd() {
    console.log(this);
  }

  render() {
    return (
      <div>
        <PageHeader name="Todo" small="small" />
        <TodoForm handleAdd={this.handleAdd.bind(this)} />
        <TodoList />
      </div>
    );
  }
}
