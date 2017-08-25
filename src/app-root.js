import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/login-form';

class App extends Component {
  constructor() {
    super();
    this.state = {
        loggedIn: null
    };
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA7F9NFDkoMDYZ-xmoWofjStAkYLmZclVQ',
      authDomain: 'authreactnative-47feb.firebaseapp.com',
      databaseURL: 'https://authreactnative-47feb.firebaseio.com',
      projectId: 'authreactnative-47feb',
      storageBucket: 'authreactnative-47feb.appspot.com',
      messagingSenderId: '470863964266'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return < LoginForm />;
      default:
       return <CardSection><Spinner size='large' /></CardSection>;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
