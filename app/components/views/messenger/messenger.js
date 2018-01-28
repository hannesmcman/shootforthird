import React from 'react'
import {View, Text, Button} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ContactList} from './list'

export default class MessengerScreen extends React.Component {
  static navigationOptions = {
    headerRight: <Button title="Add Physician" onPress={() => {}}/>,
    tabBarLabel: 'Messenger',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-mail' : 'ios-mail-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ContactList
          data={
            [
              {name: 'Dr. Dan'},
              {name: 'Dr. Oct'},
            ]
          }
          navigation={this.props.navigation}
        >
        </ContactList>
      </View>
    );
  }
}
