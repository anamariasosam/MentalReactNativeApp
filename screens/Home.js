import React, {Component} from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import { Overlay, Text } from 'react-native-elements';

import tiles from '../store/tiles'

import TileItem from '../components/TileItem'
import OverlayContent from '../components/OverlayContent'
import Status from '../components/Status'

class Home extends Component {
  static navigationOptions = {
    title: 'Juego de Parejas 🧠',
  }

  constructor(props) {
    super(props)

    this.state = {
      tiles: tiles(0),
      selectedCards: [],
      matchedCount: 0,
      levelEnd: false,
      timer: null,
      counter: 0
    }

    this.tick = this.tick.bind(this)
  }
  componentDidMount() {
    let timer = setInterval(this.tick, 10);
    this.setState({timer});
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  convertMinsToHrsMins(ms) {
    let seconds = Math.floor(ms / 60);
    let miliseconds = ms % 100;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    miliseconds = miliseconds < 10 ? '0' + miliseconds : miliseconds;
    return `${seconds}:${miliseconds}`;
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1
    });
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
          const matchedCount = this.state.matchedCount + 1

          if(matchedCount  == this.state.tiles.length / 2){
            setTimeout( () => {
              this.setState({ levelEnd: true })
            }, 500)

          }

          this.setState({ matchedCount })
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
      <View style={styles.game}>
        <View style={styles.board}>
          {this.renderTiles()}
        </View>
        <Status
          matched={this.state.matchedCount}
          cardsTotal={this.state.tiles.length/2}
          time={this.convertMinsToHrsMins(this.state.counter)}
        />
        <Overlay
          isVisible={this.state.levelEnd}
          windowBackgroundColor='rgba(255, 255, 255, .9)'
          width='auto'
          height='auto'
          overlayBackgroundColor='#E71D36'
          borderRadius={6}
          >
            <OverlayContent
              text='🎉 TERMINASTE 🎉'
              buttonText='Siguiente Nivel'
              navigation={this.props.navigation}
            />
        </Overlay>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 10
  }
})

export default Home
