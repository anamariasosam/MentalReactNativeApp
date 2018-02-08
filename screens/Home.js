import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import tiles from '../store/tiles'

import TileItem from '../components/TileItem'

class Home extends Component {
  static navigationOptions = {
    title: 'Juego de Parejas 🧠',
  }

  constructor(props) {
    super(props)

    this.state = {
      tiles: tiles(),
      selectedCards: [],
      matchedCount: 0
    }
  }

  changeOpacity(id, opacity) {
    const tiles = this.state.tiles
    const tileIndex = tiles.findIndex(item => item.id === id)
    const tile = tiles[tileIndex]
    tile.opacity = opacity

    const tiles_updated =
      tiles
        .slice(0, tileIndex)
        .concat(
          tile,
          tiles.slice(tileIndex + 1, tiles.length)
        )

    this.setState({tiles: tiles_updated})
  }

  validateCard(tile) {
    const cards = this.state.selectedCards

    if (cards.length < 2) {
      const selectedCards = [...cards, tile]
      this.setState({ selectedCards })

      if ( selectedCards.length === 2) {

        if (selectedCards[0].name !== selectedCards[1].name) {

          setTimeout( () => {
            this.changeOpacity(selectedCards[0].id, 0)
            this.changeOpacity(selectedCards[1].id, 0)
          }, 500)

        } else {
          this.setState({ matchedCount: this.state.matchedCount+1 })
        }

        this.setState({ selectedCards: [] })
      }
    }
  }

  handleCardClick(tile) {
    this.changeOpacity(tile.id, 1)
    this.validateCard(tile)
  }

  renderTiles() {
    return this.state.tiles.map( tile =>
      <TileItem
        {...tile}
        key={tile.id}
        onPress={() => this.handleCardClick(tile)}
      />
    )
  }

  render() {
    return(
      <View>
        <View style={styles.board}>
          {this.renderTiles()}
        </View>
        <Text>
            Parejas encontradas:
            {this.state.matchedCount}
            /
            {this.state.tiles.length / 2}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  board: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 10
  }
})

export default Home
