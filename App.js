import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'

import Home from './screens/Home';
import Ranking from './screens/Ranking';

export default class App extends React.Component {
  render() {
    const Navigation = StackNavigator({
        home: { screen: Home },
        Ranking: { screen: Ranking },
    });

    return (
      <Provider store={createStore(reducers)}>
        <Navigation />
      </Provider>
    );
  }
}
