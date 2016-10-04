import { View, Text, StyleSheet, Image, WebView } from "react-native";
import React, { Component } from "react";
import exponent from "exponent";
import { Button, Container, Icon } from "react-native-elements";
import videos from "../../config/videos.js";
import content from "../../config/content.js";
import player from "./webviewPlayer.js";
const { scenesContent } = content;

const { Video } = exponent.Components;

const videosStartAtStep = 2;

class Step extends Component {
  constructor () {
    super();
    this.state = {
      actualStep: 0,
      steps: [],
      feedback: "",
      videoLoaded: false
    };
  }
  nextStep () {
    const { actualStep, steps, feedback } = this.state;
    if (actualStep + 1 < scenesContent.length) {
      this.setState({
        actualStep: actualStep + 1,
        steps: [...steps, { step: actualStep, feedback }],
        feedback: "",
        videoLoaded: false
      });
    }
    else {
      this.props.navigator.push({
        name: "Survey",
        steps
      });
    }
  }
  feedback (feedback) {
    this.setState({ feedback });
  }
  onVideoLoad () {
      this.setState({ videoLoaded: true})
  }
  render () {
    const { actualStep, videoLoaded } = this.state;
    const { stage, description, video = false, buttonImage = false } = scenesContent[actualStep];
    let loading = null;
    let source = (video) ? () => videos()[actualStep - videosStartAtStep] : null ;
    if (video && !videoLoaded) {
      loading = <Text>Loading...</Text>;
    }


    return (
      <View style={styles.container} >
        <Text style={styles.header}> {stage}</Text>
        <Text style={styles.description}>{description}</Text>

        {loading}

        {video && <WebView style={styles.videoLoaded} source={{ html: player(source) }} onLoad={() => this.onVideoLoad.bind(this)} />}

        <View style={styles.actions}>
          <Icon size={75} name="sentiment-dissatisfied" onPress={this.feedback.bind(this, "sad")}/>
          <Icon size={75} name="sentiment-neutral" onPress={this.feedback.bind(this, "neutral")}/>
          <Icon size={75} name="sentiment-satisfied" onPress={this.feedback.bind(this, "happy")}/>
        </View>
        <Button
          style={styles.nextStep}
          onPress={this.nextStep.bind(this)}
          title="PRZEJDŹ DALEJ"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1
  },
  header: {
    fontSize: 50
  },
  videoLoaded: {
    flex: 2.5,
    alignSelf: "center",
    width: (90/100) * 1280,
  },
  actions: {
    flexDirection: "row",
    flex: 1
  },
  description: {
    fontSize: 25
  },
  nextStep: {
    flex: 1
  }
});

export default Step;
