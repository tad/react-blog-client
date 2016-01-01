import React from 'react';
import Main from '../components/Main';
import About from '../../static/About';
import Categories from '../../static/Categories';
import Bookstore from '../../static/Bookstore';
import Links from '../../static/Links';
import {BlogContainer} from '../components/blog-container/Blog';
import { Router, Route, IndexRoute } from 'react-router';

const routes = (
                <Route path='/' component={Main}>
                  <IndexRoute component={BlogContainer} />
                  <Route path='about' component={About} />
                  <Route path='categories' component={Categories} />
                  <Route path='bookstore' component={Bookstore} />
                  <Route path='links' component={Links} />
                </Route>
              );

export default routes;
