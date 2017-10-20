import React from 'react';

const IF = (props) => {
  if (props.test) {
    return props.children;
  }
  return false;
};

export default IF;
