import React from 'react'
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import {RegimentsRow, ListSeparator} from './row'
import type {TopLevelViewPropsType} from '../../types'
import type {RegimentType} from './types'

type Props = TopLevelViewPropsType & {
  data: Array<RegimentType>,
}

export class RegimentsList extends React.PureComponent<Props> {

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (regiment: RegimentType) => {
    // updater functions are preferred for transactional updates
    this.props.navigation.navigate('RegimentDetail', {regiment: regiment})
  };

  _renderItem = ({item}: {item: RegimentType}) => (
    <RegimentsRow
      info={item}
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
