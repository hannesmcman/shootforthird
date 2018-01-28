import React, {Component} from 'react'
import { StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native'
import LoginForm from './loginForm';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class LoginScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Login',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-key' : 'ios-key-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../images/logo.png')}/>

          <Text style={styles.title}>Welcome to MyPT</Text>
          <Text style={styles.description}>Connecting you to your doctor</Text>
        </View>
        <View style={styles.container}>
          <LoginForm />

        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E87722'
  },
  logoContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    height: 160,
    width: 160
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center'
  },
  description: {
    color: '#000',
    fontSize: 11,
    marginTop: 2,

    textAlign: 'center'
  }

});
