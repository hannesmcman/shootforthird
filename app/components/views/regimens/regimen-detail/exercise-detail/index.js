import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import type {ExerciseType} from '../../types'
import * as c from '../../../../colors'

type Props = {
  navigation: {state: {params: {exercise: ExerciseType}}},
}

export default class RegimenDetailView extends React.PureComponent<Props> {
  static navigationOptions = ({navigation}: any) => {
    const exercise = navigation.state.params.exercise
    return {
      title: exercise.name,
    }
  }

  render() {
    const {exercise} = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        {exercise.reps ? (
          <Text style={styles.reps}>
            {exercise.reps} Reps
          </Text>
        ): null}

        <Text style={styles.description}>{exercise.description}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: c.platinum,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  description: {
    fontSize: 20,
  },
  reps: {
    fontSize: 50,
  },
})
