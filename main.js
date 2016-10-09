import Exponent from 'exponent';
import React from 'react';
import Main from "./app";
import * as firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "<your-api-key>",
//   authDomain: "<your-auth-domain>",
//   databaseURL: "<your-database-url>",
//   storageBucket: "<your-storage-bucket>"
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  render() {
    return (
      <Main />
    );
  }
}

Exponent.registerRootComponent(App);
