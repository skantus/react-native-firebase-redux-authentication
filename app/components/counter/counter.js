import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { styles } from './styles';
import { CounterControl } from './counterControl';
import { CounterOutput } from './counterOutput';
import { Increment, Decrement, Add, Subtration } from '../../actions/counter/actions';

export class Counter extends React.Component {
  addNumber = () => this.props.onAdd(5);

  removeNumber = () => this.props.onSubtraction(2);

  render() {
    const { onIncrement, onDecrement, count } = this.props;
    return (
      <View style={styles.container}>
        <Button title="Add 5" onPress={this.addNumber} />

        <CounterControl label="Increment" clicked={onIncrement} icon="ios-add" />
        <CounterOutput value={count} />
        <CounterControl label="Decrement" clicked={onDecrement} icon="ios-remove" />

        <Button title="Remove 2" onPress={this.removeNumber} />
      </View>
    );
  }
}

const mapStateToProps = ({ routes, counterReducer }) => ({
  routes: routes,
  count: counterReducer.counter,
  value: counterReducer.value
});

const mapDispatchToProps = {
  onIncrement: Increment,
  onDecrement: Decrement,
  onAdd: Add,
  onSubtraction: Subtration
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
