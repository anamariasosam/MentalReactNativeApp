import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import tiles from '../store/tiles'

import Board from '../components/Board'

const styles = StyleSheet.create({
  game: {
    flex: 1,
    backgroundColor: '#FDFFFC',
  },
})

class Game extends Component {
  static navigationOptions = {
    title: 'Mental',
    headerLeft: null,
  }

  constructor(props) {
    super(props)

    const { gallery, tilesQuantity } = this.props.navigation.state.params

    this.state = {
      tiles: tiles(gallery, tilesQuantity),
      isHard: tilesQuantity === 15,
    }
  }

  render() {
    return (
      <ScrollView style={styles.game}>
        <Board tiles={this.state.tiles} isHard={this.state.isHard}/>
      </ScrollView>
    )
  }
}

Game.propTypes = {
  navigation: PropTypes.any,
}

export default Game
