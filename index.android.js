
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import MainApp from "./app";

export default class mobictg extends Component {
  render() {
    return (
      <MainApp />
    );
  }
}

AppRegistry.registerComponent('mobictg', () => mobictg);
