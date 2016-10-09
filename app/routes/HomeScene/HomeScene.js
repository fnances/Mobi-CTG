import { View, Text, StyleSheet } from "react-native";
import React, { Component } from "react";
import { Button } from "react-native-elements";


const description = `Witaj w aplikacji Mobi CTG przedstawiającej w jaki sposób podłączyć aparat KTG i wykonać
badania. Całość badania składać się będzie z 5 etapów, które szczegółowo będą
przedstawione na kolejnych ekranach aplikacji. Każda czynność będzie opisana oraz
przedstawiona na filmiku. Po wykonaniu każdej z czynności zostaniesz poproszona o ocenę
stopnia trudności danego etapu. Dzięki Twojej ocenie będziemy mogli sprawić, że
korzystanie z Mobi CTG stanie się jeszcze prostsze.`;



class HomeScene extends Component {
  constructor () {
    super();
  }
  goToSteps () {
    this.props.navigator.push({
      name: "Step",
      index: 0
    });
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>JAK KORZYSTAĆ Z APLIKACJI</Text>
        <Text style={styles.text}>{description} </Text>
        <Button buttonStyle={styles.button} onPress={() => this.goToSteps()} title={"ZACZYNAMY"}/>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor:
  },
  header: {
    alignSelf: "center",
    fontSize: 50,
    color: "#C5CAE9"
  },
  text: {
    fontSize: 25,
    alignSelf:"center",
    color: "#C5CAE9",
    textAlign: "center"
  },
  button: {
    backgroundColor:,

  }
});

export default HomeScene;
 // "#F50057""#3F51B5"
