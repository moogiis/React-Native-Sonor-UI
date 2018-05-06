/* @flow */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
  TouchableHighlight,
  Dimensions,
  Platform,
  Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Carousel from 'react-native-snap-carousel';

const data = [
  {
    imageUrl: require('../../assets/feed_images/z1.jpg'),
    title: "Dari Ya Alby Dari Ya Alby"
  }, {
    imageUrl: require('../../assets/feed_images/z1.jpg'),
    title: "Dari Ya Alby Dari Ya Alby"
  }, {
    imageUrl: require('../../assets/feed_images/z1.jpg'),
    title: "Dari Ya Alby Dari Ya Alby"
  }, {
    imageUrl: require('../../assets/feed_images/z1.jpg'),
    title: "Dari Ya Alby Dari Ya Alby"
  }
];

const data2 = [
  {
    colorBack: "#F44336"
  }, {
    colorBack: "#F44336"
  }, {
    colorBack: "#F44336"
  }, {
    colorBack: "#F44336"
  }
];

const colors = [
  '#F44336',
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#009688',
  '#FFEB3B',
  '#FF5722',
  '#FF5722'
]

export default class Page1 extends Component {

  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => focused
      ? <Icon size={24} name="home" color="#ea494e"/>
      : <Icon size={24} name="home" color="#757575"/>

  }

  /* constructor(props) {
super(props);
this.state = {
data: data
};
this.props = props;
this._carousel = {};
this.init();
} */

  constructor(props) {
    super();
    this.state = {
      errors: []
    }
    this.props = props;
    this._carousel = {};
    this.init();
  }

  init() {
    this.state = {
      videos: [
        {
          id: "WpIAc9by5iU",
          "1": require('../../assets/feed_images/z1.jpg'),
          title: "Kendrick Lamar"
        }, {
          id: "sNPnbI1arSE",
          "2": require('../../assets/feed_images/z1.jpg'),
          title: "Kendrick Lamar"
        }, {
          id: "VOgFZfRVaww",
          "3": require('../../assets/feed_images/z1.jpg'),
          title: "Kendrick Lamar"
        }, {
          id: "VOgFZfRVaww",
          "4": require('../../assets/feed_images/z1.jpg'),
          title: "Kendrick Lamar"
        }, {
          id: "VOgFZfRVaww",
          "5": require('../../assets/feed_images/z1.jpg'),
          title: "Kendrick Lamar"
        }

      ]
    };

    console.log("ThumbnailCarousel Props: ", this.props)
  }

  handleSnapToItem(index) {
    console.log("snapped to ", index)
  }

  _renderItem = ({item, index}) => {
    console.log("rendering,", index, item)
    return (<TouchableHighlight onPress={() => this.props.navigation.navigate('TodayArtist')} underlayColor="white">

      <ImageBackground borderRadius={10} style={{
          height: 150,
          width: 320,
          justifyContent: 'flex-end',
          marginBottom: 18
        }} source={require('../../assets/feed_images/lamar.jpeg')} resizeMode="cover">
        <View style={{
            alignItems: 'center',
            flexDirection: 'row',
            padding: 15
          }}>

          <Text style={{
              fontSize: 18,
              color: 'black',
              fontWeight: 'bold'
            }}>{item.title}</Text>

          <View style={{
              marginLeft: 'auto',
              paddingLeft: 10
            }}>

            <View style={{
                backgroundColor: '#ea494e',
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 8,
                paddingRight: 8,
                borderRadius: 15
              }}>

              <Text style={{
                  fontSize: 13,
                  color: 'white'
                }}>50 Дуу</Text>

            </View>

          </View>

        </View>

      </ImageBackground>

    </TouchableHighlight>);
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>

        <View style={{
            backgroundColor: 'white',
            marginTop: 10
          }}>

          <Text style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
              marginLeft: 18,
              marginRight: 18,
              marginBottom: 15,
              marginTop: 18
            }}>Шилдэг уран бүтээлч</Text>

          <Carousel ref={(c) => {
              this._carousel = c;
            }} data={this.state.videos} renderItem={this._renderItem.bind(this)} onSnapToItem={this.handleSnapToItem.bind(this)} sliderWidth={sliderWidth} itemWidth={320} layout={'default'} firstItem={1}/>

        </View>

        <View style={{
            backgroundColor: 'white',
            marginTop: 10
          }}>

          <Text style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
              marginLeft: 18,
              marginRight: 18,
              marginBottom: 10,
              marginTop: 18
            }}>Шилдэг 50</Text>

          <Text style={{
              fontSize: 13,
              color: 'gray',
              marginLeft: 18,
              marginRight: 18,
              marginBottom: 15
            }}>Энэ долоон хоногт их тоглогдсон дуунууд</Text>

          <FlatList showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={[
              {
                key: 'Dari Ya Alby Dari Ya Alby',
              }, {
                key: 'Dari Ya Alby Dari Ya Alby',
              }, {
                key: 'Dari Ya Alby Dari Ya Alby',
              }, {
                key: 'Dari Ya Alby Dari Ya Alby',
              }, {
                key: 'Dari Ya Alby Dari Ya Alby',
              }, {
                key: 'Dari Ya Alby Dari Ya Alby',
              }, {
                key: 'Dari Ya Alby Dari Ya Alby',
              }, {
                key: 'Dari Ya Alby Dari Ya Alby',
              }, {
                key: 'Dari Ya Alby Dari Ya Alby',
              }
            ]}
            renderItem={({item}) =>
              <View style={{
                  padding: 0,
                  width: 140,
                  marginLeft: 18,
                  marginRight: 8,
                  marginBottom: 18
                }}>
                <TouchableHighlight underlayColor="#eeeeee" onPress={() => Alert.alert('Alert Title', 'alertMessage', [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed!')
                    }, {
                      text: 'OK',
                      onPress: this.onDeleteBTN
                    }
                  ], {cancelable: false})}>

                  <View>

                    <Image style={{
                        height: 140,
                        width: undefined
                      }} source={require('../../assets/feed_images/z1.jpg')} resizeMode="cover"/>

                    <Text style={{
                        marginTop: 10,
                        fontSize: 15,
                        color: 'black'
                      }} numberOfLines={1}>
                      {item.key}
                    </Text>

                    <Text style={{
                        marginTop: 5,
                        fontSize: 13,
                        color: 'gray'
                      }}>
                      Hamza Namira
                    </Text>

                  </View>

                </TouchableHighlight>

              </View>
            } />

        </View>

        <View style={{
            backgroundColor: 'white',
            marginTop: 10,
            marginBottom: 10
          }}>

          <Text style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
              marginLeft: 18,
              marginRight: 18,
              marginBottom: 15,
              marginTop: 18
            }}>Санал болгох дууны төрөл</Text>

          <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={[
              {
                key: 'Classicalssss'
              }, {
                key: 'Jazz & Blues'
              }, {
                key: 'Country'
              }, {
                key: 'Disco'
              }, {
                key: 'Electro'
              }, {
                key: 'Rock'
              }, {
                key: 'R&B Soul'
              }, {
                key: 'Reggae'
              }, {
                key: 'Trap'
              }
            ]} renderItem={({item, index}) => {
              return (
              /*<View
                style={[styles.item,{backgroundColor:colors[index%colors.length]}]}
                >
                <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>{item.key}</Text>
                </View>*/

              <ImageBackground borderRadius={10} source={require('../../assets/feed_images/jazzon.png')} style={[styles.backgroundImage]}>

                <View style={{
                    backgroundColor: colors[index % colors.length],
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    borderRadius: 10,
                    opacity: 0.6
                  }}></View>

                <Text style={{
                    fontSize: 15,
                    color: 'white',
                    fontWeight: 'bold',
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: 55,
                    right: 0,
                    bottom: 0,
                    left: 15
                  }}>{item.key}</Text>

              </ImageBackground>);
            }} keyExtractor={(item, index) => index.toString()}/>

        </View>


      </View>
    </ScrollView>
  );
  }
}

const IS_IOS = Platform.OS === 'ios';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 0,
    width: 140,
    height: 90,
    marginLeft: 18,
    marginRight: 8,
    marginBottom: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  backgroundImage: {
    flex: 1,
    padding: 0,
    width: 140,
    height: 90,
    marginLeft: 18,
    marginRight: 8,
    marginBottom: 18,
    borderRadius: 10
  },
  overlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.6
  }
});
