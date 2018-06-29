import React, { Component } from "react";
import { View, Alert, Image } from "react-native";
import { BasicFormComponent } from "../BasicForm/basicForm";
import { LoadingIndicator } from "../../loadingIndicator/loadingIndicator";
import { styles } from "../BasicForm/styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Actions } from "react-native-router-flux";

const FIREBASE_LOGO = require("../../../../assets/icons/firebase.png");

export class SignupFormComponent extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.registered) Actions.reset("home");
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
            <BasicFormComponent buttonTitle={"signup"} onButtonPress={signup} />
          )}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
