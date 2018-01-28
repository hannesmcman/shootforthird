import React from 'react'
import {View, StyleSheet} from 'react-native'
import type {RegimenType} from '../types'
import {ExercisesList} from './list'

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
    console.log("DEBUG")
    console.log(this.props)
  }

  render() {
    return (
      <View style={styles.container}>
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
  },
})
