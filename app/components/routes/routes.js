import React, { Component } from 'react';
import { styles } from './styles';
import { Scene, Router } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';

import HomeContainer from 'components/home';
import SearchContainer from 'components/search';
import CounterContainer from 'components/counter';
import SessionContainer from 'components/auth/LoginForm';
import SignupContainer from 'components/auth/SignupForm';
import TodolistContainer from 'components/todolist';

import configureStore from 'store';

const store = configureStore();
const RouterRedux = connect()(Router);

export default class Routes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouterRedux navigationBarStyle={styles.navBar} tintColor="#ffffff" titleStyle={styles.barButtonTextStyle}>
          <Scene key="root">
            <Scene key="login" component={SessionContainer} title="Login" initial={true} />
            <Scene key="signup" component={SignupContainer} title="Signup" />
            <Scene key="home" component={HomeContainer} title="Home" />
            <Scene key="search" component={SearchContainer} title="Search" />
            <Scene key="counter" component={CounterContainer} title="Counter" />
            <Scene key="todolist" component={TodolistContainer} title="To-Do List" />
          </Scene>
        </RouterRedux>
      </Provider>
    );
  }
}
