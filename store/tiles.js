import data from './TilesList.json'
import shuffle from 'lodash.shuffle'

export default (index) => {
  const shuffleTiles = shuffle(data[index]).concat(shuffle(data[index]))

  return shuffleTiles.map( (tile, index) => (
    {
      id: index,
      imageUrl: tile.imageUrl,
      name: tile.name,
      matched: false,
      opacity: 0
    }
  ))
}
