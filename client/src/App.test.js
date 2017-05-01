import React from 'react';
import renderer from 'react-test-renderer';

import HelloService from './services/HelloService.js';
import AppComponent from './App.js';

describe('App', () => {
  it('should render without crashing', () => {
    const service = HelloService;
    const App = AppComponent({ service });

    const component = renderer.create(
      <App/>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
