import React from 'react'
import {View} from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Game from './screens/Game'
import Gallery from './screens/Gallery'

export default class App extends React.Component {
  render() {
    const Navigation = StackNavigator({
      Gallery: { screen: Gallery },
      Game: { screen: Game },
    })

    return (
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>

    )
  }
}
