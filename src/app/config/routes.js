import React from 'react';
import Main from '../components/Main';
import {AboutContainer} from '../components/blog-container/pages/AboutContainer';
import Categories from '../../static/Categories';
import Bookstore from '../../static/Bookstore';
import Links from '../../static/Links';
import {BlogContainer} from '../components/blog-container/Blog';
import { Router, Route, IndexRoute } from 'react-router';

const routes = (
                <Route path='/' component={Main}>
                  <IndexRoute component={BlogContainer} />
                  <Route path='about' component={AboutContainer} />
                  <Route path='categories' component={Categories} />
                  <Route path='bookstore' component={Bookstore} />
                  <Route path='links' component={Links} />
                </Route>
              );

export default routes;
