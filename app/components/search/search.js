import React, { Component } from "react";
import { View, Button } from "react-native";
import { styles } from "./styles";
import { Actions } from "react-native-router-flux";

export class Search extends React.Component {
  render() {
    const { pop, counter } = Actions;
    return (
      <View style={styles.container}>
        <Button onPress={pop} title="< Back to Home" />
        <Button onPress={counter} title="Go to Counter >" />
      </View>
    );
  }
}
