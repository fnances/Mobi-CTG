const styles = EStyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2979ff"
  },
  scrollableDescription: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "20%"
  },
  userActionsBar: {
    width: "100%",
    position: "absolute",
    maxHeight: 60,
    bottom: 0,
    backgroundColor: "#0091ea",
    flexDirection: "row",
    justifyContent: "space-around",
    left: 0
  },
  opacity: {
    opacity: 0,
    position: "absolute"
  },
  header: {
    fontSize: 25,

    color: "#EFFFE9",
    width: "100%",
    maxHeight: 50,
    position: "absolute",
    top: 0,
    left: 0,
    paddingLeft: 55
  },
  clicked: {
    color: "#01579b"
  },
  repeatButton: {
    width: "15%",
    height: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "nowrap"
  },
  video: {
    height: "90%",
    marginVertical: 25,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 10,
    borderColor: "#EFFFE9",
  },
  actions: {
    flexDirection: "row",
    flex: 1,
    alignSelf: "center",

  },
  feedbackHeader: {
    padding: 15,
    fontSize: 20,
    color: "#EFFFE9"
  },
  description: {
    fontSize: 20,
    textAlign: "justify",
    alignSelf: "center",
    color: "#fff",
    textAlign: "center"
  },
  nextStep: {
    flex: 1,
    backgroundColor: "#1de9b6",
    maxHeight: 60,
    maxWidth: "15%",
    margin: 10
  },
  icon: {
    fontSize: 70,
    color: "#EFFFE9"
  },
  timer: {
    flex: 1,
    flexDirection: "row"
  },
  timerTime: {
    fontSize: 40,
    color: "#EFFFE9",
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
