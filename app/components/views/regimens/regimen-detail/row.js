import React from 'react'
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import type {ExerciseType} from '../types'
import * as c from '../../../colors'
import {CheckBox} from 'react-native-elements'
type Props = {
  exercise: ExerciseType,
}

type State = {
  isCompleted: boolean,
}

export class ExercisesRow extends React.PureComponent<Props, State> {
  _onPress = () => {
    this.props.onPressItem(this.props.exercise);
  };

  state = {
    isCompleted: this.props.exercise.completed,
  }

  onPress = () => {
    if (this.state.isCompleted) {
      this.setState({isCompleted: false})
    } else {
      this.setState({isCompleted: true})
    }

  }

  render() {
    const {exercise} = this.props
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.container}>
          <Text style={styles.title}>
            {this.props.title}
          </Text>
          <View style={styles.rightColumn}>
            <CheckBox
              checked={this.state.isCompleted}
              checkedColor='green'
              containerStyle={styles.checkboxContainer}
              iconType='ionicon'
              checkedIcon='ios-checkbox'
              uncheckedIcon='ios-checkbox-outline'
              uncheckedColor='black'
              onPress={this.onPress}
              size={40}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    marginBottom: 0,
    justifyContent: 'flex-start',
    backgroundColor: c.iceberg,
    borderRadius: 3,
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 30,
    padding: 20,
  },
  subtitle: {
    paddingTop: 5,
    fontSize: 15,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  rightColumn: {
    flex: 1,
    alignItems: 'flex-end',
  },
})

export function ListSeparator() {
  return (<View style={styles.separator} />)
}
