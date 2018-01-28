import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, TextInput, TouchableOpacity, Text} from 'react-native';


export default class LoginForm extends Component {
  render() {
    return(
      <View style={styles.container}>
      <StatusBar
      barStyle="light-content"
      />
        <TextInput
          placeholder="username"
          placeholderTextColor="rgba(255,255,255,1)"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}/>
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,1)"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(input) => this.passwordInput = input}
          />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom: 15,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#63666A',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
