import React from 'react'
import {View} from 'react-native'
import type {RegimenType} from '../types'

type Props = {
  navigation: {state: {params: {regimen: RegimenType}}},
}

export default class RegimenDetailView extends React.PureComponent<Props> {
  static navigationOptions = ({navigation}: any) => {
    const regimen = navigation.state.params.regimen
    return {
      title: regimen.name,
    }
  }

  render() {
    return (<View></View>)
  }
}
