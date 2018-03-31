import React from 'react'
import { View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Game from './screens/Game'
import Gallery from './screens/Gallery'

const App = () => {
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

export default App
