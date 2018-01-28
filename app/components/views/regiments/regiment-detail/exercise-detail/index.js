import React from 'react'
import {View, Text} from 'react-native'
import type {ExerciseType} from '../../types'

type Props = {
  navigation: {state: {params: {exercise: ExerciseType}}},
}

export default class RegimentDetailView extends React.PureComponent<Props> {
  static navigationOptions = ({navigation}: any) => {
    const exercise = navigation.state.params.exercise
    return {
      title: exercise.name,
    }
  }

  render() {
    const {exercise} = this.props.navigation.state.params
    return (
      <View>
        <Text>{exercise.description}</Text>
        <Text>{exercise.reps}</Text>
      </View>
    )
  }
}
