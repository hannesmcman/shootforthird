import React from 'react'
import {View, Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class RegimentsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Regiments',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-menu' : 'ios-menu-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Regiments Screen</Text>
      </View>
    );
  }
}
