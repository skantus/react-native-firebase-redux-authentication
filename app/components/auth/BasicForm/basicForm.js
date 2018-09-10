import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export class BasicFormComponent extends Component {
  state = { email: '', password: '' };

  handleEmailChange = email => this.setState({ email });

  handlePasswordChange = password => this.setState({ password });

  handleButtonPress = () => {
    const { email, password } = this.state;
    this.props.onButtonPress(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { textInput, button, buttonTitle } = styles;
    return (
      <View>
        <TextInput
          style={textInput}
          placeholder="Email"
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={this.handleEmailChange}
          value={email}
          underlineColorAndroid={'transparent'}
        />

        <TextInput
          style={textInput}
          placeholder="Password"
          secureTextEntry={true}
          returnKeyType="done"
          onChangeText={this.handlePasswordChange}
          value={password}
          underlineColorAndroid={'transparent'}
        />

        <TouchableOpacity style={button} onPress={this.handleButtonPress}>
          <Text style={buttonTitle}>{this.props.buttonTitle}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
