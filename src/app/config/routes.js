import React from 'react';
import Main from '../components/Main';
import About from '../components/blog-container/static/About';
import Categories from '../components/blog-container/static/Categories';
import Bookstore from '../components/blog-container/static/Bookstore';
import Links from '../components/blog-container/static/Links';
import Container from '../components/blog-container/Container';
import { Router, Route, IndexRoute } from 'react-router';

let routes = (
                <Route path='/' component={Main}>
                  <IndexRoute component={Container} />
                  <Route path='about' component={About} />
                  <Route path='categories' component={Categories} />
                  <Route path='bookstore' component={Bookstore} />
                  <Route path='links' component={Links} />
                </Route>
              );

export default routes;
