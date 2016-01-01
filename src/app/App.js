import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Footer from './components/Footer';
import {Route, Router} from 'react-router';
import { Provider } from 'react-redux';
import routes from './config/routes';

import { createStore } from 'redux'
import myBlog from '../reducer'

let store = createStore(myBlog);

ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
