import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import IconButton from '../template/iconButton';

const TodoList = (props) => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
        <td>
          <IconButton
            btnStyle="success"
            icon="check"
            hide={todo.done}
            onClick={() => props.handleMarkAsDone(todo)}
          />
          <IconButton
            btnStyle="warning"
            icon="undo"
            hide={!todo.done}
            onClick={() => props.handleMarAsPending(todo)}
          />
          <IconButton
            hide={!todo.done}
            btnStyle="danger"
            icon="trash-o"
            onClick={() => props.handleRemove(todo)}
          />
        </td>
      </tr>
    ));
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

TodoList.propTypes = {
  list: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  list: state.todo.list,
});

export default connect(mapStateToProps)(TodoList);
