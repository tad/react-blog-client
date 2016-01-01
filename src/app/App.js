import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Footer from './components/Footer';
import {Route, Router} from 'react-router';
import routes from './config/routes';

ReactDOM.render(
  <Router>
    {routes}
  </Router>,
  document.getElementById('app')
);
