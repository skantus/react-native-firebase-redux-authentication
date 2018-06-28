import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export class BasicFormComponent extends Component {

  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };

    this.handleEmailChange = (email) => {
      this.setState({ email: email });
    }

    this.handlePasswordChange = (password) => {
      this.setState({ password: password });
    }

    this.handleButtonPress = () => {
      this.props.onButtonPress(this.state.email, this.state.password);
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder='email'
          returnKeyType='next'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={this.handleEmailChange}
          value={email}
          underlineColorAndroid={'transparent'} />

        <TextInput
          style={styles.textInput}
          placeholder='password'
          secureTextEntry={true}
          returnKeyType='done'
          onChangeText={this.handlePasswordChange}
          value={password}
          underlineColorAndroid={'transparent'} />

        <TouchableOpacity style={styles.button} onPress={this.handleButtonPress}>
          <Text style={styles.buttonTitle}>{this.props.buttonTitle}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
