import React, { Component } from "react";
import { View, Alert, Image, Button } from "react-native";
import { BasicFormComponent } from "../BasicForm/basicForm";
import { LoadingIndicator } from "../../loadingIndicator/loadingIndicator";
import { styles } from "../BasicForm/styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Actions } from "react-native-router-flux";

export class LoginFormComponent extends Component {
  componentDidMount() {
    this.props.restore();
  }

  componentDidUpdate(prevProps) {
    const { error, logged } = this.props;

    if (!prevProps.error && error) Alert.alert("error", error);

    if (logged) Actions.reset("home");
  }

  render() {
    const { login, loading } = this.props;
    const { scrollView, imageBox, image, loginBox } = styles;
    return (
      <KeyboardAwareScrollView style={scrollView}>
        <View style={imageBox}>
          <Image
            style={image}
            source={{
              uri:
                "https://lh3.googleusercontent.com/-whXBCDVxIto/Vz2Rsyz-UjI/AAAAAAAAiJc/UjvR-M2b9tY5SyKFkDY6Q_MbusEINRXkQ/w530-h530-n/Firebase_16-logo.png"
            }}
          />
        </View>
        <View style={loginBox}>
          {loading ? (
            <LoadingIndicator color="#ffffff" size="large" />
          ) : (
            <BasicFormComponent buttonTitle={"login"} onButtonPress={login} />
          )}
        </View>
        <View>
          {loading ? null : (
            <Button onPress={Actions.signup} title="Signup" color="white" />
          )}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
