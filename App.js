import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen  from './app/components/views/home/home';
import RegimentsScreen  from './app/components/views/regiments/regiments';
import MessengerScreen  from './app/components/views/messenger/messenger';
import TrackerScreen  from './app/components/views/tracker/tracker';
import LoginScreen from './app/components/views/login/login';
import RegimentDetailView from './app/components/views/regiments/detail'


const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Regiments: {
    screen: RegimentsScreen,
  },
  Tracker: {
    screen: TrackerScreen,
  },
  Messenger: {
    screen: MessengerScreen,
  },
  Login: {
    screen: LoginScreen,
  },
}, {
  tabBarPosition: 'bottom',
});

const BaseNav = StackNavigator({
  Home: { screen: RootTabs},
  RegimentDetail: { screen: RegimentDetailView },
})


export default BaseNav;
