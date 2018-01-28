import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RegimentsList} from './list'
import * as defaultData from '../../../../docs/regiments.json'
import type {RegimentType} from './types'

type State = {
  regiments: Array<RegimentType>,
}

export default class RegimentsScreen extends React.Component<State> {
  static navigationOptions = {
    title: "Regiments",
    headerRight: <Button title="+" onPress={() => {}}/>,
    tabBarLabel: 'Regiments',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-menu' : 'ios-menu-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };

  state = {
    regiments: defaultData.data,
  }

  componentDidMount() {
    // console.log(this.state.regiments)
  }

  render() {
    return (
      <View style={styles.container}>
        <RegimentsList
          data={ this.state.regiments }
          navigation={this.props.navigation}
        >
        </RegimentsList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
})
