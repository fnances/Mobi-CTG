import { View, Text, StyleSheet, Image } from "react-native";
import React, { Component } from "react";
import { logo } from "../../config/images.js";

class LoadingScene extends Component {
  constructor () {
    super();
  }


  render () {
    if (this.props.hide) return null;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Mobi CTG</Text>
        <Image source={logo} />
        <Text style={styles.text}>Instruktaz podlaczenia aparatury KTG i przeprowadzenia badania</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  text: {
    fontSize: 25
  }
});

export default LoadingScene;
