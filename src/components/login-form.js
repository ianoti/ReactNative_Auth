import React, { Component } from 'react';
import { TextInput } from 'react-native';

import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };


    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(text) {
    console.log('I have modified', text.target.name);
    // this.setState({ emailInput: text });
  }


  render() {
    console.log('Woopeee', this.state);
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            style={{ height: 20, width: 200 }}
            placeholder="email input"
          />
        </CardSection>
        <CardSection>
          <TextInput
            data-name="passwordInput"
            style={{ height: 20, width: 200 }}
            placeholder="password input"
          />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
