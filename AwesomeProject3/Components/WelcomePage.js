/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ImageBackground
} from 'react-native';

import Button from 'apsl-react-native-button'


class WelcomePage extends Component {

  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#d0414d" barStyle="light-content"/>

        <ImageBackground source={require('../assets/sound2.png')} style={styles.backgroundImage}>

          <View style={styles.content}>

            <Image source={require('../assets/sonor.png')} style={styles.logo_image}></Image>

            <Text style={styles.logo}>Сонор</Text>

            <Text style={styles.logo2}>Хэрэглэгчид гадаадын уран бүтээлчдийн шинэ цомгуудыг олон улсад нээлтээ хийсэн даруйд нь сонсох боломжтой.</Text>

            <View style={styles.btns}>

              <View style={styles.buttonContainer}>
                <Button style={styles.buttonStyle72} textStyle={styles.textStyle62} onPress={() => this.props.navigation.navigate('SignUpPage')}>
                  Бүртгүүлэх
                </Button>
              </View>

              <View style={styles.buttonContainer}>
                <Button style={styles.buttonStyle7} textStyle={styles.textStyle6} onPress={() => this.props.navigation.navigate('LoginPage')}>
                  Нэвтрэх
                </Button>
              </View>

            </View>

          </View>

        </ImageBackground>
      </View>
    );
  }
}

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'flex-end'
  },
  content: {
    padding: 40,
    flexDirection: 'column'
  },
  logo: {
    color: 'white',
    fontSize: 40,
    marginTop: 25,
    fontWeight: 'bold'
  },
  logo2: {
    color: 'white',
    fontSize: 15,
    marginTop: 25
  },
  logo_image: {
    height: 60,
    width: 60
  },
  btns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  buttonContainer: {
    flex: 1,
    marginBottom: 10
  },
  btn1: {
    marginRight: 5,
    color: 'white'
  },
  btn2: {
    marginLeft: 5,
    backgroundColor: 'white',
    borderColor: '#333',
    borderWidth: 2
  },
  textStyle6: {
    color: 'white',
    fontFamily: 'Avenir'
  },
  buttonStyle7: {
    borderColor: 'white',
    backgroundColor: 'transparent',
    borderRadius: 0,
    borderWidth: 2,
    marginLeft: 10
  },
  textStyle62: {
    color: '#ea494e',
    fontFamily: 'Avenir'
  },
  buttonStyle72: {
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 0,
    marginRight: 10
  }
});
