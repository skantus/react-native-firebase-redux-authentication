import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

export class CounterControl extends Component {
  render() {
    const { clicked, label } = this.props;
    return (
      <View style={styles.marginBox}>
        <Button title={label} onPress={clicked} />
      </View>
    );
  }
}
