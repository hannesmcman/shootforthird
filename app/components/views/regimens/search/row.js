import React from 'react'
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import type {RegimenType} from './types'
import * as c from '../../../colors'

type Props = {
  regimen: RegimenType,
}


export class RegimensSearchRow extends React.PureComponent<Props> {
  _onPress = () => {
    this.props.onPressItem(this.props.regimen);
  };

  render() {
    const {regimen} = this.props
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>
              {regimen.name}
            </Text>
            {regimen.doctorAssigned ? (
              <Text style={styles.subtitle}>
                {regimen.doctor}
              </Text>
            ): null}
            <Text style={styles.description}>
              {regimen.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 0,
    padding: 6,
    justifyContent: 'flex-start',
    backgroundColor: c.platinum,
    borderRadius: 3,
  },
  innerContainer: {
    // backgroundColor: c.seashell,
    // borderRadius: 2,
    // padding: 15,
  },
  title: {
    fontSize: 30,
    color: c.crayola,
  },
  separator: {
    // height: 1,
    // backgroundColor: c.coolGray,
  },
  subtitle: {
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    paddingTop: 5,
  }
})

export function ListSeparator() {
  return (<View style={styles.separator} />)
}
