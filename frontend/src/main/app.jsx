import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../template/custom.css';

import Routes from './routes';
import Menu from '../template/menu';

require('bootstrap');

export default () => (
  <div className="container">
    <Menu />
    <Routes />
  </div>
);
