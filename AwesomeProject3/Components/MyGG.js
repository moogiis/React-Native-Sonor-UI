/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MyGG extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the MyComponent componentGGG</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
