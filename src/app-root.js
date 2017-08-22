import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/login-form';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA7F9NFDkoMDYZ-xmoWofjStAkYLmZclVQ',
      authDomain: 'authreactnative-47feb.firebaseapp.com',
      databaseURL: 'https://authreactnative-47feb.firebaseio.com',
      projectId: 'authreactnative-47feb',
      storageBucket: 'authreactnative-47feb.appspot.com',
      messagingSenderId: '470863964266'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
