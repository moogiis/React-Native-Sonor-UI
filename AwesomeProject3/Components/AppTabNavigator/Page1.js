/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';


const data = [
  {
    imageUrl: require('../../assets/feed_images/z1.jpg'),
    title: "Dari Ya Alby Dari Ya Alby"
  },
  {
    imageUrl: require('../../assets/feed_images/z1.jpg'),
    title: "Dari Ya Alby Dari Ya Alby"
  },
  {
    imageUrl: require('../../assets/feed_images/z1.jpg'),
    title: "Dari Ya Alby Dari Ya Alby"
  },
  {
    imageUrl: require('../../assets/feed_images/z1.jpg'),
    title: "Dari Ya Alby Dari Ya Alby"
  },
];

const data2 = [
  {
    colorBack: "#F44336"
  },
  {
    colorBack: "#F44336"
  },
  {
    colorBack: "#F44336"
  },
  {
    colorBack: "#F44336"
  },
];

const colors= [
  '#F44336','#E91E63','#9C27B0','#673AB7','#3F51B5', '#2196F3',
  '#009688','#FFEB3B','#FF5722','#FF5722'
]

export default class Page1 extends Component {

  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) =>
    focused ? <Icon size={24} name="home" color="#ea494e"/> : <Icon size={24} name="home" color="black" color="#757575"/>

}

constructor(props) {
  super(props);
  this.state = {
    data: data
  };
}


render() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{backgroundColor: 'white', padding: 18, marginTop: 10}} >

          <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold', marginBottom: 15}}>Шилдэг уран бүтээлч</Text>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('TodayArtist')} underlayColor="white">
            <ImageBackground
              style={{height: 150, width: undefined, justifyContent: 'flex-end'}}
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

                  <Text style={{fontSize: 13, color: 'white'}}>50 Дуу</Text>

                </View>

              </View>

            </ImageBackground>
          </TouchableHighlight>

        </View>

        <View style={{backgroundColor: 'white', marginTop: 10}} >

          <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold', marginLeft: 18, marginRight: 18,  marginBottom: 10, marginTop: 18}}>Шилдэг 50</Text>

          <Text style={{fontSize: 13, color: 'gray', marginLeft: 18, marginRight: 18,  marginBottom: 15}}>Энэ долоон хоногт их тоглогдсон дуунууд</Text>

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={this.state.data}
            renderItem={({ item: rowData }) => {
              return (
                <View
                  style={{ padding: 0, width: 140, marginLeft: 18, marginRight: 8,  marginBottom: 18}}
                  >

                  <Image
                    style={{height: 140, width: undefined}}
                    source={require('../../assets/feed_images/z1.jpg')}
                    resizeMode="cover"
                    />

                  <Text style={{ marginTop: 10, fontSize: 15, color: 'black'}} numberOfLines={1}>
                    {rowData.title}
                  </Text>

                  <Text style={{ marginTop: 5, fontSize: 13, color: 'gray'}}>
                    Hamza Namira
                  </Text>
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
            />

        </View>

        <View style={{backgroundColor: 'white', marginTop: 10, marginBottom: 10}} >

          <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold', marginLeft: 18, marginRight: 18,  marginBottom: 15, marginTop: 18}}>Санал болгох дууны төрөл</Text>

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={[
              {key: 'Classical'},
              {key: 'Jazz & Blues'},
              {key: 'Country'},
              {key: 'Disco'},
              {key: 'Electro'},
              {key: 'Rock'},
              {key: 'R&B Soul'},
              {key: 'Reggae'},
              {key: 'Trap'},
            ]}
            renderItem={({ item ,index}) => {
              return (
                <View
                  style={[styles.item,{backgroundColor:colors[index%colors.length]}]}
                  >
                  <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>{item.key}</Text>
                </View>
              );
            }}

            />

        </View>

      </View>
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 0, width: 140, height: 90 , marginLeft: 18, marginRight: 8,  marginBottom: 18, justifyContent: 'center',
    alignItems: 'center', borderRadius: 10
  },
});
