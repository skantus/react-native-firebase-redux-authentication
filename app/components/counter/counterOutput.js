import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export class CounterOutput extends Component {
  render() {
    const { value } = this.props;
    return (
      <View style={styles.marginBox}>
        <Text>{String(value)}</Text>
      </View>
    );
  }
}
