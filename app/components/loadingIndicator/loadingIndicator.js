import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

export class LoadingIndicator extends Component {
  render() {
    const { size, color } = this.props;
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator style={styles.loadingIndicator} size={size} color={color} />
      </View>
    );
  }
}
