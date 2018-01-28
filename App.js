import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen  from './app/components/home/home';
import RegimentsScreen  from './app/components/regiments/regiments';
import MessengerScreen  from './app/components/messenger/messenger';
import TrackerScreen  from './app/components/tracker/tracker';


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
});


export default RootTabs;
