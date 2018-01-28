import React from 'react'
import {View, StyleSheet} from 'react-native'
import type {RegimentType} from '../types'
import {ExercisesList} from './list'

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

  componentDidMount() {
    console.log("DEBUG")
    console.log(this.props)
  }

  render() {
    return (
      <View style={styles.container}>
        <ExercisesList
          data={ this.props.navigation.state.params.regiment.exercises }
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
