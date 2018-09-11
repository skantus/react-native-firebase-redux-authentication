import React, { Component } from 'react';
import { View, Alert, Image } from 'react-native';
import { connect } from 'react-redux';
import { BasicFormComponent } from '../BasicForm/basicForm';
import { LoadingIndicator } from 'components/loadingIndicator/loadingIndicator';
import { styles } from '../BasicForm/styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { signupUser } from 'actions/session/actions';

const FIREBASE_LOGO = require('icons/firebase.png');

class SignupFormComponent extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.registered) Actions.reset('home');
  }

  render() {
    const { signup, loading } = this.props;
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
            <BasicFormComponent buttonTitle={'signup'} onButtonPress={signup} />
          )}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = ({ routes, sessionReducer: { loading, error, registered } }) => ({
  routes: routes,
  loading: loading,
  error: error,
  registered: registered
});

const mapDispatchToProps = {
  signup: signupUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupFormComponent);
