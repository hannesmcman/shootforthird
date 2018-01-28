import React from 'react'
import {View, Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class MessengerScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Messenger',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-mail' : 'ios-mail-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Messenger Screen</Text>
      </View>
    );
  }
}
