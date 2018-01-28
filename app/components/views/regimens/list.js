import React from 'react'
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import {RegimensRow, ListSeparator} from './row'
import type {TopLevelViewPropsType} from '../../types'
import type {RegimenType} from './types'

type Props = TopLevelViewPropsType & {
  data: Array<RegimenType>,
}

export class RegimensList extends React.PureComponent<Props> {

  _keyExtractor = (item) => item.name;

  _onPressItem = (regimen: RegimenType) => {
    // updater functions are preferred for transactional updates
    this.props.navigation.navigate('RegimenDetail', {regimen: regimen})
  };

  _renderItem = ({item}: {item: RegimenType}) => (
    <RegimensRow
      regimen={item}
      onPressItem={this._onPressItem}
      title={item.name}
    />
  );

  componentDidMount() {
    console.log(this.props)
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
