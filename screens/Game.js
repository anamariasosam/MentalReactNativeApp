import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import tiles from '../store/tiles'

import Board from '../components/Board'
import WinnerAlert from '../components/WinnerAlert'
import Status from '../components/Status'

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

  static convertMinsToHrsMins(seg) {
    let minutes = Math.floor(seg / 60)
    let seconds = seg % 60
    minutes = minutes < 10 ? `0${minutes}` : minutes
    seconds = seconds < 10 ? `0${seconds}` : seconds
    return `${minutes}:${seconds}`
  }

  constructor(props) {
    super(props)

    const { gallery, tilesQuantity } = this.props.navigation.state.params

    this.state = {
      tiles: tiles(gallery, tilesQuantity),
      isHard: tilesQuantity === 15,
      levelEnd: false,
      score: 0,
      matchedCount: 0,
      timer: null,
      counter: 0,
    }

    this.tick = this.tick.bind(this)
    this.countPairs = this.countPairs.bind(this)
    this.setScore = this.setScore.bind(this)
  }

  componentDidMount() {
    const timer = setInterval(this.tick, 1000)
    this.setState({ timer })
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer)
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  countPairs(openedCount) {
    const matchedCount = this.state.matchedCount + 1

    if (matchedCount === this.state.tiles.length / 2) {
      setTimeout(() => {
        this.setScore(openedCount, this.state.counter)
      }, 100)
    }

    this.setState({ matchedCount })
  }

  setScore(openedCount, time) {
    const score = time / openedCount
    this.setState({
      levelEnd: true,
      score,
    })
  }

  render() {
    return (
      <ScrollView style={styles.game}>
        <Board
          tiles={this.state.tiles}
          isHard={this.state.isHard}
          countPairs={this.countPairs}
        />
        <Status
          matched={this.state.matchedCount}
          cardsTotal={this.state.tiles.length / 2}
          time={this.constructor.convertMinsToHrsMins(this.state.counter)}
        />
        <WinnerAlert
          visibility={this.state.levelEnd}
          score={this.state.score}
          navigation={this.props.navigation}
        />
      </ScrollView>
    )
  }
}

Game.propTypes = {
  navigation: PropTypes.any,
}

export default Game
