import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen  from './app/components/views/home/home';
import RegimentsScreen  from './app/components/views/regiments/regiments';
import MessengerScreen  from './app/components/views/messenger/messenger';
import TrackerScreen  from './app/components/views/tracker/tracker';
import RegimentDetailView from './app/components/views/regiments/detail'
import ContactDetailView from './app/components/views/messenger/detail'

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
}, {
  tabBarPosition: 'bottom',
});

const BaseNav = StackNavigator({
  Home: { screen: RootTabs},
  RegimentDetail: { screen: RegimentDetailView },
  ContactDetail: { screen: ContactDetailView },
})


export default BaseNav;
