/* @flow */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  YellowBox,
  StatusBar,
  Image
} from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import Page1 from './AppTabNavigator/Page1'
import Page2 from './AppTabNavigator/Page2'
import Page3 from './AppTabNavigator/Page3'

import TodayArtist from './Pages/TodayArtist'
import Comments from './Pages/Comments'

import {NavigationComponent} from 'react-native-material-bottom-navigation'
import {TabNavigator, StackNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconBadge from 'react-native-icon-badge'

class MainPage extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (<View style={styles.container}>
      <StatusBar backgroundColor="#eeeeee" barStyle="dark-content"/>
      <Page1_stack/>
    </View>);
  }
}

const AppTabNavigator = TabNavigator({
  Page1: {
    screen: Page1
  },
  Page2: {
    screen: Page2
  },
  Page3: {
    screen: Page3
  }
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  backBehavior: 'none',
  animationEnabled: true,
  swipeEnabled: false,
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    bottomNavigationOptions: {
      labelColor: '#757575',
      rippleColor: '#000000',
      activeLabelColor: '#ea494e',
      tabs: {
        Page1: {
          barBackgroundColor: '#ffffff'
        },
        Page2: {
          barBackgroundColor: '#ffffff'
        },
        Page3: {
          barBackgroundColor: '#ffffff'
        }
      }
    }
  }
}, {

  backBehavior: 'none',
  tabBarOptions: {
    showLabel: false,
    showIcon: true
  }
})

const Page1_stack = StackNavigator({
  Root: {
    screen: AppTabNavigator,
    navigationOptions: {

      headerLeft: <Image source={require('../assets/sonor2.png')} style={{
          marginLeft: 20,
          height: 33,
          width: 33
        }}/>,

      title: "Сонор",

      headerTitleStyle: {
        color: '#ea494e'
      },

      headerRight: <Icon name="search" style={{
            marginRight: 10
          }} size={24} color="#000000"/>
    }
  },

  TodayArtist: {
    screen: TodayArtist
  },
  Comments: {
    screen: Comments
  },
})

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee'
  }
});
