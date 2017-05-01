import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

function AppComponent({ service }) {
  return class App extends Component {
    state = {
      title: 'Welcome to My Site'
    };

    render() {
      const { title } = this.state;

      const handleClick = () => {
        service.getHello().then(response => {
          const title = response.message;
          this.setState({ title });
        });
      };

      return (
        <div>
          <h2>{title}</h2>
          <Button onClick={handleClick}>Change title</Button>
        </div>
      );
    }
  };
}

export default AppComponent;
