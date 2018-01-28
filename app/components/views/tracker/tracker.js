import React from 'react'
import {View, Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Calendar, CalendarList } from 'react-native-calendars'; // 1.5.3


export default class TrackerScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Tracker',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-calendar' : 'ios-calendar-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };


  render() {
    return (
      <View style={{ flex: 1 }}>
        <CalendarList
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={false}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {console.log('selected day', day)}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {console.log('month changed', month)}}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={false}
          // Show week numbers to the left. Default = false
          showWeekNumbers={false}
          // Collection of dates that have to be marked. Default = {}
          markedDates={{
            //'2018-01-16': {selected: true, marked: true, dotColor: 'green'},
            '2018-01-04': {marked: true, dotColor: 'green'},
            '2018-01-05': {marked: true, dotColor: 'orange'},
            '2018-01-08': {marked: true, dotColor: 'green'},
            '2018-01-09': {marked: true, dotColor: 'orange'},
            '2018-01-10': {marked: true, dotColor: 'green'},
            '2018-01-12': {marked: true, dotColor: 'green'},
            '2018-01-14': {marked: true, dotColor: 'green'},
            '2018-01-15': {marked: true, dotColor: 'green'},
            '2018-01-16': {marked: true, dotColor: 'green'},
            '2018-01-18': {marked: true, dotColor: 'orange'},
            '2018-01-19': {marked: true, dotColor: 'green'},
            '2018-01-20': {marked: true, dotColor: 'green'},
            '2018-01-22': {marked: true, dotColor: 'orange'},
            '2018-01-23': {marked: true, dotColor: 'green'},
            '2018-01-24': {marked: true, dotColor: 'orange'},
            '2018-01-25': {marked: true, dotColor: 'green'},
          }}
        />  
      </View>
    );
  }
}