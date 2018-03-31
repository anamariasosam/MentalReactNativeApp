import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Tile from '../components/Tile'

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    margin: 10,
    maxWidth: 248,
  },
  hardLevel: {
    maxWidth: 310,
  },
})

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCards: [],
      matchedCount: 0,
      openedCount: 0,
    }
  }

  // Show Tile Selected
  handleTileOpacity(id, opacity) {
    const { tiles } = this.props
    const tileIndex = tiles.findIndex(item => item.id === id)
    const tile = tiles[tileIndex]
    tile.opacity = opacity

    const tilesUpdated = tiles
      .slice(0, tileIndex)
      .concat(tile, tiles.slice(tileIndex + 1, tiles.length))

    this.setState({ tiles: tilesUpdated })
  }

  // Validate two cards openened
  validateCard(tile) {
    const cards = this.state.selectedCards

    if (cards.length < 2) {
      const selectedCards = [...cards, tile]
      this.setState({ selectedCards })

      if (selectedCards.length === 2) {
        if (selectedCards[0].name !== selectedCards[1].name) {
          setTimeout(() => {
            this.handleTileOpacity(selectedCards[0].id, 0)
            this.handleTileOpacity(selectedCards[1].id, 0)
          }, 500)
        } else {
          const matchedCount = this.state.matchedCount + 1

          if (matchedCount === this.props.tiles.length / 2) {
            this.setScore()
          }

          this.setState({ matchedCount })
        }

        this.setState({ selectedCards: [] })
      }
    }
  }

  setScore() {
    console.log(this.state.openedCount, 'Fichas abiertas')
  }

  handleCardClick(tile) {
    const openedCount = this.state.openedCount + 1
    this.setState({ openedCount })
    this.handleTileOpacity(tile.id, 1)
    this.validateCard(tile)
  }

  render() {
    return (
      <View style={[styles.board, this.props.isHard && styles.hardLevel]} >
        {
          this.props.tiles.map(tile => (
            <Tile
              {...tile}
              key={tile.id}
              onPress={() => this.handleCardClick(tile)}
            />
          ))
        }
      </View>
    )
  }
}

Board.propTypes = {
  tiles: PropTypes.any,
  isHard: PropTypes.bool,
}

export default Board
