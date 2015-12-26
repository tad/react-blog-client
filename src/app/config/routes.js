import React from 'react';
import Main from '../components/Main';
import About from '../components/blog-container/static/About';
import Container from '../components/blog-container/Container';
import { Router, Route } from 'react-router';
let IndexRoute = Router.IndexRoute;

let routes = (
                <Route path='/' component={Main}>
                  <Route path='about' component={About} />                
                </Route>
              );

export default routes;
