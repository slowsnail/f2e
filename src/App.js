import React from 'react'
import { observer, inject } from 'mobx-react'
import {
  StyleSheet,
  Platform,
  NavigatorIOS,
  TouchableHighlight,
  NativeModules,
} from 'react-native'

import { createStackNavigator } from 'react-navigation'

import Home from './view/Home'
import Search from './view/Search'
import My from './view/My'

const CalendarManager = NativeModules.CalendarManager

const date = new Date()

CalendarManager.addEvent('Birthday Party', {
  location: '4 Privet Drive, Surrey',
  time: date.getTime(),
  description: '...',
})

const RootStack = createStackNavigator(
  {
    Home,
    Search,
    My,
  },
  {
    initialRouteName: 'Home',
  },
)

@inject('shop')
@observer
class App extends React.Component {
  render() {
    return (
      <RootStack />
    )
  }
}

export default App
