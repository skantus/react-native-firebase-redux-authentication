import React, { Component } from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";
import { styles } from "./styles";

export class CounterControl extends React.Component {
  render() {
    const { clicked, label } = this.props;
    return (
      <View style={styles.marginBox}>
        <Button transparent onPress={clicked}>
          <Text>{label}</Text>
        </Button>
      </View>
    );
  }
}
