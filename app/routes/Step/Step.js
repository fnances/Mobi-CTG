import { View, Text, TouchableNativeFeedback, ScrollView } from "react-native";
import React, { Component } from "react";
import exponent from "exponent";
import { Button, Icon } from "react-native-elements";
import { Spinner } from "native-base";
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
      playAgain: false
    };
    this.video = null;

  }
  nextStep () {

    const { actualStep, steps, feedback } = this.state;

    if (!feedback) {
      alert("Oceń trudność przed przystąpieniem do następnego kroku.");
      return;
    }
    if (actualStep + 1 < scenesContent.length) {
      this.setState({
        actualStep: actualStep + 1,
        steps: [...steps, { step: actualStep, feedback }],
        feedback: "",
        videoFinished: false,
        videoLoaded: false,
        playAgain: false
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
    this.setState({ videoLoaded: true});
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

            <TouchableNativeFeedback
                onPress={() => this.setState({ videoFinished: false, playAgain: true })}>
              <View style={styles.repeatButton}>
                <Text> Oglądnij jeszcze raz.</Text>
              </View>
            </TouchableNativeFeedback>

            <Button buttonStyle={styles.nextStep} onPress={this.nextStep.bind(this)} title="PRZEJDŹ DALEJ"/>

        </View>
    );
  }
  renderVideo (actualStep) {
    const { videoFinished, playAgain, videoLoaded } = this.state
    if (playAgain) {
      this.video.node.seek(0);
    }

    return (
            <View style={styles.video}>
              {(videoLoaded) ? null : <Spinner color="pink" />}
              <Video
                ref={video => this.video = video}
                style={[styles.video, (videoLoaded) ? {} : styles.opacity ]}
                resizeMode="stretch"
                volume={1.0}
                source={videos()[actualStep + 1]}
                onEnd={() => this.setState({ videoFinished: true })}
                onLoad={() => this.setState({ videoLoaded: true })}
                />
            </View>
    );
  }
  render () {
    const { actualStep, videoFinished } = this.state;
    const { stage, description, video = false, buttonImage = false, timer = false } = scenesContent[actualStep];

    return (
      <View style={styles.container} >
          <Text style={styles.header}> {stage}</Text>

          <View style={styles.content}>
            <ScrollView contentContainerStyle={styles.scrollableDescription}>
              <Text ellipsizeMode="clip" style={styles.description}>{description}</Text>
            </ScrollView>

            {video && this.renderVideo(actualStep)}
          </View>

          <View style={styles.userActionsBar}>
          {this.renderUserActions()}
          {timer && videoFinished && this.renderTimer()}
          </View>

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
