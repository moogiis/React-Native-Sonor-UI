/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import HomeScreen from './Components/HomeScreen'
import { DrawerNavigator, StackNavigator } from 'react-navigation'

export default class DrawerNavigator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Im the MyComponent component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
