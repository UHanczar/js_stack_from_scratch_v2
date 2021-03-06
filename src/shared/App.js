// @flow

import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet'

import Nav from './components/Nav';
import HomePage from './components/pages/Home';
import HelloPage from './components/pages/Hello';
import HelloAsyncPage from './components/pages/HelloAsync';
import NotFoundPage from './components/pages/NotFound';
import { APP_NAME } from './config';
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
} from './routes';

const App = () => (
  <div>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
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
