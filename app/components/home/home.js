import React, { Component } from 'react';
import { View, Button, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { Actions } from 'react-native-router-flux';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator';

export class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  logout() {
    this.props.logout();
    setTimeout(() => {
      Actions.reset('login');
    }, 100);
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.marginBox}>
          <Button onPress={this.logout.bind(this)} title="Logout"></Button>
        </View>

        <View>
          <Text style={styles.title}>Welcome {this.props.user.email}</Text>
          <Button onPress={Actions.search} title="Go to Search"></Button>
          <Button onPress={Actions.todolist} title="Start To-Do List"></Button>
        </View>

        <View style={styles.marginBox}>
          <Icon name="logo-github" size={40}/>
          <Text>@skantus</Text>
        </View>

      </View>
    );
  }
}
