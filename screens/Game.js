import React, {Component} from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import tiles from '../store/tiles'

import Tile from '../components/Tile'
import WinnerAlert from '../components/WinnerAlert'
import Status from '../components/Status'

class Game extends Component {
  static navigationOptions = {
    title: 'Mental',
    headerLeft: null
  }

  constructor(props) {
    super(props)

    const gallery = this.props.navigation.state.params.gallery;
    this.state = {
      tiles: tiles(gallery),
      selectedCards: [],
      matchedCount: 0,
      levelEnd: false,
      timer: null,
      counter: 0,
      gallery,
      openedCount: 0,
    }

    this.tick = this.tick.bind(this)
  }

  componentDidMount() {
    let timer = setInterval(this.tick, 1000);
    this.setState({timer});
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  convertMinsToHrsMins(seg) {
    let minutes = Math.floor(seg / 60);
    let seconds = seg % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${minutes}:${seconds}`;
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  // Show Tile Seleected
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

  // Validate two cards openened
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
          const matchedCount = this.state.matchedCount + 1

          if(matchedCount  == this.state.tiles.length / 2){
            setTimeout( () => {
              this.setState({ levelEnd: true })
            }, 500)

            this.setScore()

          }

          this.setState({ matchedCount })
        }

        this.setState({ selectedCards: [] })
      }
    }
  }

  setScore() {
    console.log(this.state.openedCount, 'Fichas abiertas');
    console.log(this.state.counter, 'Tiempo en segundos');
  }

  handleCardClick(tile) {
    const openedCount = this.state.openedCount + 1;
    this.setState({ openedCount })
    this.changeOpacity(tile.id, 1)
    this.validateCard(tile)
  }

  renderTiles() {
    return this.state.tiles.map( tile =>
      <Tile
        {...tile}
        key={tile.id}
        onPress={() => this.handleCardClick(tile)}
      />
    )
  }

  render() {
    return(
      <View style={styles.game}>
        <View style={styles.board}>
          {this.renderTiles()}
        </View>
        <Status
          matched={this.state.matchedCount}
          cardsTotal={this.state.tiles.length/2}
          time={this.convertMinsToHrsMins(this.state.counter)}
        />
        <WinnerAlert
          visibility={this.state.levelEnd}
          navigation={this.props.navigation}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  game: {
    flex: 1,
    backgroundColor: '#FDFFFC'
  },
  board: {
    padding: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
  },
})

export default Game
