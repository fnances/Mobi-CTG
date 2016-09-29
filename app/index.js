import { View, Text, StyleSheet, Dimensions, Navigator } from "react-native";
import React, { Component } from "react";
import Exponent from "exponent";
import HomeScene from "./routes/HomeScene/";
import LoadingScene from "./routes/LoadingScreen/";
import Step from "./routes/Step/"
import Survey from "./routes/Survey/";
import { Button } from "react-native-elements";


class Main extends Component {
  constructor () {
    super();
    this.state = {
      assetsLoaded: false,
      step: 1
    };

    const { height, width } = Dimensions.get("window");
    styles.container.height = height;
    styles.container.width = width;

  }
  renderScene (route, navigator) {

    switch (route.name){
      case "HomeScene":
        return <HomeScene navigator={navigator}/>;
        break;
      case "Step":
        const { index } = route;
        return <Step
                index={index}
                navigator={navigator} />;
        break;

      case "Survey":
        const { steps } = route;
        return <Survey steps={steps} navigator={navigator}/>
        break;
    }
  }
  hide () {
    this.setState({ assetsLoaded: !this.state.assetsLoaded });
  }
  render () {
    // if (!this.state.assetsLoaded) return <LoadingScene hide={this.state.assetsLoaded}/>;
    const { scene } = this.state;
    return (
      <View style={styles.container} >

        <Navigator
          style={styles.container}
          initialRoute={{ name: "HomeScene"}}
          renderScene={this.renderScene}
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromLeft}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
  alignItems: "stretch",
  flex: 1
}
});

export default Main;


// {
//   age: 24,
//   pregnancyQuantity: "pierwsza",
//   KTG: "drugie",
//   stressLevel: "umiarkowany stres",
//   satisfactionLevel: "średni",
//   steps: [
//     {
//       step: "ETAP 3 ­ PRZYGOTOWANIE SPRZĘTU",
//       feedback: "happy"
//     },
//     {
//       step: "ETAP 4 - WYKONANIE badania",
//       feedback: "sad"
//     },
//     {
//       step: "ETAP 4 - WYKONANIE badania",
//       feedback: "neutral"
//     }
//   ]
// }
