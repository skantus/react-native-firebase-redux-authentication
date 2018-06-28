import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { styles } from './styles';

import { CounterControl } from './counterControl';
import { CounterOutput } from './counterOutput';

export class Counter extends React.Component {

  constructor(props) {
    super(props);
  }

  addNumber() {
    this.props.onAdd(5);
  }

  removeNumber() {
    this.props.onSubtraction(2);
  }

  render() {

    const { onIncrement, onDecrement, count } = this.props;
    return (
      <View style={styles.container}>

        <Button title="Add 5" onPress={this.addNumber.bind(this)}></Button>

        <CounterControl label="Increment" clicked={onIncrement} icon="ios-add"/>
        <CounterOutput value={count}/>
        <CounterControl label="Decrement" clicked={onDecrement} icon="ios-remove"/>

        <Button title="Remove 2" onPress={this.removeNumber.bind(this)}></Button>
      </View>
    );
  }
}
