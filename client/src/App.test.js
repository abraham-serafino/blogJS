// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from './reducers/store.js';
import HelloService from './services/HelloService.js';
import AppComponent from './App.js';

describe('App', () => {
  it('should render without crashing', () => {
    const service = HelloService;
    const App = AppComponent({ service });

    const component = renderer.create(
      <Provider store={store}><App/></Provider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
