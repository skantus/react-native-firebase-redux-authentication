import React, { Component } from "react";
import { View, Button, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
import { Actions } from "react-native-router-flux";
import { LoadingIndicator } from "../loadingIndicator/loadingIndicator";

export class Home extends React.Component {
  logout = () => {
    this.props.logout();
    setTimeout(() => {
      Actions.reset("login");
    }, 100);
  };

  render() {
    const { container, marginBox, title } = styles;
    const {
      user: { email }
    } = this.props;
    return (
      <View style={container}>
        <View style={marginBox}>
          <Button onPress={this.logout} title="Logout" />
        </View>

        <View>
          <Text style={title}>User: {email}</Text>
          <Button onPress={Actions.search} title="Go to Search" />
          <Button onPress={Actions.todolist} title="Start To-Do List" />
        </View>

        <View style={marginBox}>
          <Icon name="logo-github" size={40} />
          <Text>@skantus</Text>
        </View>
      </View>
    );
  }
}
