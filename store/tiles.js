import data from './TilesList.json'
import shuffle from 'lodash.shuffle'

export default (index) => {
  const shuffleTiles = shuffle(data[index]).concat(shuffle(data[index]))

  return shuffleTiles.map( (tile, index) => (
    {
      id: index,
      name: tile.name,
      opacity: 0
    }
  ))
}
