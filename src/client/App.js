// @flow

import React from 'react';
import HelloButton from './containers/HelloButton';
import HelloAsyncButton from './containers/HelloAsyncButton';
import Message from './containers/Message';
import MessageAsync from './containers/MessageAsync';
import { APP_NAME } from '../shared/config';

const App = () => (
  <div>
    <h1>{APP_NAME}</h1>
    <Message />
    <HelloButton />
    <MessageAsync />
   <HelloAsyncButton />
  </div>
);

export default App;
