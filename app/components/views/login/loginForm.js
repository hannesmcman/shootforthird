import React from 'react';
import {StyleSheet, View, StatusBar, TextInput, TouchableOpacity, Text} from 'react-native';
import {TopLevelViewPropsType} from '../types'
import {NavigationActions} from 'react-navigation'

type Props = TopLevelViewPropsType

export default class LoginForm extends React.PureComponent<Props> {

  onPress = () => {
    this._navigateTo('Home')
  }

  _navigateTo = (routeName: string) => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    })
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    return(
      <View style={styles.container}>
      <StatusBar
      barStyle="light-content"
      />
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="username"
          placeholderTextColor="rgba(255,255,255,1)"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}/>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,1)"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(input) => this.passwordInput = input}
          />

        <TouchableOpacity style={styles.buttonContainer} onPress={this.onPress}>
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 20
  },
  input: {
    borderRadius: 10,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom: 15,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    borderRadius: 10,
    backgroundColor: '#63666A',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
