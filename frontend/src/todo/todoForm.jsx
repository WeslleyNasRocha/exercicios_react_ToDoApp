import React, { PropTypes } from 'react';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

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
          onChange={props.handleChange}
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

TodoForm.propTypes = {
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
};

export default TodoForm;
