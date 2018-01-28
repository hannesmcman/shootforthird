import React from 'react'
import {View} from 'react-native'
import type {RegimentType} from '../types'

type Props = {
  navigation: {state: {params: {regiment: RegimentType}}},
}

export default class RegimentDetailView extends React.PureComponent<Props> {
  static navigationOptions = ({navigation}: any) => {
    const regiment = navigation.state.params.regiment
    return {
      title: regiment.name,
    }
  }

  render() {
    return (<View></View>)
  }
}
