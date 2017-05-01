// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

function AppComponent(dependencies: { service: { getHello: () => Promise<Object> } }) {
  const { service } = dependencies;

  function App(props: { title: string, handleClick: () => void }) {
    const { title, handleClick } = props;

    return (
      <div>
        <h2>{title}</h2>
        <Button onClick={handleClick}>Change title</Button>
      </div>
    );
  }

  return connect(
    (store: { appState: { title: string } }) => ({
      title: store.appState.title
    }),

    (dispatch: (Object) => void, options: { value: any }) => ({
      handleClick() {
        service.getHello().then((response: { message: string }) => {
          const title = response.message;
          dispatch({ type: 'changeTitle', value: { title } });
        });
      }
    })
  )(App);
}

export default AppComponent;
