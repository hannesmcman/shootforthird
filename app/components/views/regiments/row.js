import React from 'react'
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import type {RegimentType} from './types'
import * as c from '../../colors'

type Props = {
  regiment: RegimentType,
}

export class RegimentsRow extends React.PureComponent<Props> {
  _onPress = () => {
    this.props.onPressItem(this.props.regiment);
  };

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const {regiment} = this.props
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.container}>
            <Text style={styles.title}>
              {regiment.name}
            </Text>
            <Text style={styles.subtitle}>
              {regiment.doctorAssigned ? regiment.doctor : null}
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
    padding: 6,
    justifyContent: 'flex-start',
    backgroundColor: c.mandarin,
    borderRadius: 3,
  },
  title: {
    fontSize: 30,
    color: 'white',
  },
  separator: {
    // height: 1,
    // backgroundColor: 'black',
  },
  subtitle: {
    paddingTop: 5,
    fontSize: 15,
    color: 'white',
  },
})

export function ListSeparator() {
  return (<View style={styles.separator} />)
}
