import { createStore } from 'redux'
import reducers from '../reducers'

import data from './TilesList.json'
import shuffle from 'lodash.shuffle'

const tiles = () => {
  const shuffleTiles = shuffle(data).concat(shuffle(data))

  return shuffleTiles.map( (tile, index) => (
    {
      id: index,
      imageUrl: tile.imageUrl,
      title: tile.title,
      flipped: false,
      opacity: 0
    }
  ))
}

const store = createStore(reducers, { tiles: tiles() })

export default store
