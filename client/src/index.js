import React from 'react';
import ReactDOM from 'react-dom';

import HelloService from './services/HelloService.js';
import AppComponent from './App.js';

const App = AppComponent({ service });

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
