import React from 'react'
import { View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Game from './screens/Game'
import Gallery from './screens/Gallery'
import Ranking from './screens/Ranking'

const App = () => {
  const Navigation = StackNavigator({
    Gallery: { screen: Gallery },
    Game: { screen: Game },
    Ranking: { screen: Ranking },
  })

  return (
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>

  )
}

export default App
