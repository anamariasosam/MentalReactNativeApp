import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './store/store.dev'

import Home from './screens/Home'
import Ranking from './screens/Ranking'

export default class App extends React.Component {
  render() {
    const Navigation = StackNavigator({
      Home: { screen: Home },
      Ranking: { screen: Ranking },
    })


    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}
