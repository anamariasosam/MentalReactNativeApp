import data from './TilesList.json'
import shuffle from 'lodash.shuffle'

export default () => {
  const shuffleTiles = shuffle(data).concat(shuffle(data))

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
