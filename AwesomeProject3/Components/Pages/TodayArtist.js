/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Image,
  Dimensions,
  TouchableHighlight,
  Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TodayArtist extends Component {

  static navigationOptions = {
    title: "Шилдэг уран бүтээлч",
    headerRight: <Icon name="more-vert" style={{ marginRight: 10 }} size={24} color="#000000"/>,
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <View>

              <ImageBackground
                style={{height: 180, width: undefined, justifyContent: 'flex-end'}}
                source={require('../../assets/feed_images/lamar.jpeg')}
                resizeMode="cover"
                >

                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    padding: 15
                  }}>

                  <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>Kendrick Lamar</Text>

                  <View style={{backgroundColor: '#ea494e', marginLeft: 'auto', paddingTop: 5, paddingBottom: 5, paddingLeft: 8, paddingRight: 8, borderRadius: 15}}>

                    <Text style={{fontSize: 13, color: 'white'}}>#Hip hop & Rap</Text>

                  </View>

                </View>

              </ImageBackground>

              <View style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  padding: 15
                }}>

                <Text style={{fontSize: 15, color: 'gray'}}>14 Дуу</Text>

                <View style={{flexDirection: 'row', marginLeft: 'auto', alignItems: 'center',}}>

                  <View style={{flexDirection: 'row', alignItems: 'center',}}>
                    <Icon size={18} name="favorite" color="gray"/>
                    <Text style={{fontSize: 15, color: 'gray', marginLeft: 8}}>200</Text>
                  </View>

                  <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
                    <Icon size={18} name="remove-red-eye" color="gray"/>
                    <Text style={{fontSize: 15, color: 'gray', marginLeft: 8}}>116K</Text>
                  </View>

                </View>
              </View>

              <View style={{backgroundColor: '#eeeeee', height: 1}} />

            </View>


          }
          data={[
            {key: 'BLOOD'},
            {key: 'DNA'},
            {key: 'YAH'},
            {key: 'ELEMENT'},
            {key: 'FEEL'},
            {key: 'LOYALTY ft. Rihanna'},
            {key: 'PRIDE'},
            {key: 'HUMBLE'},
            {key: 'LUST'},
            {key: 'LOVE ft Zacari'},
            {key: 'XXX ft U2'},
            {key: 'FEAR'},
            {key: 'GOD'},
            {key: 'DUCKWORTH'},
          ]}
          renderItem={({item}) =>

          <TouchableHighlight underlayColor="#eeeeee"  onPress={() => Alert.alert(
              'Alert Title',
              'alertMessage',
              [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                {text: 'OK', onPress: this.onDeleteBTN},
              ],
              { cancelable: false }
            )}>
            <View style={{
                flexDirection: 'column',
              }}>

              <View style={{alignItems: 'center', width: undefined, flexDirection: 'row', paddingRight: 15, paddingLeft: 15, paddingTop: 13, paddingBottom: 13, justifyContent: 'flex-start'}}>

                <Image style={{height: 55, width: 55}}
                  source={require('../../assets/feed_images/lamar.jpeg')}
                  resizeMode="cover" />

                <View style={{flexDirection: 'column', marginLeft: 15, alignItems: 'stretch', flex: 1,}}>
                  <Text style={styles.item3}>Kendrick Lamar</Text>

                  <View style={{
                      alignItems: 'center',
                      marginTop: 5,
                      flexDirection: 'row',
                      width: undefined,
                    }}>

                    <Text style={styles.items}>{item.key}</Text>

                    <Text style={{fontSize: 14, color: 'gray', marginLeft: 'auto',}}>4:30</Text>

                  </View>
                </View>
              </View>
              <View style={{backgroundColor: '#eeeeee', height: 1}} />
            </View>
          </TouchableHighlight>

        }
        />
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  items: {

    fontSize: 15,
    color: 'black'
  },

  item3: {

    fontSize: 12,
    color: 'gray'
  },

  item2: {
    padding: 10,
    height: 150,
  },
});
