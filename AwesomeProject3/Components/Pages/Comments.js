/* @flow */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Image,
  Dimensions,
  TouchableHighlight,
  Alert,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Comments extends Component {
  static navigationOptions = {
    title: "Сэтгэгдэл",
    headerRight: <Icon name="more-vert" style={{
      marginRight: 10
    }} size={24} color="#000000"/>
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <View>
              <View style={styles.main}>

                <View style={styles.top}>

                  <Image style={styles.mainimgusr} source={require('../../assets/feed_images/lamar.jpeg')} resizeMode="cover"/>

                  <Text style={styles.username}>Kendrick Lamar</Text>

                  <Text style={styles.maintime}>13m</Text>

                </View>

                <ImageBackground borderRadius={10} style={styles.mainimg} source={require('../../assets/feed_images/lamar.jpeg')} resizeMode="cover">

                  <View style={styles.imgcontainer}>

                    <Text style={styles.maintitle}>Humble</Text>

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
                          alignItems: 'center'
                        }} underlayColor="#eeeeee" onPress={() => this.props.navigation.navigate('Comments')}>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            height: 55
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
                            alignItems: 'center'
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
                              height: 55
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
                              alignItems: 'center'
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
                                height: 55
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

                        <View style={styles.linemain2}/>

                      </View>
                    }
                    data={[
                      {key: 'Elizabeth Haris'},
                      {key: 'Elizabeth Haris'},
                      {key: 'Elizabeth Haris'},
                      {key: 'Elizabeth Haris'},
                      {key: 'Elizabeth Haris'},
                      {key: 'Elizabeth Haris'},
                      {key: 'Elizabeth Haris'},
                      {key: 'Elizabeth Haris'},
                      {key: 'Elizabeth Haris'},
                      {key: 'Elizabeth Haris'},
                      {key: 'Elizabeth Haris'},
                      {key: 'Elizabeth Haris'},
                      {key: 'Elizabeth Haris'},
                      {key: 'Elizabeth Haris'},
                    ]}
                    renderItem={({item}) =>

                    <View style={{
                        flexDirection: 'column',
                      }}>
                      <View>

                        <View style={{width: undefined, flexDirection: 'row', paddingRight: 15, paddingLeft: 15, paddingTop: 25, paddingBottom: 0, justifyContent: 'flex-start'}}>

                          <Image style={{height: 42, width: 42, borderRadius: 21, borderWidth: 2, borderColor: '#ebebeb'}}
                            source={require('../../assets/feed_images/lamar.jpeg')}
                            resizeMode="cover" />

                          <View style={{flexDirection: 'column', marginLeft: 15, alignItems: 'stretch', flex: 1,}}>

                            <View style={{
                                alignItems: 'center',

                                flexDirection: 'row',
                                width: undefined,
                              }}>

                              <Text style={styles.items}>{item.key}</Text>

                              <Text style={{fontSize: 13, color: 'gray', marginLeft: 'auto',}}>4:30 PM</Text>

                            </View>

                            <Text style={styles.item3}>This is the best song that I heard</Text>

                          </View>
                        </View>

                        <View style={styles.buttoncontainer3}>

                          <View style={{
                              flexDirection: 'row',
                              alignItems: 'center'
                            }}>
                            <Icon size={18} name="reply" color="gray"/>
                            <Text style={{
                                fontSize: 14,
                                color: 'gray',
                                marginLeft: 8
                              }}>Reply</Text>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                              }}>
                              <Icon size={18} name="favorite" color="gray"/>
                              <Text style={{
                                  fontSize: 14,
                                  color: 'gray',
                                  marginLeft: 8
                                }}>43</Text>
                              </View>

                            </View>

                          </View>

                          <View style={{backgroundColor: '#eeeeee', height: 1}} />
                        </View>
                      }
                      />

                    <View style={styles.linemain2}/>

                    <View style={{flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: 5,
                      paddingVertical: 3,}}>

                      <TextInput
                        multiline={true}
                        placeholder='Enter description...'
                        underlineColorAndroid={'transparent'}
                        style={{width: undefined, flex: 1,}}
                        />

                      <Text style={{
                          fontSize: 14,
                          color: 'gray',
                          marginLeft: 8
                        }}>43</Text>

                      </View>

                    </View>

                  );
                }
              }

              const styles = StyleSheet.create({
                container: {
                  flex: 1,
                  backgroundColor: 'white',
                  flexDirection: 'column',
                },
                items: {
                  fontSize: 14,
                  color: 'black',
                  fontWeight: 'bold'
                },

                item3: {
                  fontSize: 13,
                  color: 'gray',
                  marginTop: 7
                },

                item2: {
                  padding: 10,
                  height: 150
                },
                main: {
                  backgroundColor: 'white',
                  paddingBottom: 0,
                  paddingRight: 15,
                  paddingLeft: 15,
                  paddingTop: 15,
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
                buttoncontainer3: {
                  height: 60,
                  paddingRight: 15,
                  paddingLeft: 15,
                  paddingBottom: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                },
                linemain: {
                  height: 1,
                  backgroundColor: '#ebebeb',
                  marginTop: 8
                },
                linemain2: {
                  height: 1,
                  backgroundColor: '#ebebeb',

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
                },
              });
