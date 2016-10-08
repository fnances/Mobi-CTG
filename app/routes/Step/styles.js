import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#3F51B5",
  },
  header: {
    fontSize: 50,
    color: "#C5CAE9",
    alignSelf: "center",
    padding: 20
  },
  clicked: {
    color: "pink"
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
    padding: 15,
    fontSize: 20,
    color: "#ffffff"
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

export { styles };
