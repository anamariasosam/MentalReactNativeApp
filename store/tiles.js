import shuffle from 'lodash.shuffle'
import TilesList from './TilesList'

export default (gallery) => {
  const data = Object.keys(TilesList[gallery]);
  const shuffleTiles = shuffle(data.concat(data))

  return shuffleTiles.map( (tile, index) => (
    {
      id: index,
      name: tile,
      opacity: 0,
      gallery
    }
  ))
}
