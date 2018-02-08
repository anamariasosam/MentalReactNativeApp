import React from 'react'
import {View} from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Home from './screens/Home'
import Ranking from './screens/Ranking'

export default class App extends React.Component {
  render() {
    const Navigation = StackNavigator({
      Home: { screen: Home },
      Ranking: { screen: Ranking },
    })

    return (
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>

    )
  }
}
