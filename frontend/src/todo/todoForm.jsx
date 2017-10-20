import React from "react";

import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default props => (
  <div className="todoForm" role="form">
    <Grid cols="10 9 10">
      <input
        placeholder="Adicione uma tarefa"
        className="form-control"
        id="description"
      />
    </Grid>
    <Grid cols="2 3 2">
      <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
    </Grid>
  </div>
);
