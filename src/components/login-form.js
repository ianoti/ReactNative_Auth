import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, CustomInput } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      signinError: ''
    };

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    this.setState({ signinError: '' });
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ signinError: 'Authentication failed' });
          });
      });
  }

  render() {
    const { errorTextStyle } = styles;
    return (
      <Card>
        <CardSection>
          <CustomInput
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            label='Email'
            placeholder='user@example.com'
          />
        </CardSection>
        <CardSection>
          <CustomInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label='password'
            placeholder='password'
            secureTextEntry
          />
        </CardSection>
        <CardSection>
          <Text style={errorTextStyle}>{this.state.signinError}</Text>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
