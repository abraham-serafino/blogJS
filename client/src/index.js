// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './reducers/store.js';
import HelloService from './services/HelloService.js';
import AppComponent from './App.js';

const App = AppComponent({ service: HelloService });

ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('root')
);
