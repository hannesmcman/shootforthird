import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RegimensList} from './list'
import * as defaultData from '../../../../docs/regimens.json'
import type {RegimenType} from './types'
import {Button} from 'react-native-elements'
import type {TopLevelViewPropsType} from '../types'

type Props = TopLevelViewPropsType

type State = {
  regimens: Array<RegimenType>,
}

export default class RegimensScreen extends React.PureComponent<Props, State> {
  static navigationOptions = ({navigation}: any) => {
    console.log(navigation)
    return {
      title: "Regimens",
      headerRight: (
        <Button
          iconRight={{name: 'search', type: 'ionicons', color: 'black', size: 30}}
          color='black'
          backgroundColor='transparent'
          onPress= {() => {navigation.navigate('RegimenSearchView')}} />
      ),
      tabBarLabel: 'Regimens',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-menu' : 'ios-menu-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  };

  state = {
    regimens: defaultData.data,
  }

  componentDidMount() {
    // console.log(this.state.regimens)
  }

  render() {
    return (
      <View style={styles.container}>
        <RegimensList
          data={ this.state.regimens }
          navigation={this.props.navigation}
        >
        </RegimensList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
