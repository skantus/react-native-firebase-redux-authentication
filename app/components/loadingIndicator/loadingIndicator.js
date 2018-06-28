import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

export class LoadingIndicator extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.loadingContainer}>
        <ActivityIndicator style={styles.loadingIndicator}
                           size={this.props.size}
                           color={this.props.color}/>
      </View>
    );
  }
}
