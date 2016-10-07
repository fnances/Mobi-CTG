import { View, Text, StyleSheet, Image } from "react-native";
import React, { Component } from "react";
import exponent from "exponent";
import { Button, Container, Icon } from "react-native-elements";
import videos from "../../config/videos.js";
import content from "../../config/content.js";
import { FontAwesome, Ionicons, Entypo } from "@exponent/vector-icons"

const { scenesContent } = content;

const { Video } = exponent.Components;

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
            style={styles.icon}
            name="emoji-sad"
            onPress={() => this.feedback("sad")}
            />
          <Entypo
            style={styles.icon}
            name="emoji-neutral"
            onPress={() => this.feedback("neutral")}
            />
          <Entypo
            style={styles.icon}
            name="emoji-happy"
            onPress={() => this.feedback("happy")}
            />
        </View>
    );
  }
  renderVideo (actualStep) {
    return (
      <Video
        style={styles.video}
        resizeMode="stretch"
        source={videos()[actualStep - 2]}
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

        {videoFinished && this.renderUserActions()}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#3F51B5",
  },
  header: {
    fontSize: 50,
    color: "#C5CAE9",
    alignSelf: "center",
    padding: 20
  },
  video: {
    flex: 3,
    alignSelf: "center",
    width: (90/100) * 1280,
    margin: 15,
  },
  actions: {
    flexDirection: "row",
    flex: 1,
    alignSelf: "center",
  },
  feedbackHeader: {
    alignSelf: "center"
  },
  description: {
    fontSize: 25,
    color: "#C5CAE9",
    alignSelf: "center",
    textAlign: "center"
  },
  nextStep: {
    flex: 1,
    backgroundColor: "#F50057",
    maxHeight: 60,
    margin: 15
  },
  icon: {
    fontSize: 70,
    color: "#000",
    padding: 10,
    color: "#C5CAE9",
  },
  timer: {
    flex: 1,
    flexDirection: "row"
  },
  timerTime: {
    fontSize: 40,
    color: "#C5CAE9",
    flex: 1,
    textAlign: "center",
    alignItems: "center"
  },
  timerStart: {
    backgroundColor: "lime",
    flex: 1,
    maxWidth: 150
  }
});

export default Step;
