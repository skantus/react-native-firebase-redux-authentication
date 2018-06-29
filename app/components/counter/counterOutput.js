import React, { Component } from "react";
import { View, Text } from "react-native";
import { H2 } from "native-base";
import { styles } from "./styles";

export class CounterOutput extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <View style={styles.marginBox}>
        <H2>{String(value)}</H2>
      </View>
    );
  }
}
