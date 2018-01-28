import React from 'react'
import {View, Text, TextInput, KeyboardAvoidingView, Platform} from 'react-native'
import type {ContactType} from '../types'

type Props = {
  navigation: {state: {params: {contact: ContactType}}},
}

const keyboardVerticalOffset = Platform.OS === 'ios' ? 70 : 75

export default class ContactDetailView extends React.PureComponent<Props> {
  static navigationOptions = ({navigation}: any) => {
    const contact = navigation.state.params.contact
    return {
      title: contact.name,
    }
  }

  render() {
    return (
      <View style={{flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end'}}>
          <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={keyboardVerticalOffset}>
          <TextInput
    //{this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable = {true}
            //maxLength = {1000}
            maxHeight = {100}
            multiline = {true}
            padding = {5}
            margin = {5}
            underlineColorAndroid ='transparent'
            placeholder="Type your question here"
            returnKeyType="go"
            style = {{
              fontSize: 15,
              borderStyle: 'solid',
              borderWidth: 3,
              borderColor: 'black',
              borderRadius: 10,
            }}/>
          </KeyboardAvoidingView>
      </View>)
  }
}
