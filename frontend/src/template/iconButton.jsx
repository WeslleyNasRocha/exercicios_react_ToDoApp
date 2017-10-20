import React from 'react';

import PropTypes from 'prop-types';

import If from './if';

const IconButton = props => (
  <If test={!props.hide}>
    <button className={`btn btn-${props.btnStyle}`} onClick={props.onClick}>
      <i className={`fa fa-${props.icon}`} />
    </button>
  </If>
);

IconButton.propTypes = {
  hide: PropTypes.bool,
  btnStyle: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string.isRequired,
};

IconButton.defaultProps = {
  hide: false,
  btnStyle: 'primary',
  onClick: () => console.log('Create a function to this button'),
};

export default IconButton;
