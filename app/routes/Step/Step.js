import { View, Text, Image, WebView } from "react-native";
import React, { Component } from "react";
import exponent from "exponent";
import { Button, Container, Icon } from "react-native-elements";
import EStyleSheet from "react-native-extended-stylesheet";

import videos from "../../config/videos.js";
import content from "../../config/content.js";
import { styles } from "./styles";


import { FontAwesome, Ionicons, Entypo } from "@exponent/vector-icons"

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
      videoFinished: false,
      actualTime: null
    };

  }
  nextStep () {

    const { actualStep, steps, feedback } = this.state;

    // if (!feedback) {
    //   alert("Oceń trudność kroku przed przystąpieniem do następnego kroku.");
    //   return;
    // }
    if (actualStep + 1 < scenesContent.length) {
      this.setState({
        actualStep: actualStep + 1,
        steps: [...steps, { step: actualStep, feedback }],
        feedback: "",
        videoFinished: false

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
  interval() {
    let timeToPass = 1800000;
    setInterval(() => {
      timeToPass -= 1000;
      let minutes = Math.floor((timeToPass / 1000) / 60);
      let	seconds = Math.floor((timeToPass / 1000) % 60);

      this.setState({ actualTime: getFormattedTime(minutes, seconds) });
    }, 1000);
  }
  renderTimer () {
    return (
      <View style={styles.timer}>
          <Text style={styles.timerTime}>
            {this.state.actualTime}
          </Text>
          <Button
            buttonStyle={styles.timerStart}
            title="Zacznij odliczanie"
            onPress={() => this.interval()}
            />
        </View>
    );
  }
  renderUserActions () {
    return (
      <View style={styles.actions}>
        <Text style={styles.feedbackHeader}>Ocena kroku: </Text>
          <Entypo
            style={[styles.icon, (this.state.feedback === "sad") ? styles.clicked : {}]}
            name="emoji-sad"
            onPress={() => this.feedback("sad")}
            />
          <Entypo
            style={[styles.icon, (this.state.feedback === "neutral") ? styles.clicked : {}]}
            name="emoji-neutral"
            onPress={() => this.feedback("neutral")}
            />
          <Entypo
            style={[styles.icon, (this.state.feedback === "happy") ? styles.clicked : {}]}
            name="emoji-happy"
            onPress={() => this.feedback("happy")}
            />
        </View>
    );
  }
  renderVideo (actualStep) {
    const { videoFinished } = this.state
    return (
      <Video
        style={[styles.video, (videoFinished) ? { width: 0, height: 0, position: "absolute" } : {}]}
        resizeMode="stretch"
        source={videos()[actualStep + 1]}
        onEnd={() => this.setState({ videoFinished: true })}
        />
    );
  }
  render () {
    const { actualStep, videoFinished } = this.state;
    const { stage, description, video = false, buttonImage = false, timer = false } = scenesContent[actualStep];

    return (
      <View style={styles.container} >
        <Text style={styles.header}> {stage}</Text>
        <Text style={styles.description}>{description}</Text>

        {video && this.renderVideo(actualStep)}



        {timer && videoFinished && this.renderTimer()}

        {(videoFinished || !video) && this.renderUserActions()}

        <Button buttonStyle={styles.nextStep} onPress={this.nextStep.bind(this)} title="PRZEJDŹ DALEJ"/>
      </View>
    );
  }
}


function getFormattedTime(mins, secs) {
      const minutes = (mins < 10) ? `0${mins}` : mins;
      const seconds = (secs < 10) ? `0${secs}` : secs;
			return `${minutes}:${seconds}`;
}


export default Step;
