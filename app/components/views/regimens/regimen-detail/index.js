import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import type {RegimenType} from '../types'
import {ExercisesList} from './list'
import * as c from '../../../colors'

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

  componentDidMount() {

  }

  render() {
    let {regimen} = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          {regimen.description}
        </Text>
        <ExercisesList
          data={ this.props.navigation.state.params.regimen.exercises }
          navigation={this.props.navigation}
        >
        </ExercisesList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: c.platinum,
  },
  description: {
    textAlign: 'center',
    fontSize: 20,
    padding: 30,
  }
})
