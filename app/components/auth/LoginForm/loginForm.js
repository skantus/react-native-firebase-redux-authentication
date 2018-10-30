import React, { Component } from 'react';
import { View, Alert, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { BasicFormComponent } from '../BasicForm/basicForm';
import { LoadingIndicator } from 'components/loadingIndicator/loadingIndicator';
import { styles } from '../BasicForm/styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { loginUser, restoreSession } from 'actions/session/actions';

const FIREBASE_LOGO = require('icons/firebase.png');

class LoginFormComponent extends Component {
  componentDidMount() {
    this.props.restore();
  }

  componentDidUpdate(prevProps) {
    const { error, logged } = this.props;

    if (!prevProps.error && error) Alert.alert('error', error);

    if (logged) Actions.reset('home');
  }

  render() {
    const { login, loading } = this.props;
    const { scrollView, imageBox, image, loginBox } = styles;
    return (
      <KeyboardAwareScrollView style={scrollView}>
        <View style={imageBox}>
          <Image style={image} source={FIREBASE_LOGO} />
        </View>
        <View style={loginBox}>
          {loading ? (
            <LoadingIndicator color="#ffffff" size="large" />
          ) : (
            <BasicFormComponent buttonTitle={'login'} onButtonPress={login} />
          )}
        </View>
        <View>{loading ? null : <Button onPress={Actions.signup} title="Signup" />}</View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = ({ routes, sessionReducer: { restoring, loading, user, error, logged } }) => ({
  routes: routes,
  restoring: restoring,
  loading: loading,
  user: user,
  error: error,
  logged: logged
});

const mapDispatchToProps = {
  login: loginUser,
  restore: restoreSession
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormComponent);
