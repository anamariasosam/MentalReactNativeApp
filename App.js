import React from 'react'
import {View} from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Game from './screens/Game'
import Ranking from './screens/Ranking'

export default class App extends React.Component {
  render() {
    const Navigation = StackNavigator({
      Game: { screen: Game },
      Ranking: { screen: Ranking },
    })

    return (
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>

    )
  }
}
