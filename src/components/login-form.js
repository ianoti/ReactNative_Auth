import React, { Component } from 'react';

import { Button, Card, CardSection, CustomInput } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    console.log('Woopeee', this.state);
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
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
