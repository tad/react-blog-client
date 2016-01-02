import React from 'react';
import {MainContainer} from '../components/Main';
import {AboutContainer} from '../components/blog-container/pages/AboutContainer';
import {CategoriesContainer} from '../components/blog-container/pages/CategoriesContainer';
import {BookstoreContainer} from '../components/blog-container/pages/BookstoreContainer';
import {LinksContainer} from '../components/blog-container/pages/LinksContainer';
import {BlogContainer} from '../components/blog-container/Blog';
import { Router, Route, IndexRoute } from 'react-router';

const routes = (
                <Route path='/' component={MainContainer}>
                  <IndexRoute component={BlogContainer} />
                  <Route path='about' component={AboutContainer} />
                  <Route path='categories' component={CategoriesContainer} />
                  <Route path='bookstore' component={BookstoreContainer} />
                  <Route path='links' component={LinksContainer} />
                </Route>
              );

export default routes;
