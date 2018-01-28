import React from 'react'
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import {ContactRow, ListSeparator} from './row'
import type {TopLevelViewPropsType} from '../../types'
import type {ContactType} from './types'

type Props = TopLevelViewPropsType & {
  data: Array<ContactType>,
}

export class ContactList extends React.PureComponent<Props> {

  _keyExtractor = (item) => item.name;

  _onPressItem = (contact: ContactType) => {
    // updater functions are preferred for transactional updates
    this.props.navigation.navigate('ContactDetail', {contact: contact})
  };

  _renderItem = ({item}: {item: ContactType}) => (
    <ContactRow
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
