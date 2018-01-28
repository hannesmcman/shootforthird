import React from 'react'
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import {ExercisesRow, ListSeparator} from './row'
import type {TopLevelViewPropsType} from '../../types'
import type {ExerciseType} from '../types'

type Props = TopLevelViewPropsType & {
  data: Array<ExerciseType>,
}

export class ExercisesList extends React.PureComponent<Props> {

  _keyExtractor = (item) => item.name;

  _onPressItem = (exercise: ExerciseType) => {
    // updater functions are preferred for transactional updates
    this.props.navigation.navigate('ExerciseDetail', {exercise: exercise})
  };

  _renderItem = ({item}: {item: ExerciseType}) => (
    <ExercisesRow
      exercise={item}
      onPressItem={this._onPressItem}
      title={item.name}
    />
  );

  componentDidMount() {
    // console.log(this.props)
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        ItemSeparatorComponent={ListSeparator}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({

})
