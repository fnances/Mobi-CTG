import { WebView, Dimensions } from "react-native";
import React, { Component } from "react";

import { page } from "./webview.js";

export default class Logo extends Component {
  render () {
    return (
      <WebView source={{ html: page }} style={logo} />
    );
  }
}

const { width, height } = Dimensions.get("window");

const logo = {
  width,
  height,
  alignSelf: "center"
};
