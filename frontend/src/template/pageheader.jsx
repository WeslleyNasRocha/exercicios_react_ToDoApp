import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = props => (
  <header className="page-header">
    <h2>
      {props.name} <small>{props.small}</small>
    </h2>
  </header>
);

PageHeader.propTypes = {
  name: PropTypes.string.isRequired,
  small: PropTypes.string.isRequired,
};

export default PageHeader;
