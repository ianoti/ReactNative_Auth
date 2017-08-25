import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, CustomInput, Spinner } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      email: '',
      password: '',
      error: '',
      loading: false
    };

    this.onButtonPress = this.onButtonPress.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
  }

  onButtonPress() {
    this.setState({ error: '', loading: true });
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)  // handles success after successful registration
          .catch(this.onLoginFail);
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication failed', loading: false });
  }

  onLoginSuccess() {
    // will handle the case for successful Login
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
    return (
      <Button onPress={this.onButtonPress}>
        Login
      </Button>
    );
  }

  render() {
    const { errorTextStyle } = styles;
    return (
      <Card>
        <CardSection>
          <CustomInput
            onChangeText={email => this.setState({ email })}
            label='Email'
            placeholder='user@example.com'
          />
        </CardSection>
        <CardSection>
          <CustomInput
            onChangeText={password => this.setState({ password })}
            label='password'
            placeholder='password'
            secureTextEntry
          />
        </CardSection>
        <CardSection>
          <Text style={errorTextStyle}>{this.state.error}</Text>
        </CardSection>
        <CardSection>
          {this.renderButton()}
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

/*
To change set state of both fields using one helper method set up customInput like so
<CustomInput
  onChangeText={this.onTextChange.bind(this, 'email')}
  label='Email'
  placeholder='user@example.com'
/>
and the the helper method looks like so
onTextChange(keyId, text) {
  console.log('hello', text, keyId);
  if (keyId===email){
  this.setState({ email: text})
  }
  if (keyId===password){
  this.setState({ password: text})
  }

}

this can then be paired with a setState to each needed piece of state
*/
