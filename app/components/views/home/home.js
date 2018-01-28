import React from 'react'
import {View, Text, Alert, AppRegistry, Button, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProgressCircle from 'react-native-progress-circle'
import * as c from '../../colors'




export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    title: 'Home',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-home' : 'ios-home-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };

   updateState = () => {
     this.setState({ progress: this.state.progress + 5 })
   }

  state = {
      progress: 20
   }

  _onPressButton() {
    // Alert.alert('You tapped the button!')
    // this.setState = ({
    //   percentage: percentage + 1
    // });
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello User!</Text>
        <Text style={styles.normal}>Weekly Progress</Text>
        <ProgressCircle
            percent={this.state.progress}
            radius={100}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor={c.platinum}
          >
            <Text style={{ fontSize: 18 }}>{this.state.progress} %</Text>
        </ProgressCircle>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.updateState()}
            title="            "
          />
        </View>
        <View style={styles.boxes}>
          <View style={{width: 100, height: 100, backgroundColor: c.iceberg}}>
            <Text style={styles.box}>Physician</Text>
          </View>
          <View style={{width: 100, height: 100, backgroundColor: c.linen}}>
            <Text style={styles.box}>Time</Text>
          </View>
          <View style={{width: 100, height: 100, backgroundColor: c.iceberg}}>
            <Text style={styles.box}>Help</Text>
          </View>
        </View>
      </View>




    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 30,
   // justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: c.platinum,
  },
  boxes: {
   flex: 1,
   // justifyContent: 'center',
   flexDirection: 'row',
   justifyContent: 'space-between',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 36,
    textAlign: 'left'
  },
  normal: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  box: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    color: 'darkcyan'
  },
})
