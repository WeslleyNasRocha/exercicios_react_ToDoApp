import React from 'react';

import '../template/custom.css';
import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';

import Routes from './routes';
import Menu from '../template/menu';

require('bootstrap');

export default props => (
  <div className="container">
    <Menu />
    <Routes />
  </div>
);
