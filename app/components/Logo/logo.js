import { WebView, Dimensions, View } from "react-native";
import React, { Component } from "react";

import { page } from "./webview.js";

export default class Logo extends Component {
  render () {
    return (
      <View style={styles.logoContainer}>
        <WebView source={{ html: page }} style={styles.logo} />
      </View>
    );
  }
}

const { width, height } = Dimensions.get("window");

const styles = {
logo: {
  width,
  height,
  alignSelf: "center"
  },
logoContainer: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center"
  }
}
