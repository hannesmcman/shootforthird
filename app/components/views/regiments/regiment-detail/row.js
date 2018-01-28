import React from 'react'
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import type {ExerciseType} from '../types'

type Props = {
  exercise: ExerciseType,
}

export class ExercisesRow extends React.PureComponent<Props> {
  _onPress = () => {
    this.props.onPressItem(this.props.exercise);
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.container}>
          <Text style={styles.title}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 25,
  },
  separator: {
    height: 1,
    backgroundColor: 'black',

  },
})

export function ListSeparator() {
  return (<View style={styles.separator} />)
}
