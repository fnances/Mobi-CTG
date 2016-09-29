import Exponent from 'exponent';
import React from 'react';
import Main from "./app";

class App extends React.Component {
  render() {
    return (
      <Main />
    );
  }
}

Exponent.registerRootComponent(App);
