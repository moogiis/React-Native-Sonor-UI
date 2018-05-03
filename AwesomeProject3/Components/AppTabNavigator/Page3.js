/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Sae } from 'react-native-textinput-effects';

import Carousel from 'react-native-snap-carousel';

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
        <Sae
            label={'Email Address'}

            iconClass={Icon}
            iconName={'lock-open'}
            iconColor={'white'}
          />
          <Carousel
            ref={ (c) => { this._carousel = c; } }
            data={this.state.videos}
            renderItem={this._renderItem.bind(this)}
            onSnapToItem={this.handleSnapToItem.bind(this)}
            sliderWidth={360}
            itemWidth={256}
            layout={'default'}
            firstItem={0}
          />
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
});
