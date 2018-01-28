import React from 'react'
import {View, Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class TrackerScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Tracker',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-calendar' : 'ios-calendar-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tracker Screen</Text>
      </View>
    );
  }
}
