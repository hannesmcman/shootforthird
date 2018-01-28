import React from 'react'
import {View, Text, Button} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RegimentsList} from './list'

export default class RegimentsScreen extends React.Component {
  static navigationOptions = {
    headerRight: <Button title="info" onPress={() => {}}/>,
    tabBarLabel: 'Regiments',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-menu' : 'ios-menu-outline'}
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
        <RegimentsList
          data={
            [
              {name: 'Sprained Ankle'},
              {name: 'Tendonitis'},
            ]
          }
          navigation={this.props.navigation}
        >
        </RegimentsList>
      </View>
    );
  }
}
