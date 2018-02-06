import data from './TilesList.json'
import shuffle from 'lodash.shuffle'


export default () => {
  const tiles1 = shuffle(data)
  const tiles2 = shuffle(data)
  return tiles1.concat(tiles2)
}
