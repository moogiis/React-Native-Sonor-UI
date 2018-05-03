/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Sae } from 'react-native-textinput-effects';

export default class Page3 extends Component {

  static navigationOptions = {
      tabBarLabel: 'My favorite',
      tabBarIcon: ({ focused }) =>
        focused ? <Icon size={24} name="favorite" color="#ea494e"/> : <Icon size={24} name="favorite" color="black" color="#757575"/>
      }

  render() {
    return (
      <View style={styles.container}>
        <Text>Im the MyComponent component</Text>
        <Sae
            label={'Email Address'}

            iconClass={Icon}
            iconName={'lock-open'}
            iconColor={'white'}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
