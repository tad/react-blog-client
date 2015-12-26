import React from 'react';
import Main from '../components/Main';
import { Router, Route } from 'react-router';
let IndexRoute = Router.IndexRoute;

let routes = (<Route path="/" component={Main}>
                <IndexRoute component={Main} />
              </Route>);

export default routes;
