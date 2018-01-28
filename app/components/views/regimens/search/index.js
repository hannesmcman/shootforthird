import React from 'react'
import { TouchableHighlight, Text, View, StyleSheet, FlatList } from 'react-native'
// import {AtoZListView} from 'react-native-atoz-listview'
import Search from 'react-native-search-box'
import * as defaultData from '../../../../../docs/regimens.json'
import {RegimensSearchList} from './list'
import * as c from '../../../colors'
import type {RegimenType} from '../types'
// import {RegimenSearchRow} from './row'

// type Props = {
//   allRegimens: Array<RegimenType>,
// }

type State = {
  results: Array<RegimenType>,
  allRegimens: Array<RegimenType>,
}

const rowHeight = 40;

export default class RegimenSearchView extends React.PureComponent<State> {

  static navigationOptions = {
    title: 'Regimen Search',
  }

  // props = {
  //   allRegimens: defaultData.data,
  // }

  state = {
    results: defaultData.data,
    allRegimens: defaultData.data,
  }

  componentDidMount() {
    console.log(this.state)
  }
  //
  // renderRow = (item, sectionId, index) => {
  //   return (
  //     <TouchableHighlight
  //       style={{
  //         height: rowHeight,
  //         justifyContent: 'center',
  //         alignItems: 'center'}}
  //     >
  //       <Text>{item.name}</Text>
  //     </TouchableHighlight>
  //   );
  // }
  //
  // // Important: You must return a Promise
  // beforeFocus = () => {
  //     return new Promise((resolve, reject) => {
  //         console.log('beforeFocus');
  //         resolve();
  //     });
  // }
  //
  // Important: You must return a Promise
  // onFocus = (text) => {
  //     return new Promise((resolve, reject) => {
  //         console.log('onFocus', text);
  //         resolve();
  //     });
  // }
  // onChangeText = (text) => {
  //   // console.log(text)
  //   let searchResults = this.state.allRegimens.filter(regimen => (
  //     regimen.name.includes(text)
  //   ))
  //   console.log(searchResults)
  //   this.setState({results: searchResults})
  // }
  //
  // // Important: You must return a Promise
  // afterFocus = () => {
  //     return new Promise((resolve, reject) => {
  //         console.log('afterFocus');
  //         resolve();
  //     });
  // }

  // _renderItem = ({item}: {item: RegimenType}) => (
  //   <RegimensSearchRow
  //     regimen={item}
  //     onPressItem={this._onPressItem}
  //     title={item.name}
  //   />
  // )

  render() {
    // inside your render function
    let {results} = this.state
    return (
      <View style={styles.container}>
        <Search
          backgroundColor={c.crayola}
          ref="search_box"
          onChangeText = {(text) => {this.onChangeText(text)}}

        />
        <View style={styles.container}>
          <RegimensSearchList
            data={ results }
            navigation={this.props.navigation}
          >
          </RegimensSearchList>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: c.platinum,
  }
})
