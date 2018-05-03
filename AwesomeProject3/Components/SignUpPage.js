/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Sae,Jiro } from 'react-native-textinput-effects';
import Button from 'apsl-react-native-button'

import {
  SCLAlert,
  SCLAlertButton
} from 'react-native-scl-alert'

class SignUpPage extends Component {

  state = {
    show: false
  }

  handleOpen = () => {
    this.setState({ show: true })
  }

  handleClose = () => {
    this.setState({ show: false })
  }


  static navigationOptions = {

    title: "Бүртгүүлэх",

    headerTitleStyle: {
      width: '75%',
      color: '#ea494e',
      textAlign: 'center',
    },

  }

  render() {
    return (
      <View style={styles.container}>

        <StatusBar
          backgroundColor="#eeeeee"
          barStyle="dark-content"
          />

        <ScrollView style={styles.scroll_design}>
          <View style={{
              flex: 1,
              flexDirection: 'column',
              padding: 30,
              justifyContent: 'center',
            }}>

            <Sae
              label={'Хэрэглэгчийн нэр'}
              iconClass={Icon}
              labelStyle={{ color: '#ea494e' }}
              inputStyle={{ color: 'black' }}
              iconName={'person'}
              iconColor={'#ea494e'}
              // TextInput props
              autoCapitalize={'none'}
              autoCorrect={false}

              style={{ marginTop: 40}}
              />

            <Sae
              label={'Имэйл хаяг'}
              iconClass={Icon}
              labelStyle={{ color: '#ea494e' }}
              inputStyle={{ color: 'black' }}
              iconName={'email'}
              iconColor={'#ea494e'}
              // TextInput props
              autoCapitalize={'none'}
              autoCorrect={false}

              style={{ marginTop: 20}}
              />

            <Sae
              label={'Нууц үг'}
              iconClass={Icon}
              secureTextEntry={true}
              labelStyle={{ color: '#ea494e' }}
              inputStyle={{ color: 'black' }}
              iconName={'vpn-key'}
              iconColor={'#ea494e'}
              // TextInput props
              autoCapitalize={'none'}
              autoCorrect={false}

              style={{ marginTop: 20}}
              />

            <Sae
              label={'Нууц үгээ дахин оруулах'}
              iconClass={Icon}
              secureTextEntry={true}
              labelStyle={{ color: '#ea494e' }}
              inputStyle={{ color: 'black' }}
              iconName={'vpn-key'}
              iconColor={'#ea494e'}
              // TextInput props
              autoCapitalize={'none'}
              autoCorrect={false}

              style={{ marginTop: 20}}
              />

            <Button style={styles.buttonStyle8}
              textStyle={styles.textStyle8}
              onPress={this.handleOpen}>

              <Text style={{textAlign: 'center', fontFamily: 'Avenir', fontWeight: '500', color: '#ea494e'}}>
                Бүртгүүлэх
              </Text>

            </Button>

            <SCLAlert
              theme="success"
              show={this.state.show}
              title="Амжилттай"
              onRequestClose={() => null}
              subtitle="Та амжилттай бүртгүүллээ"
              >
              <SCLAlertButton theme="success" onPress={this.handleClose}>ЗА</SCLAlertButton>
            </SCLAlert>

          </View>

        </ScrollView>
      </View>
    );
  }
}

export default SignUpPage;

const styles = StyleSheet.create({
  scroll_design:{

    backgroundColor: 'white'
  },
  containerscroll: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  buttonStyle8: {
    backgroundColor: 'white',
    borderColor: '#ea494e',
    borderWidth: 2,
    borderRadius: 22,
    marginTop: 55
  },

  buttonStyle82: {
    backgroundColor: 'white',
    borderColor: 'white',
    marginTop: 40,
    marginRight: 40,
    marginLeft: 40,
  },
  textStyle8: {
    width: 200,
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    color: '#ea494e',
  },
  customViewStyle: {
    width: 120,
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
  }
});
