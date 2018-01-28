import React from 'react'
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import type {RegimenType} from './types'
import * as c from '../../colors'

type Props = {
  regimen: RegimenType,
}

export class RegimensRow extends React.PureComponent<Props> {
  _onPress = () => {
    this.props.onPressItem(this.props.regimen);
  };

  componentDidMount() {
    // console.log(this.props)
  }

  render() {
    const {regimen} = this.props
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.container}>
            <Text style={styles.title}>
              {regimen.name}
            </Text>
            <Text style={styles.subtitle}>
              {regimen.doctorAssigned ? regimen.doctor : null}
            </Text>
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
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: c.iceberg,
    borderRadius: 3,
  },
  title: {
    fontSize: 30,
  },
  separator: {
    // height: 1,
    // backgroundColor: 'black',
  },
  subtitle: {
    paddingTop: 5,
    fontSize: 15,
  },
})

export function ListSeparator() {
  return (<View style={styles.separator} />)
}
