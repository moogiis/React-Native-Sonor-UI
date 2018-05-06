/* @flow */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
  TouchableHighlight,
  Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Page2 extends Component {

  static navigationOptions = {
    tabBarLabel: 'My Feed',
    tabBarIcon: ({focused}) => focused
      ? <Icon size={24} name="playlist-play" color="#ea494e"/>
      : <Icon size={24} name="playlist-play" color="#757575"/>
  }

  render() {
    return (<View style={styles.container}>

      <FlatList showsHorizontalScrollIndicator={false} data={[
          {
            key: 'BLOOD'
          }, {
            key: 'DNA'
          }, {
            key: 'YAH'
          }, {
            key: 'ELEMENT'
          }, {
            key: 'FEEL'
          }, {
            key: 'LOYALTY ft. Rihanna'
          }, {
            key: 'PRIDE'
          }, {
            key: 'HUMBLE'
          }, {
            key: 'LUST'
          }, {
            key: 'LOVE ft Zacari'
          }, {
            key: 'XXX ft U2'
          }, {
            key: 'FEAR'
          }, {
            key: 'GOD'
          }, {
            key: 'DUCKWORTH'
          }
        ]} renderItem={({item, index}) => {
          return (<View >
            <TouchableHighlight underlayColor="#eeeeee" onPress={() => Alert.alert('Alert Title', 'alertMessage', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed!')
                }, {
                  text: 'OK',
                  onPress: this.onDeleteBTN
                }
              ], {cancelable: false})}>

              <View style={styles.main}>

                <View style={styles.top}>

                  <Image style={styles.mainimgusr} source={require('../../assets/feed_images/lamar.jpeg')} resizeMode="cover"/>

                  <Text style={styles.username}>Kendrick Lamar</Text>

                  <Text style={styles.maintime}>13m</Text>

                </View>

                <ImageBackground borderRadius={10} style={styles.mainimg} source={require('../../assets/feed_images/humble.jpeg')} resizeMode="cover">

                  <View style={styles.imgcontainer}>

                    <Text style={styles.maintitle}>{item.key}</Text>

                    <View style={styles.genrecontainer}>

                      <View style={styles.genreborder}>

                        <Text style={styles.genretext}>#Hip hop</Text>

                      </View>

                    </View>

                  </View>

                </ImageBackground>

                <View style={styles.buttoncontainer2}>

                  <View style={{
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}>
                    <Icon size={17} name="play-arrow" color="gray"/>
                    <Text style={{
                        fontSize: 12,
                        color: 'gray',
                        marginLeft: 8
                      }}>200K</Text>
                  </View>

                  <View style={{
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}>

                    <Text style={{
                        fontSize: 12,
                        color: 'gray',
                        marginLeft: 8
                      }}>4:30</Text>
                  </View>

                </View>

                <View style={styles.linemain}/>

                <View style={styles.buttoncontainer}>

                  <TouchableHighlight style={{
                      alignItems: 'center', paddingRight: 15
                    }} underlayColor="#eeeeee" onPress={() => Alert.alert('Alert Title', 'Comment', [
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed!')
                      }, {
                        text: 'OK',
                        onPress: this.onDeleteBTN
                      }
                    ], {cancelable: false})}>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        height: 50
                      }}>
                      <Icon size={18} name="favorite" color="gray"/>
                      <Text style={{
                          fontSize: 14,
                          color: 'gray',
                          marginLeft: 8
                        }}>200K</Text>
                    </View>

                  </TouchableHighlight>

                  <TouchableHighlight style={{
                      alignItems: 'center', paddingRight: 15, paddingLeft: 15
                    }} underlayColor="#eeeeee" onPress={() => this.props.navigation.navigate('Comments')}>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        height: 50
                      }}>
                      <Icon size={18} name="comment" color="gray"/>
                      <Text style={{
                          fontSize: 14,
                          color: 'gray',
                          marginLeft: 8
                        }}>2K</Text>
                    </View>

                  </TouchableHighlight>

                  <TouchableHighlight style={{
                      alignItems: 'center', paddingLeft: 15
                    }} underlayColor="#eeeeee" onPress={() => Alert.alert('Alert Title', 'Repost', [
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed!')
                      }, {
                        text: 'OK',
                        onPress: this.onDeleteBTN
                      }
                    ], {cancelable: false})}>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        height: 50
                      }}>
                      <Icon size={18} name="repeat" color="gray"/>
                      <Text style={{
                          fontSize: 14,
                          color: 'gray',
                          marginLeft: 8
                        }}>20K</Text>
                    </View>

                  </TouchableHighlight>

                </View>

              </View>

            </TouchableHighlight>

          </View>);
        }} keyExtractor={(item, index) => index.toString()}/>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  main: {
    backgroundColor: 'white',
    paddingBottom: 0,
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 15,
    marginTop: 7,
    marginBottom: 7
  },
  top: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10
  },
  mainimgusr: {
    height: 36,
    width: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#ebebeb'
  },
  username: {
    fontSize: 14,
    color: 'black',
    marginLeft: 10
  },
  maintime: {
    fontSize: 13,
    color: 'gray',
    marginLeft: 'auto'
  },
  mainimg: {
    width: undefined,
    height: 170,
    justifyContent: 'flex-end'
  },
  imgcontainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 16,
    paddingBottom: 16
  },
  maintitle: {
    fontSize: 18,
    color: '#ea494e',
    fontWeight: 'bold',
    textShadowColor: '#eeeeee',
    textShadowOffset: {
      width: 1,
      height: 2
    },
    textShadowRadius: 4
  },
  buttoncontainer: {

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttoncontainer2: {
    height: 18,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  linemain: {
    height: 1,
    backgroundColor: '#ebebeb',
    marginTop: 8
  },
  genrecontainer: {
    marginLeft: 'auto',
    paddingLeft: 10
  },
  genreborder: {
    backgroundColor: '#ea494e',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 15
  },
  genretext: {
    fontSize: 13,
    color: 'white'
  }
});
