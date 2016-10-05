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
      videoLoaded: false,
      actualTime: null
    };
    this.interval();
  }
  nextStep () {
    const { actualStep, steps, feedback } = this.state;
    if (actualStep + 1 < scenesContent.length) {
      this.setState({
        actualStep: actualStep + 1,
        steps: [...steps, { step: actualStep, feedback }],
        feedback: ""
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
    let counter = 0;
    setInterval(() => {
      timeToPass -= 1000;
      let minutes = Math.floor(timeToPass / 60);
      let	seconds = Math.floor(timeToPass % 60);

      this.setState({ actualTime: getFormattedTime(minutes, seconds) });
      this.renderTimer();
    }, 1000);
  }
  renderTimer () {
    return (
          <Text style={styles.timer}>
            {this.state.actualTime}
          </Text>

    );
  }
  render () {
    const { actualStep, videoLoaded } = this.state;
    const { stage, description, video = false, buttonImage = false, timer = false } = scenesContent[actualStep];

    return (
      <View style={styles.container} >
        <Text style={styles.header}> {stage}</Text>
        <Text style={styles.description}>{description}</Text>
        {video && !videoLoaded && <Text></Text>}

        {video && <Video style={styles.videoLoaded} resizeMode="stretch" source={videos()[actualStep - 2]} onLoad={() => this.onVideoLoad.bind(this)} />}

        <View style={styles.actions}>

        {timer && this.renderTimer()}

          <Entypo style={styles.icon}  name="emoji-sad"  onPress={this.feedback.bind(this, "sad")}/>
          <Entypo style={styles.icon}  name="emoji-neutral" onPress={this.feedback.bind(this, "neutral")}/>
          <Entypo style={styles.icon}  name="emoji-happy"   onPress={this.feedback.bind(this, "happy")}/>


        </View>
        <Button Button buttonStyle={styles.nextStep} onPress={this.nextStep.bind(this)} title="PRZEJDŹ DALEJ"/>
      </View>
    );
  }
}




function getFormattedTime(mins, seconds) {
			if (mins < 10) {
				var mins = "0" + mins;
			}
			if (seconds < 10) {
				var seconds = "0" + seconds;
			}
			return mins + ":" + seconds;
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
  videoLoaded: {
    flex: 2,
    alignSelf: "center",
    width: (90/100) * 1280,
    height: 280,
  },
  actions: {
    flexDirection: "row",
    flex: 1,
    alignSelf: "center",

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

  },
  icon: {
    fontSize: 40,
    color: "#000",
    padding: 10,
    color: "#C5CAE9",


  },
  timer: {
    fontSize: 40,
    flex: 1,
    color: "#C5CAE9",
    textAlign: "center"

  },

});

export default Step;
