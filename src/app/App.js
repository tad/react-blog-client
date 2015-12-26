import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Footer from './components/Footer';
import {Route, Router} from 'react-router';
// var Router = require('react-router').Router;
// import routes from './config/routes';
let IndexRoute = Router.IndexRoute;

ReactDOM.render(
  <Router>
    <Route name='home' path='/' component={Main}>
      <Route name='repo' path='/:login/:name' component={Footer} />
    </Route>
  </Router>,
  document.getElementById('app')
);
