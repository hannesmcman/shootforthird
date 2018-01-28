import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen  from './app/components/views/home/home';
import RegimensScreen  from './app/components/views/regimens/regimens';
import MessengerScreen  from './app/components/views/messenger/messenger';
import TrackerScreen  from './app/components/views/tracker/tracker';
import RegimenDetailView from './app/components/views/regimens/regimen-detail'
import ExerciseDetailView from './app/components/views/regimens/regimen-detail/exercise-detail'
import ContactDetailView from './app/components/views/messenger/detail'
import RegimenSearchView from './app/components/views/regimens/search/'

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Regimens: {
    screen: RegimensScreen,
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
  RegimenDetail: { screen: RegimenDetailView },
  ExerciseDetail: { screen: ExerciseDetailView },
  ContactDetail: { screen: ContactDetailView },
  RegimenSearchView: { screen: RegimenSearchView },
})


export default BaseNav;
