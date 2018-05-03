/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Page2 extends Component {

  static navigationOptions = {
    tabBarLabel: 'My Feed',
    tabBarIcon: ({ focused }) =>
    focused ? <Icon size={24} name="playlist-play" color="#ea494e"/> : <Icon size={24} name="playlist-play" color="black" color="#757575"/>
}

render() {
  return (
    <View style={styles.container}>
      <Text>I'm the MyComponent component</Text>
      <ImageBackground source={require('../../assets/feed_images/lamar.jpeg')} style={styles.backgroundImage}>
        <View style={styles.overlay}/>
      </ImageBackground>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: 400,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'red',
    opacity: 0.3
  }
});
