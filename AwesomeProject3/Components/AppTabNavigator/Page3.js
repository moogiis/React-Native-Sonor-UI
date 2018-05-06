/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Sae } from 'react-native-textinput-effects';

import Carousel from 'react-native-snap-carousel';

import Modal from 'react-native-modalbox';

export default class Page3 extends Component {

  static navigationOptions = {
      tabBarLabel: 'My favorite',
      tabBarIcon: ({ focused }) =>
        focused ? <Icon size={24} name="favorite" color="#ea494e"/> : <Icon size={24} name="favorite" color="black" color="#757575"/>
      }

      constructor(props){
    super();
    this.state = {
      errors: []
    }
    this.props = props;
    this._carousel = {};
    this.init();
  }

  init(){
    this.state = {
      videos: [
        {
          id: "WpIAc9by5iU",
          thumbnail: require('../../assets/feed_images/z1.jpg'),
          title: "Led Zeppelin - Stairway To Heaven"
        }, {
          id: "sNPnbI1arSE",
          thumbnail: require('../../assets/feed_images/z1.jpg'),
          title: "Eminem - My Name Is"
        }, {
          id: "VOgFZfRVaww",
          thumbnail: require('../../assets/feed_images/z1.jpg'),
          title: ""
        }
      ]
    };

    console.log("ThumbnailCarousel Props: ", this.props)
  }

  handleSnapToItem(index){
    console.log("snapped to ", index)
  }

  _renderItem = ( {item, index} ) => {
    console.log("rendering,", index, item)
    return (
      <View>

<Image style={styles.container2} source={require('../../assets/feed_images/lamar.jpeg')} />
<Text>{item.title}</Text>
      </View>

    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Im the MyComponent component</Text>
        <Button onPress={() => this.refs.modal1.open()} style={styles.btn} title="Press Me"></Button>
          <Modal
            style={[styles.modal, styles.modal1]}
            ref={"modal1"}
            swipeToClose={this.state.swipeToClose}
            onClosed={this.onClose}
            onOpened={this.onOpen}
            onClosingState={this.onClosingState}>
              <Text style={styles.text}>Basic modal</Text>

          </Modal>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    width: 256,
  height: 144,
  },
  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
});
