import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import { styles } from './styles';

export class CounterControl extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.marginBox}>
        <Button transparent onPress={this.props.clicked}>
          <Text>{this.props.label}</Text>
        </Button>
      </View>
    );
  }

}
