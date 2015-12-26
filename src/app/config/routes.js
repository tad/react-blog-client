import React from 'react';
import Main from '../components/Main';
import About from '../components/blog-container/static/About';
import Container from '../components/blog-container/Container';
import { Router, Route, IndexRoute } from 'react-router';

let routes = (
                <Route path='/' component={Main}>
                  <IndexRoute component={Container} />
                  <Route path='about' component={About} />
                </Route>
              );

export default routes;
