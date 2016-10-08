import { View, Text, StyleSheet, Dimensions, Navigator } from "react-native";
import React, { Component } from "react";
import Exponent from "exponent";
import HomeScene from "./routes/HomeScene/";
import Step from "./routes/Step/"
import Survey from "./routes/Survey/";
import { Button } from "react-native-elements";
import EStyleSheet from "react-native-extended-stylesheet";

import Logo from "./components/Logo/logo";

class Main extends Component {
  constructor () {
    super();
    this.state = {
      assetsLoaded: false,
      step: 1
    };
    EStyleSheet.build();
    const { height, width } = Dimensions.get("window");
    styles.container.height = height;
    styles.container.width = width;

    setTimeout(() => this.setState({ assetsLoaded: true}), 1500);

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
  render () {
    if (!this.state.assetsLoaded) return <Logo />;

    const { scene } = this.state;
    return (
      <View style={styles.container} >

        <Navigator
          style={styles.container}
          initialRoute={{ name: "HomeScene"}}
          renderScene={this.renderScene}
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
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
