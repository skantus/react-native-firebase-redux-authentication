import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from './styles';

export class TodoListItems extends React.Component {
  renderItem = (text, i) => {
    const { onPressItem } = this.props;
    return (
      <TouchableOpacity style={styles.item} onPress={() => onPressItem(i)} key={i}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { list } = this.props;

    return <View>{list.map(this.renderItem)}</View>;
  }
}
