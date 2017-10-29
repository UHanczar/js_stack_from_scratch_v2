// @flow

import React from 'react';
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import HelloButton from './containers/HelloButton';
import HelloAsyncButton from './containers/HelloAsyncButton';
import Message from './containers/Message';
import MessageAsync from './containers/MessageAsync';
import Nav from './components/Nav';
import HomePage from './components/pages/Home';
import HelloPage from './components/pages/Hello';
import HelloAsyncPage from './components/pages/HelloAsync';
import NotFoundPage from './components/pages/NotFound';
import { APP_NAME } from '../shared/config';
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
} from '../shared/routes';

const App = () => (
  <div>
    <h1>{APP_NAME}</h1>
    <Nav />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <Route path={HELLO_PAGE_ROUTE} render={() => <HelloPage />} />
      <Route path={HELLO_ASYNC_PAGE_ROUTE} render={() => <HelloAsyncPage />} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
