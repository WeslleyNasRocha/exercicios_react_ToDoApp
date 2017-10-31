import React, { PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

import { changeDescription } from './todoActions';

const TodoForm = (props) => {
  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === 'Escape') {
      props.handleClear();
    }
  };

  return (
    <div className="todoForm" role="form">
      <Grid cols="12 9 10">
        <input
          placeholder="Adicione uma tarefa"
          className="form-control"
          id="description"
          value={props.description}
          onKeyUp={keyHandler}
          onChange={props.changeDescription}
        />
      </Grid>
      <Grid cols="12 3 2" className="tableActions">
        <IconButton btnStyle="primary" icon="plus" onClick={props.handleAdd} />
        <IconButton btnStyle="info" icon="search" onClick={props.handleSearch} />
        <IconButton btnStyle="default" icon="close" onClick={props.handleClear} />
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({
  description: state.todo.description,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeDescription,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
