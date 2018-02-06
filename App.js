import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from './reducers'

import Home from './screens/Home';
import Ranking from './screens/Ranking';

export default class App extends React.Component {
  render() {
    const Navigation = StackNavigator({
        home: { screen: Home },
        Ranking: { screen: Ranking },
    });

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
