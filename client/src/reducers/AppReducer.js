// @flow
import merge from 'lodash.merge';
import initializeActions from '../lib/initializeActions.js';

function AppReducer(originalState: Object, actionOptions: { type: 'changeTitle', value: any }): Object {
  const state: { title: string } = merge({
    title: 'Welcome to My Site'
  }, originalState);

  const { type, value } = actionOptions;

  initializeActions(type, value, {
    changeTitle(value: { title: string }) {
      state.title = value.title;
    }
  });

  return state;
}

export default AppReducer;
