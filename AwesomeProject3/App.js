/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import { StackNavigator, SwitchNavigator } from 'react-navigation'

import MainPage from './Components/MainPage'
import LoginPage from './Components/LoginPage'
import SignUpPage from './Components/SignUpPage'
import WelcomePage from './Components/WelcomePage'
import TodayArtist from './Components/Pages/TodayArtist'
import Page1 from './Components/AppTabNavigator/Page1'

import Icon from 'react-native-vector-icons/FontAwesome';

class App extends React.Component {

  componentDidMount(){
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

const AppStackNavigator = StackNavigator({
  WelcomePage: WelcomePage,
  LoginPage: LoginPage,
  SignUpPage: SignUpPage
})

const AppStack = StackNavigator({
  Main: MainPage,
});

export default SwitchNavigator(
  {
    AuthLoading: App,
    Auth: AppStackNavigator,
    App: AppStack
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
